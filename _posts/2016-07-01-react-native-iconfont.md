---
layout:     post
title:      "react-native使用iconfont来替代icon图片"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/markman-bg.jpg"
tags:
    - react-native
---

>

众所周知, 图片是有诸多优点的，然而目前在网站以及APP设计这行业面临各种各样的挑战。
图片不但增加了总文件的大小，还增加了很多额外的"http请求"，这都会大大降低性能的。
图片还有一个缺点就是不能很好的进行“缩放”，
因此，有时候在“响应式设计”中需要使用图像的最好解决方案就是不去使用图片。

### 为什么要使用iconfont(字体图标)

点击[这里][1]或[这里]了解使用iconfont(字体图片)的优缺点

### ios实现iconfont

1. 安装第三方组件react-native-vector-icons `$ npm install react-native-vector-icons --save`

   组件内置了如下字库:

   * Entypo by Daniel Bruce (411 icons)
   * EvilIcons by Alexander Madyankin & Roman Shamin (v1.8.0, 70 icons)
   * FontAwesome by Dave Gandy (v4.6.3, 634 icons)
   * Foundation by ZURB, Inc. (v3.0, 283 icons)
   * Ionicons by Ben Sperry (v3.0.0, 859 icons)
   * MaterialIcons by Google, Inc. (v2.2.3, 932 icons)
   * Octicons by Github, Inc. (v3.5.0, 166 icons)
   * Zocial by Sam Collins (v1.0, 100 icons)

   也可以使用自定义的字库

2. 如果需要使用组件内置字库, 需要执行如下步骤:

   * 找到`node_modules/react-native-vector-icons`目录, 并将`Fonts`目录(或者只是你需要的一个字库文件)拖至Xcode中的工程里.
     需要注意的是加入时需要保证勾选`Add to targets`和`Create groups`

   * 修改`Info.plist`, 新增一个`Fonts provided by application`属性, 值设置为加入的字库文件, 如下图所示:

   [Fonts provided by application][3]

3. 如果需要使用自定义字库, 需要执行如下步骤:

   * 需要自行生成一个*.ttf字库文件, [点这里查看如何快速获取自定义字库][4],

     字库文件中的内容, 包含字库名称, 每项icon矢量图等都可以自定义(下面的示例中定义为'iconfont'), [点这里查看如何快速修改字库][5]

   * 将自定义生成的字库文件(假设文件名为font.ttf)拖至Xcode中的工程里,

     需要注意的是加入时需要保证勾选`Add to targets`和`Create groups`

   * 修改`Info.plist`, 新增一个`Fonts provided by application`属性, 值设置为加入的字库文件, 同步骤2

### android实现iconfont

1. 安装第三方组件react-native-vector-icons `$ npm install react-native-vector-icons --save`

   组件内置了如下字库:

   * Entypo by Daniel Bruce (411 icons)
   * EvilIcons by Alexander Madyankin & Roman Shamin (v1.8.0, 70 icons)
   * FontAwesome by Dave Gandy (v4.6.3, 634 icons)
   * Foundation by ZURB, Inc. (v3.0, 283 icons)
   * Ionicons by Ben Sperry (v3.0.0, 859 icons)
   * MaterialIcons by Google, Inc. (v2.2.3, 932 icons)
   * Octicons by Github, Inc. (v3.5.0, 166 icons)
   * Zocial by Sam Collins (v1.0, 100 icons)

   也可以使用自定义的字库

2. 如果需要使用组件内置字库, 需要执行如下步骤:

  * 找到`node_modules/react-native-vector-icons`目录, 并将`Fonts`目录中的字库文件拖至`android/app/src/main/assets/fonts`里.

3. 如果需要使用自定义字库, 需要执行如下步骤:

   * 需要自行生成一个*.ttf字库文件, [点这里查看如何快速获取自定义字库][4],

     字库文件中的内容, 包含字库名称, 每项icon矢量图等都可以自定义(下面的示例中定义为'iconfont'), [点这里查看如何快速修改字库][5]

   * 将自定义生成的字库文件(假设文件名为font.ttf)拖至`android/app/src/main/assets/fonts`里,

### 效果展示


### react-native代码示例

#### 使用内置字库

```
import Icon from 'react-native-vector-icons/Ionicons';

function ExampleView(props) {
  return (<Icon name="ios-person" size={30} color="#4F8EF7" />);
}
```

#### 使用自定义字库

#### ios

```
import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  'mui-nav-right': 58755,
  'mui-nav-left': 58481,
};
const MuiIcon = createIconSet(glyphMap, 'iconfont');

function ExampleView(props) {
    return (<MuiIcon size={20} name={'mui-nav-left'} color={'#E5E5E5'}/>);
}
```

#### android

```
import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  'mui-nav-right': 58755,
  'mui-android-nav-left': 58481,
  'mui-voicer': 58162,
};
const MuiIcon = createIconSet(glyphMap, 'iconfont', 'mui.ttf');

function ExampleView(props) {
    return (<MuiIcon size={20} name={'mui-android-nav-left'} color={'#E5E5E5'}/>);
}
```

### 注意事项

示例中的`'mui-nav-right': 58755`, *mui-nav-right*为icon的名称, 可以自定义, 使用时赋值给*name*,
58755为这个字库文件中对应icon的16进制表示.



[1]: http://www.w3cplus.com/css3/icon-fonts.html
[2]: http://www.vanseodesign.com/web-design/icon-fonts/
[3]: https://cloud.githubusercontent.com/assets/378279/12421498/2db1f93a-be88-11e5-89c8-2e563ba6251a.png
[4]: http://www.iconfont.cn/
[5]: http://cyqresig.github.io/2016/06/30/font-creator/
