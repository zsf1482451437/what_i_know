---
id: Python
title: Python
tags:
  - Python
---

import TOCInline from "@theme/TOCInline";

<TOCInline
  toc={toc.filter((node) => node.level === 2)}
  minHeadingLevel={2}
  maxHeadingLevel={2}
/>

## 基础知识

### 前提

#### **如何运行 python 程序？**

vscode + 插件 + python 解释器

1.vscode 添加 **python** 插件

2.**Ctrl`+`Shift`+`P** 呼出命令栏，输入命令 `Python:Select Interpreter`选择解释器（如果没 python 解释器提前安装）

3.新建个 py 文件，执行第一个 py 程序

hello.py

```python
msg = 'hello'
print(msg)
```

4.右键，选择 **run python file in terminal**，你会看到命令行打印 hello 啦

#### python 解释器作用？

- **解析 Python 代码**：Python 解释器可以读取 Python 代码文件，将代码**解释为机器语言**并执行。它可以执行各种 Python 语句，包括赋值、控制流语句、函数调用等。
- 提供**交互式环境**：Python 解释器还可以提供一个**交互式环境**，允许用户在命令行中输入 Python 代码，并即时执行和查看结果。这种交互式环境对于测试代码和学习 Python 语言非常有用。
- **调试 Python 代码**：Python 解释器还可以用于调试 Python 代码，它可以执行代码并在代码执行过程中提供调试信息和错误提示，帮助开发者找到和修复代码中的错误。
- 执行 Python 脚本：Python 解释器还可以执行 Python 脚本文件，使得 Python 脚本可以像其他可执行文件一样在操作系统中运行。在 **Linux** 和 macOS 等类 Unix 系统中，可以通过 **shebang**（#!）来指定 Python 解释器的路径，使得 Python 脚本可以通过命令行直接运行；在 **Windows** 系统中，可以将 Python 解释器添加到系统的 **PATH 环境变量**中，使得 Python 脚本可以在命令行中执行。

#### 操作系统中环境变量的作用？

操作系统中的环境变量是一组在操作系统中定义的**变量**，它们包含了一些常用的**系统路径**、**配置信息**和**用户自定义设置**等，可以被系统和应用程序使用。环境变量的主要作用包括：

1. 定义**系统路径**：环境变量可以定义一些常用的系统路径，例如 PATH、PYTHONPATH 等。这些路径可以让系统和应用程序**更方便**地访问和执行一些命令、脚本和程序等。
2. 配置**系统参数**：环境变量可以定义一些系统参数，例如 LANG、LC_ALL、TZ 等。这些参数可以影响系统的语言、时区、字符集、显示效果等，从而改变系统的行为和外观。
3. 设置**用户偏好**：环境变量可以定义一些用户偏好设置，例如 SHELL、EDITOR、PS1 等。这些设置可以影响用户的命令行交互、文本编辑、提示符等体验，从而提高用户的工作效率和舒适度。
4. **传递参数和数据**：环境变量可以传递参数和数据，例如在 Shell 脚本中，可以使用环境变量传递一些参数和数据给其他程序或脚本使用。

举个例子，将 **D:\developer_tools\idea\jdk-11.0.2\bin** 添加到系统的 PATH 环境变量中，可以让系统和应用程序更方便地访问和执行 JDK 中的各种工具和命令。例如，在命令行中输入 **javac** 命令时，操作系统会在 PATH 环境变量中查找**该命令对应的可执行文件**，而 PATH 环境变量中包含了 D:\developer_tools\idea\jdk-11.0.2\bin 路径，因此可以找到并执行 javac 可执行文件。
