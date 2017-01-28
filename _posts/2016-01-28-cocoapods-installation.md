---
layout:     post
title:      "Mac上安装安装cocoapods的注意事项"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/react-native-etc.jpg"
tags:
    - react-native
    - ios
    - CocoaPod
---

>

## 安装步骤
1. 检查一下gem版本, 必要时升级gem，如果它的版本过低也可能导致安装失败，升级命令如下：

   `sudo gem update --system`

2. Mac OS X 10.11以前，安装cocoapods的命令如下：

   `sudo gem install cocoapods`

   OS X 10.11以后，会在安装时碰到没有权限的问题, 需要换成下面的命令：

   `sudo gem install -n /usr/local/bin cocoapods`

2. 使用pod命令安装, 根据网络线路情况, 可能会非常的耗时, 推荐用电信的线路, 或者翻墙, 命令如下:

    `pod setup`

3. 查看一下pod的版本号, 命令如下:

   `pod --version`

4. 查看一下pod的repo, 命令如下:

    `pod repo list`

   如结果为0 repos则说明安装不成功，可以删除.cocoapods目录, 重新进行安装

5. 重新安装的命令如下：

   `cd ~/.cocoapods/`

   `sudo rm -rf ~/.cocoapods/`

   `pod setup`














