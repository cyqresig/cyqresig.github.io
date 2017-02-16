---
layout:     post
title:      "react-native整合进已存在的iOS原生app"
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

2. 保证你的ios工程在项目目录的ios目录下`$root/ios`

3. 安装ios包管理器CocoaPods, 我们会使用它将react-native的framework代码安装进当前工程中

   `sudo gem install cocoapods`

4. 新建一个原生app, 选`Single View Application`

5. 在项目根目录下, 执行`npm init`创建`package.json`文件, 并加入必要的scripts与dependency


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


6. 安装依赖包

    `npm install`

7. 创建cocosPads配置文件`Podfile`

    `pod init`

8.  打开`Podfile`, 编辑内容:

    ```
       target 'reactnativeintotest' do
           pod 'React', :path => '../node_modules/react-native', :subspecs => [
            'Core',
            'RCTText',
            'RCTNetwork',
            'RCTWebSocket',
          ]
        end
     ```

9. 安装cocoapods管理的依赖项`pod install`

10. 在项目根目录下创建一个`index.ios.js`文件, 并编辑内容:


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


11. 在需要打开react-native应用的controller处加入如下代码:


        #import <React/RCTBundleURLProvider.h>
        #import <React/RCTRootView.h>



        - (IBAction)ToReactNativeWorldPressed:(id)sender {
            NSURL *jsCodeLocation;

            jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

            RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                                moduleName:@"HelloWorld"
                                                         initialProperties:@{
                                                                             @"scores" : @[
                                                                                     @{
                                                                                         @"name" : @"Alex",
                                                                                         @"value": @"42"
                                                                                         },
                                                                                     @{
                                                                                         @"name" : @"Joel",
                                                                                         @"value": @"10"
                                                                                         }
                                                                                     ]
                                                                             }

                                                             launchOptions:nil];


            UIViewController *vc = [[UIViewController alloc] init];
            vc.view = rootView;
            [self presentViewController:vc animated:YES completion:nil];
        }


12. 在项目根目录下, 运行`npm start`, 启动debug server.

13. 找到项目根目录下ios工程目录下的.xcworkspace文件(cocoapods配置后生成的新的工程文件), 双击打开

14. 打开后, 在Xcode的界面上点击Run

15. 查看模拟器或真机上的运行情况

[1]: https://github.com/cyqresig/ReactNativeIntegrationWithExistingApps










