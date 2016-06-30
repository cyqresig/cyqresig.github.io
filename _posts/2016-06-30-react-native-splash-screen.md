---
layout:     post
title:      "react-native实现launchImage和splash-screen"
subtitle:   "ios/anroid"
author:     "绯雨闲丸"
header-img: "img/react-native-bg.jpg"
tags:
    - react-native
---

>

## 为什么实现splashScreen
1. 对于ios版本, 点击桌面的app icon后, 自动加载launchImage, launchImage加载完毕后就会进入应用首屏,
虽然launchImage加载持续时间可以手动设置, 但是却没有关闭launchImage的api, 如果希望在加载首屏前执行一
些逻辑(例如, 网络请求一些数据), 在这些逻辑执行完毕之前用户看不见首屏, 仍然只能看到lauchImage展现的部分,
是无法实现的. 因此, ios需要自行实现类似android的splashScreen.

2. 对于android版本, 源生支持实现splashScreen, 但要实现类似ios的launchImage效果, 需要对AndroidManifest.
xml文件进行微调.

## ios实现launchImage
ios源生支持实现launchImage, 可以点[这里][1]了解, 这里就不展开了.

## ios实现splashScreen
1. 安装组件`react-native-splashscreen`
`npm install @remobile/react-native-splashscreen --save`

2. 将`RCTSplashScreen.xcodeproj`拖入你的Xode工程的`Libraries`下.

3. 点击你的主工程文件, 选择`Build Phases`, 并在工程Products目录下找到`RCTSplashScreen.xcodeproj`, 将其中包含的`libRCTSplashScreen.a`拖入.

4. 在`Builder Settings`中找到`Header Search Paths`, 确认其中包含`$(SRCROOT)/../../../react-native/React`(recursive).

5. 在`Builder Settings`中找到`Header Search Paths`,  确认其中包含`$(SRCROOT)/../node_modules/@remobile/react-native-splashscreen/ios/RCTSplashScreen`

6. 删除工程里的LaunchScreen.xib

7. 将组件中的`SplashScreenResource`目录拖入工程, 确认类型是`groups`, 并且`Add Targets`选中, 如果希望使用不同的splash图片, 可以替换`splash.png`

8. 工程里找到AppDelegate.m

```
...
#import "RCTSplashScreen.h" //<--- 新增导入
...
RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"KitchenSink"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];

  [RCTSplashScreen show:rootView]; //<--- 新增显示splashScreen

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
```

## android实现launchImage
1. 准备一张背景图片, 自定义命名(比如命名为splash), 自己选择图片格式, 放在drawable目录下

2. 配置strings.xml

```
<resources>

    <!--&lt;!&ndash; Base application theme. &ndash;&gt;-->
    <!--<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">-->
        <!--&lt;!&ndash; Customize your theme here. &ndash;&gt;-->
    <!--</style>-->

    <style name="AppTheme" parent="@android:style/Theme.Black">
        <item name="android:windowBackground">@drawable/splash</item>
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowFullscreen">true</item>
        <item name="android:windowContentOverlay">@null</item>
    </style>
</resources>

```

3. 配置AndroidManifest.xml

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.helloreactnative"
    android:versionCode="1"
    android:versionName="1.0">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <uses-sdk
        android:minSdkVersion="16"
        android:targetSdkVersion="22" />

    <application
      android:allowBackup="true"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
          android:theme="@style/AppTheme">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>

</manifest>
```

## android实现splashScreen

1. 安装组件`react-native-splashscreen`
`npm install @remobile/react-native-splashscreen --save`

2. 在工程中找到`android/settings.gradle`, 加入如下:

```
...
include ':react-native-splashscreen'
project(':react-native-splashscreen').projectDir = new File(rootProject.projectDir, '../node_modules/@remobile/react-native-splashscreen/android')
```

3. 在工程中找到`android/app/build.gradle`, 加入如下:

```
...
dependencies {
    ...
    compile project(':react-native-splashscreen')
}
```

4. 如果希望使用不同的splash图片, 替换`res/drawable/splash.png`

5. 在MainActivity.java中注册模块

```
import com.remobile.splashscreen.*;  // <--- 导入包

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setBundleAssetName("index.android.bundle")
      .setJSMainModuleName("index.android")
      .addPackage(new MainReactPackage())
      .addPackage(new RCTSplashScreenPackage(this))              // <------ 加入splashScreen的package
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "ExampleRN", null);

    setContentView(mReactRootView);
  }

  ......
}
```


## 效果展示

![ios-splash-screen][2]

![android-splash-screen][3]


## react-native中关闭splashScreen

```
'use strict';
var React = require('react-native');
var {
    AppRegistry,
    View,
    Text,
} = React;

var SplashScreen = require('@remobile/react-native-splashscreen');  //导入包

var KitchenSink = React.createClass({
    componentDidMount: function() {
        SplashScreen.hide();    //调用api隐藏splashScreen
    },
    render() {
        return(
            <View>
                <Text>
                    fangyunjiang is a good developer!
                </Text>
            </View>
        );
    }
});

AppRegistry.registerComponent('KitchenSink', () => KitchenSink);
```



[1]: http://cyqresig.github.io/2016/06/30/ios-launch-image
[2]: http://cyqresig.github.io/img/ios-splash-screen.gif
[3]: http://cyqresig.github.io/img/android-splash-screen.gif
