---
layout:     post
title:      "ios开发移除cocoapods配置"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/react-native-etc.jpg"
tags:
    - react-native
    - ios
    - CocoaPod
---

>

## 前言

CocoaPods可以通过命令,将第三方类库配置到我们的项目中,
而不需要采用手动拖拽的方式进行配置.
但是很遗憾的是, CocoaPads并没有移除这些配置的命令,
所以,只能靠手动的方式从项目中移除了.

## 在项目中删除某个CocoaPads配置的第三方类库
1. 在项目根目录下找到Podfile文件并打开

2. 找到需要删除的配置文本, 将之删除, 示例如下:

    `pod 'AFNetwork'`

3. 终端在当前项目目录下`pod install`命令, 每三方类库被移除

## 在项目中删除整个CocoaPods配置
1. 删除项目根目录下的`xcworkspace`文件

2. 删除项目根目录下的`Podfile`、`Podfile.lock`和`Pods`文件夹

3. 在XCode中删除项目中的`Pods`文件夹及`Pods.xcconfig`引用和`libpods.a`

4. 在XCode中, 选择`Build Phases`选项，删除`Check Pods Manifest.lock`和`Copy Pods Resources`, 以及`Embeded Pods Frameworks`


