# VSCode P3C

<!-- [![Build Status](https://travis-ci.org/ChuckJonas/vscode-apex-pmd.svg?branch=master)](https://travis-ci.org/ChuckJonas/vscode-apex-pmd) -->

[阿里巴巴Java编程规范 (P3C/阿里巴巴Java开发手册)][p3c-websit] VSCode 扩展

[Alibaba Java Coding Guidelines][p3c-websit] VSCode implements

## 基于 Based

[ChuckJonas/vscode-apex-pmd](https://github.com/ChuckJonas/vscode-apex-pmd)

## 路线图 Route Map

* [] 实现基于 PMD `XML` 的配置
* [ ] 优化分析速度，基于 LSP （语言服务器）实现
* [ ] 实现基于 `JSON` 灵活的配置
  * [ ] 支持配置 各个检查项的 错误等级/是否检测
  * [ ] 支持配置 忽略目录 文件
  * [ ] 支持生成 XML 配置 （用于 maven pmd plugin）
  * [ ] 支持生成 JOSN 配置智能提示 https://github.com/SchemaStore/schemastore pull request

* [ ] `pmd` `xml` configuration
* [ ] Optimize analysis speed, Base on VSCode LSP
* [ ] customize `json` configuration
    * [ ] config: each check item error level (e.g. error warn info)
    * [ ] config: ignore file or directory
    * [ ] generate XML config for maven-pmd-plugin
    * [ ] supper JOSN config smart suggest by pull request https://github.com/SchemaStore/schemastore pull request

## Features

<!-- ![Apex PMD](https://raw.githubusercontent.com/ChuckJonas/vscode-apex-pmd/master/images/apex-pmd.gif)

### Current actions Supported

- Run analysis on file open
- Run analysis on file save
- Run analysis on entire workspace
- Run analysis on single file
- Ability to define your own ruleset

## System Requirements

- Must have JRE >= 1.7 installed and in path
- See [PMD System Requirements](https://pmd.github.io/pmd-6.11.0/pmd_userdocs_installation.html#requirements) for more details -->

## Configuration

<!-- - `rulesets` (optional): set to override default ruleset (see "Defining your own ruleset" for more details)
- `runOnFileOpen`: run every time a file is opened in vscode
- `runOnFileSave`: run every time a file is saved
- `priorityErrorThreshold`: Determines at what priority level 'errors' will be added. Anything less will be a warning or hint
- `priorityWarnThreshold`: Determines at what priority level 'warnings' will be added. Anything less will be a hint
- `enableCache`: Creates a cache file for PMD to run faster. Will create a .pmdCache file in your workspace
- `pmdBinPath` (prev. `pmdPath`) (optional): set to override the default pmd binaries. This should point to the PMD folder which contains folders `lib` and `bin`. Most likely it is called `libexec`.
- `additionalClassPaths` (optional): set of paths to be appended to classpath. Used to find jar files containing custom rule definitions. Can be absolute or relative to workspace.
- `commandBufferSize` Size of buffer used to collect PMD command output (MB), may need to be increased for very large projects

### Defining your own "Ruleset"

I recommend you use the [default ruleset](https://github.com/ChuckJonas/vscode-apex-pmd/blob/master/rulesets/apex_ruleset.xml) as a starting point.

Set `apexPMD.rulesets` string array to reference your custom rulesets. You can either use the absolute paths, or a relative paths from your workspace (EG `my-apex-rules.xml`).

You can also mention the default ruleset in `apexPMD.rulesets`. To do this add `default` value to the array.

[Apex Ruleset Reference](https://pmd.github.io/pmd-6.11.0/pmd_rules_apex.html)

NOTE: If you move away from the default ruleset in an sfdx project, make sure to exclude the `.sfdx` generated classes by keeping this line:

`<exclude-pattern>.*/.sfdx/.*</exclude-pattern>`

### Using custom rules written in Java

If you want to use your own [custom rules](https://pmd.github.io/latest/pmd_userdocs_extending_writing_pmd_rules.html) from a jar file, then the jar file must be on the classpath. By default, the PMD folder and the workspace root folder are included in the classpath. You can add further folders using the `additionalClassPaths` setting.  This ["Hello world"](https://github.com/andrewgilbertsagecom/pmd-custom-rule-sample) example is a good starting place for beginners. -->

## Developing/Contributing

### Setup & Run

1. `git clone`
1. `npm install`
1. debug -> "launch extension"

### Upgrading PMD

`npm run update-pmd`

Any pull request submitted with updates to PMD MUST BE "CHECKSUMED"!

## Legal Stuff

```
Copyright (c) 2003-2009, InfoEther, LLC
All rights reserved.

This product includes software developed in part by support from
the Defense Advanced Research Project Agency (DARPA)

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER
OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

The full license (BSD-style) can be found in the [PMD repo](https://github.com/pmd/pmd/blob/master/LICENSE)

[p3c-websit]: https://developer.aliyun.com/special/tech-java "P3C"
