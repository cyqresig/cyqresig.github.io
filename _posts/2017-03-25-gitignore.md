---
layout:     post
title:      "gitignore使用小记"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - git
    - gitignore
---

>

## 为什么要使用gitignore

在进行项目源代码管理时，总会存在一些文件不希望加入管理，但每次在提交时手动控制是极不方便的。
而`gitignore`可以很方便地解决上面问题。

## gitignore是如何解决问题的

`gitignore`的工作原理是：
当你对文件进行源代码管理时，`gitignore`插件会去查找当前编辑文件的目录或者其祖先目录中是否存在`.gitignore`配置文件。
如果存在，则`.gitignore`配置文件中对应配置的规则会生效，忽略对应的文件。

## 如何使用gitignore

gitignore使用起来非常的方便。只需要如下几个步骤：

* 在项目根目录创建一个`.gitignore`的文件

* 在这个文件中定义需要忽略的文件

* 给IDE安装gitignore插件

## gitignore配置语法

* 以斜杠`/`开头表示目录

* 以星号`*`通配多个字符

* 以问号`?`通配单个字符

* 以方括号`[]`包含单个字符的匹配列表

* 以叹号`!`表示不忽略(跟踪)匹配到的文件或目录

* 以二个星号`**`开头表示匹配所有目录

* 以二个星号`/**`结尾表示匹配目录里的所有

* 以斜杠中间的二个星号`/**/`表示0或多个目录

## 示例

1. 规则：`fd1/*`

    说明：忽略目录 `fd1` 下的全部内容；注意，不管是根目录下的 `/fd1/` 目录，还是某个子目录 `/child/fd1/` 目录，都会被忽略；

2. 规则：`/fd1/*`
　　　　  
    说明：忽略根目录下的 `/fd1/` 目录的全部内容；

3. 规则：

    ```
    /*
    !.gitignore
    !/foo
    !/foo/bar    
    ```

   说明：忽略全部内容，但是不忽略 `.gitignore` 文件、根目录下的 `/foo` 和 `/foo/bar    ` 目录

## 推荐的前端项目配置

```js
# OSX
#
.DS_Store

# WebStorm
#
.idea

# node.js
#
node_modules/
npm-debug.log
yarn-error.log

# others
#
build/
```

## 资源

[gitignore 文档][1]

[1]: https://git-scm.com/docs/gitignore










