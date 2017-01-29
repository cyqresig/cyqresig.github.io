---
layout:     post
title:      "react-native整合进已存在的Android原生app"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/react-native-etc.jpg"
tags:
    - react-native
    - ios
    - android
---

>

## 示例

[ReactNativeIntegrationWithExistingApps][1]

## 步骤
1. 首先安装好react-native开发环境

2. 保证你的android工程在项目目录的android目录下`$root/android`

3. 新建一个原生app, 选`Android Application`

4. 在项目根目录下, 执行`npm init`创建`package.json`文件, 并加入必要的scripts与dependency


        {
          "name": "react-native-into-test",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "start": "node node_modules/react-native/local-cli/cli.js start",
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "",
          "license": "MIT",
          "dependencies": {
            "react": "15.4.2",
            "react-native": "^0.40.0"
          }
        }


5. 安装依赖包

    `npm install`

6. 在项目根目录下创建一个`index.android.js`文件, 并编辑内容:


        import React from 'react';
        import {
            AppRegistry,
            StyleSheet,
            Text,
            View
        } from 'react-native';

        class HelloWorld extends React.Component {
            render() {
                return (
                    <View style={styles.container}>
            <Text style={styles.hello}>It is react-native Text!</Text>
                </View>
            )
            }
        }
        var styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
            },
            hello: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
            },
        });

        AppRegistry.registerComponent('HelloWorld', () => HelloWorld);


7. 在app下的`build.gradle`下添加React Native依赖配置:


        dependencies {
                ...
                compile "com.facebook.react:react-native:+" // From node_modules.
        }


8. 在project下的`build.gradle`下, 增加react-native的本地maven入口配置


        allprojects {
            repositories {
                ...
                maven {
                    // All of React Native (JS, Android binaries) is installed from npm
                    url "$rootDir/../node_modules/react-native/android"
                }
            }
            ...
        }


9. 在`AndroidManifest.xml`下增加权限与Activity


        <uses-permission android:name="android.permission.INTERNET" />

        <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />

        <activity
          android:name=".MyReactActivity"
          android:label="@string/app_name"
          android:theme="@style/Theme.AppCompat.Light.NoActionBar">
        </activity>


10. 增加原生代码


        public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {
            private ReactRootView mReactRootView;
            private ReactInstanceManager mReactInstanceManager;

            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);

                mReactRootView = new ReactRootView(this);
                mReactInstanceManager = ReactInstanceManager.builder()
                        .setApplication(getApplication())
                        .setBundleAssetName("index.android.bundle")
                        .setJSMainModuleName("index.android")
                        .addPackage(new MainReactPackage())
                        .setUseDeveloperSupport(BuildConfig.DEBUG)
                        .setInitialLifecycleState(LifecycleState.RESUMED)
                        .build();
                mReactRootView.startReactApplication(mReactInstanceManager, "HelloWorld", null);

                setContentView(mReactRootView);
            }

            @Override
            public void invokeDefaultOnBackPressed() {
                super.onBackPressed();
            }

            @Override
            protected void onPause() {
                super.onPause();

                if (mReactInstanceManager != null) {
                    mReactInstanceManager.onHostPause(this);
                }
            }

            @Override
            protected void onResume() {
                super.onResume();

                if (mReactInstanceManager != null) {
                    mReactInstanceManager.onHostResume(this, this);
                }
            }

            @Override
            protected void onDestroy() {
                super.onDestroy();

                if (mReactInstanceManager != null) {
                    mReactInstanceManager.onHostDestroy();
                }
            }

            @Override
             public void onBackPressed() {
                if (mReactInstanceManager != null) {
                    mReactInstanceManager.onBackPressed();
                } else {
                    super.onBackPressed();
                }
            }

            @Override
            public boolean onKeyUp(int keyCode, KeyEvent event) {
                if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
                    mReactInstanceManager.showDevOptionsDialog();
                    return true;
                }
                return super.onKeyUp(keyCode, event);
            }
        }


11. 在项目根目录下, 运行`npm start`, 启动debug server.

12. 在项目根目录下, 运行`cd android && ./gradlew installDebug`, 编译后app会安装入模拟器或设备中

13. 查看模拟器或真机上的运行情况


[1]: https://github.com/cyqresig/ReactNativeIntegrationWithExistingApps









