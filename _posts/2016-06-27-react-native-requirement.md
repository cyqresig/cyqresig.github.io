---
layout:     post
title:      "react-native搭建开发环境"
subtitle:   "ios版"
author:     "绯雨闲丸"
header-img: "img/react-native-bg.jpg"
tags:
    - react-native
---

>

## 环境需求
1. 一台mac电脑(笔记本, 台式机不限), 操作系统OS X及以上

2. 安装[HomeBrew][1]

   *    点击桌面左下角"Finder" -> 点击顶部菜单栏"前往" -> 选择"实用工具" -> 双击"终端"
   *    执行如下命令

        `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

        注: 在Max OS X 10.11（El Capitan)版本中，homebrew在安装软件时可能会碰到/usr/local目录不可写的权限问题。可以使用下面的命令修复：

        `sudo chown -R ``whoami`` /usr/local`


3. 使用Homebrew来安装Node.js.

   `brew install node`

4. 安装React Native的命令行工具（react-native-cli）

   React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

   `npm install -g react-native-cli`

   注：由于众所周知的网络原因，react-native命令行从npm官方源拖代码时会遇上麻烦。请将npm仓库源替换为国内镜像：

    ```
    npm config set registry https://registry.npm.taobao.org --global
    npm config set disturl https://npm.taobao.org/dist --global
    ```

## 推荐安装
1. [Watchman][2]是由Facebook提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager可以快速捕捉文件的变化从而实现实时刷新）。

    `brew install watchman`

2. [Flow][3]是一个静态的JS类型检查工具。译注：你在很多示例中看到的奇奇怪怪的冒号问号，以及方法参数中像类型一样的写法，都是属于这个flow工具的语法。这一语法并不属于ES标准，只是Facebook自家的代码规范。所以新手可以直接跳过（即不需要安装这一工具，也不建议去费力学习flow相关语法）。

3. [WebStorm][4]强大的前端开发IDE, 可集成很多实用插件, 包括[react-native语法智能提醒插件][6], 可用于编写React Native应用

   安装破解版请参阅[这里][5]

## 调试

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```

你也可以直接在双击`ios/AwesomeProject.xcodeproj`文件然后在Xcode中点击Run按钮,
或者先在WebStorm中打开AwesomeProject文件夹 然后在Terminal中执行`npm start`，再在Xcode中点击Run按钮

## 修改项目

现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

```
使用你喜欢的编辑器打开index.ios.js并随便改上几行。
在iOS Emulator中按下⌘-R就可以刷新APP并看到你的最新修改！
```

[1]: http://brew.sh/
[2]: https://facebook.github.io/watchman/docs/install.html
[3]: https://www.flowtype.org/
[4]: http://www.jetbrains.com/webstorm/
[5]: http://cyqresig.github.io/2016/06/27/webstorm-crack
[6]: http://cyqresig.github.io/2016/06/27/webstorm-react-native-grammer-plugin
