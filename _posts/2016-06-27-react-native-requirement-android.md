---
layout:     post
title:      "react-native搭建开发环境"
subtitle:   "android版"
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
5. 安装Android Studio

    React Native目前需要[Android Studio][7]2.0或更高版本。

        Android Studio需要Java Development Kit [JDK] 1.8或更高版本。
        你可以在命令行中输入`javac -version`来查看你当前安装的JDK版本。
        如果版本不合要求，则可以到 官网上下载。

    Android Studio包含了运行和测试React Native应用所需的Android SDK和模拟器。

        除非特别注明，请不要改动安装过程中的选项。
        比如Android Studio默认安装了`Android Support Repository`，而这也是React Native必须的
        （否则在react-native run-android时会报appcompat-v7包找不到的错误）。


    安装过程中有一些需要改动的选项：

    *   选择Custom选项：
    ![选择Custom选项][7]

    *   勾选`Performance`和`Android Virtual Device`
    ![勾选`Performance`和`Android Virtual Device`][8]

    *   安装完成后，在Android Studio的启动欢迎界面中选择`Configure | SDK Manager`。
    ![勾选`Performance`和`Android Virtual Device`][9]

    *  在`SDK Platforms`窗口中，选择`Show Package Details`，然后在`Android 6.0 (Marshmallow)`中勾选`Google APIs`、`Intel x86 Atom System Image`、`Intel x86 Atom_64 System Image`以及`Google APIs Intel x86 Atom_64 System Image`。
    ![在`SDK Platforms`窗口中][10]

    *   在`SDK Tools`窗口中，选择`Show Package Details`，然后在`Android SDK Build Tools`中勾选`Android SDK Build-Tools 23.0.1`。（必须是这个版本）
    ![在`SDK Tools`窗口中][11]

    *  配置ANDROID_HOME环境变量
    确保`ANDROID_HOME`环境变量正确地指向了你安装的Android SDK的路径。
    具体的做法是把下面的命令加入到`~/.bash_profile`文件中：
    (注：`~`表示用户目录，即`/Users/你的用户名/`，而小数点开头的文件在Finder中是隐藏的，并且这个文件有可能并不存在。
    请在终端下使用`sudo vi ~/.bash_profile`命令创建或编辑。如不熟悉vi操作，请点击[这里][12]学习）

        # 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。
        export ANDROID_HOME=~/Library/Android/sdk


    然后使用下列命令使其立即生效（否则重启后才生效）：

    `source ~/.bash_profile`

    可以使用`echo $ANDROID_HOME`检查此变量是否已正确设置

    *   将`Android SDK`的Tools目录添加到`PATH`变量中
    你可以把`Android SDK`的tools和`platform-tools`目录添加到PATH变量中，以便在终端中运行一些Android工具，
    例如`android avd`或是`adb logcat`等。具体做法仍然是在`~/.bash_profile`中添加：

     注意：你的SDK的具体路径可能不同

        PATH="~/Library/Android/sdk/tools:~/Library/Android/sdk/platform-tools:${PATH}"
        export PATH


## 推荐安装
1. [Watchman][2]是由Facebook提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager可以快速捕捉文件的变化从而实现实时刷新）。

    `brew install watchman`

2. [Flow][3]是一个静态的JS类型检查工具。译注：你在很多示例中看到的奇奇怪怪的冒号问号，以及方法参数中像类型一样的写法，都是属于这个flow工具的语法。这一语法并不属于ES标准，只是Facebook自家的代码规范。所以新手可以直接跳过（即不需要安装这一工具，也不建议去费力学习flow相关语法）。

3. [WebStorm][4]强大的前端开发IDE, 可集成很多实用插件, 包括[react-native语法智能提醒插件][6], 可用于编写React Native应用

   安装破解版请参阅[这里][5]

4. [Gradle Daemon][13]

   开启Gradle Daemon可以极大地提升java代码的增量编译速度。

## 常见问题
### 安装Android Studio时无法创建虚拟设备

某些版本的Android Studio可能存在一个[已知的bug][14]，导致在安装时无法创建虚拟设备。安装过程中可能看到如下报错：

```
Creating Android virtual device
Unable to create a virtual device: Unable to create Android virtual device
```

如果你碰到了这个问题，可以运行`android avd`来手工创建虚拟设备。
![手工创建虚拟设备][15]
然后在AVD管理器（AVD Manager）窗口中选择新设备并点击`Start...`来启动。

### Shell命令无响应的异常
如果你碰到了下面这样的异常：

```
Execution failed for task ':app:installDebug'.
  com.android.builder.testing.api.DeviceException: com.android.ddmlib.ShellCommandUnresponsiveException
```

试着将项目目录`/android/build.gradle`中的Gradle版本改为1.2.3。

```
touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
```


## 调试

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

## 修改项目

现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

```
使用你喜欢的编辑器打开index.android.js并随便改上几行。
在Android Emulator中按下⌘-R就可以刷新APP并看到你的最新修改！
```

[1]: http://brew.sh/
[2]: https://facebook.github.io/watchman/docs/install.html
[3]: https://www.flowtype.org/
[4]: http://www.jetbrains.com/webstorm/
[5]: http://cyqresig.github.io/2016/06/27/webstorm-crack
[6]: http://cyqresig.github.io/2016/06/27/webstorm-react-native-grammer-plugin
[7]: http://reactnative.cn/static/docs/0.27/img/react-native-android-studio-custom-install.png
[8]: http://reactnative.cn/static/docs/0.27/img/react-native-android-studio-additional-installs.png
[9]: http://reactnative.cn/static/docs/0.27/img/react-native-android-studio-configure-sdk.png
[10]: http://reactnative.cn/static/docs/0.27/img/react-native-android-studio-android-sdk-platforms.png
[11]: http://reactnative.cn/static/docs/0.27/img/react-native-android-studio-android-sdk-build-tools.png
[12]: http://cyqresig.github.io/2016/06/27/vi
[13]: https://docs.gradle.org/2.9/userguide/gradle_daemon.html
[14]: https://code.google.com/p/android/issues/detail?id=207563
[15]: http://reactnative.cn/static/docs/0.27/img/react-native-android-studio-avd.png