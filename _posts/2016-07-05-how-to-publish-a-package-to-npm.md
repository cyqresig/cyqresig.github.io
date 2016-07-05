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

由于众所周知的网络原因，react-native命令行从npm官方源拖代码时会遇上麻烦。请将npm仓库源替换为国内镜像：

npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

但是发布包的时候需要将仓库源替换回默认源

npm config set registry http://registry.npmjs.org --global
npm config set disturl http://npmjs.org/dist --global













