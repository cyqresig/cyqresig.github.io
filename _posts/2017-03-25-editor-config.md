---
layout:     post
title:      "EditorConfig使用小记"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - editor
    - editorconfig
---

>

## 为什么要使用EditorConfig

当存在多人协作开发项目时，每个人喜好使用的IDE经常各不相同，就算相同每个人对于IDE喜好的编码风格配置（例如缩进是2个空格还是4个空格）也未必相同。

而`EditorConfig`可以很方便地解决上面问题。

## EditorConfig是如何解决问题的

`EditorConfig`的工作原理是：
当你打开文件进行coding时，`EditorConfig`插件会去查找当前编辑文件的目录或者其祖先目录中是否存在`.editorconfig`配置文件。
如果存在，则IDE的编码风格会覆盖IDE自身的设置，与`.editorconfig`文件中定义的保持一致，。

## 如何使用EditorConfig

EditorConfig使用起来非常的方便。只需要如下几个步骤：

* 在项目根目录创建一个`.editorconfig`的文件

* 在这个文件中定义项目的编码规范

* 给IDE安装EditorConfig插件

## 推荐的常用EditorConfig编码风格定义

* indent_style 缩进风格，考虑到`tab`的缩进表现可以被改变，推荐使用`space`而不是`tab`

* indent_size 缩进数，只在indent_style设置为`space`时有用，推荐设置为4个空格

* end_of_line 换行符格式，推荐使用`lf`

* charset 文件编码，推荐使用`utf-8`

* trim_trailing_whitespace 是否删除行尾的空格，推荐使用`true`

* insert_final_newline 是否在文件最后插入一个空行，推荐使用`true`

* quote_type 字符串是否强制使用单/双引号，js文件推荐使用`single`, 其他使用`double`

* spaces_around_operators 在操作符左右是否空格，推荐使用`true`

* spaces_around_brackets 在括号左右是否空格，推荐使用`none`

* indent_brace_style 使用圆括弧的风格，推荐使用`1TBS`

## 定义使用编码风格的文件范围

以下的配置只对lib目录下的js文件生效
```
[lib/**.js]
indent_style = space
indent_size = 2
```

## 资源

[EditorConfig 官网][1]

[EditorConfig 编码风格定义列表][2]

[1]: http://editorconfig.org/

[2]: https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties












