---
layout:     post
title:      "如何在npm上发布一个包"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/react-native-etc.jpg"
tags:
    - react-native
---

>

我们可以从npm仓库上安装含有package.json文件的目录作为一个包,
当然也可以将一个含有package.json文件的目录作为一个包发布至npm仓库.

下面就介绍一下如何发布包至npm仓库

### 发布前的必要步骤

#### 创建一个npm用户

想要发布包, 你必须在npm仓库上有一个用户.
如果你还没有创建过, 执行`npm adduser`, 或者可以在[npm仓库的网站][2]上创建.

#### 登录你的npm帐号

通过`npm login`登录,
登录后可以通过`npm whoami`以及`npm config ls`来查看你的用户和权限信息

### 发布npm包

通过`npm publish`发布你的包, 包的名称在package.json的name里定义, [点这里查看package.json中各字段的含义][3]

需要注意, 除了*.gitignore*或者*.npmignore*中定义的忽略, 目录中所有的文件都会被发布

发布完后, 可以去`https://npmjs.com/package/<package>`查看你新发布的包的信息

### 更新npm包

修改你的包中的package.json中的*version*版本号, [点这里查看版本号的含义][3]

通过`npm publish`发布你的更新包

发布完后, 可以去`https://npmjs.com/package/<package>`查看你新发布的包的信息, 可以看到版本号的变化

需要注意, 在npm仓库网站上你发布的包中, 显示的readme中的内容只有在版本号更新的发布操作下才会更新

### 下架npm包

通过 `npm unpublish`下架你的包

### 注意事项

由于众所周知的网络原因，react-native命令行从npm官方源拖代码时会遇上麻烦。
一般开发时需要npm仓库源替换为国内镜像：

`npm config set registry https://registry.npm.taobao.org --global`

`npm config set disturl https://npm.taobao.org/dist --global`

但是发布包的时候如果不切换回默认配置, 在发布时会报错,



故需要将仓库源替换回默认源

`npm config set registry http://registry.npmjs.org --global`

`npm config set disturl http://npmjs.org/dist --global`

更详细的内容, 可以查阅[npm官方文档][1]

[1]: https://docs.npmjs.com/
[2]: https://www.npmjs.com/
[3]: http://cyqresig.github.io/2016/07/06/explaination-for-package-json/










