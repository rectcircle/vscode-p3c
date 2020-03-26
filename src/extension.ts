'use strict';

import * as vscode from 'vscode';
import { ApexPmd } from './lib/apexPmd';
import { Config, getRootWorkspacePath } from './lib/config';
import { AppStatus } from './lib/appStatus';

export { ApexPmd };

const supportedLanguageCodes = ['java'];
const isSupportedLanguage = (langCode: string) => 0 <= supportedLanguageCodes.indexOf(langCode);

const appName = 'Java P3C Checker';
const settingsNamespace = 'vscodeP3C';
const collection = vscode.languages.createDiagnosticCollection('vscode-p3c');
const outputChannel = vscode.window.createOutputChannel(appName);

export function activate(context: vscode.ExtensionContext) {

    //setup config
    const config = new Config(context);

    //setup instance vars
    const pmd = new ApexPmd(outputChannel, config);
    AppStatus.setAppName(appName);
    AppStatus.getInstance().ok();

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-p3c.clearProblems', () => {
            collection.clear();
        })
    );

    //setup commands
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-p3c.runWorkspace', () => {
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Running Static Analysis on workspace",
                cancellable: true
            }, (progress, token) => {
                progress.report({ increment: 0 });
                return pmd.run(getRootWorkspacePath(), collection, progress, token);
            });
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-p3c.runFile', (fileName: string) => {
            if (!fileName) {
                fileName = vscode.window.activeTextEditor.document.fileName;
            }
            pmd.run(fileName, collection);
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-p3c.createPmdRuleXmlFile', async () => {
            if (await pmd.createPmdRuleXmlFile()) {
                config.init();
                return pmd.updateConfiguration(config);
            }
        })
    );

    //setup listeners
    if (config.runOnFileSave) {
        vscode.workspace.onDidSaveTextDocument((textDocument) => {
            if(isSupportedLanguage(textDocument.languageId)){
              return vscode.commands.executeCommand('vscode-p3c.runFile', textDocument.fileName);
            }
        });
    }

    if (config.runOnFileOpen) {
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            if(isSupportedLanguage(editor.document.languageId)){
                return vscode.commands.executeCommand('vscode-p3c.runFile', editor.document.fileName);
            }
        });
    }

    vscode.workspace.onDidChangeConfiguration((configChange: vscode.ConfigurationChangeEvent) => {
        if(configChange.affectsConfiguration(settingsNamespace)) {
            config.init();
            return pmd.updateConfiguration(config);
        }
    });

    context.subscriptions.push(vscode.window.onDidChangeVisibleTextEditors(editors => {
        const isStatusNeeded = editors.some((e) => e.document && isSupportedLanguage(e.document.languageId));
        if (isStatusNeeded) {
            AppStatus.getInstance().show();
        } else {
            AppStatus.getInstance().hide();
        }
    }));

    // 检测第一次打开的文件
    let initDocument = vscode.window.activeTextEditor.document;
    if (config.runWorkspaceOnActive === false && isSupportedLanguage(initDocument.languageId)) {
        vscode.commands.executeCommand('vscode-p3c.runFile', initDocument.fileName);
    }
    
    // 第一次启动检测工作空间
    if (config.runWorkspaceOnActive) {
        vscode.commands.executeCommand('vscode-p3c.runWorkspace');
    }
}

export function deactivate() { }

