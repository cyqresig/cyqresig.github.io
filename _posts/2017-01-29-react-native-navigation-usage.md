---
layout:     post
title:      "react-native-navigation使用小记"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/react-native-etc.jpg"
tags:
    - react-native
    - ios
    - android
---

>

## github

[react-native-navigation][1]

## 感受
react-native-navigation是目前唯一一款使用原生代码来实现navigator的插件,
使用后navigator的push/pop的动画将脱离js线程而改由原生的UI线程处理, 切屏效果会和原生态一样流畅, 再也不会出现由于js线程渲染导致的navigator切屏动画的卡顿效果了,
并且该插件还同时内置实现了原生态版本的tabbar
但是使用下来发现还是有不少地方需要自行做额外的优化处理.

1. 需要自行修改少许ios/android代码实现类似react-native官方的Navigator具备的'willfocus'与'didfocus'事件监听

2. 由于navigator的切屏效果由原生的UI线程处理, 使用一些带有原生态动画效果的组件(比如, react-native-swiper, 由scrollView实现动画)时,
切屏效果会导致组件的动画效果执行到一半时中断, 所以需要在切屏事件上做处理, 重置组件的动画状态

3. 由于使用的原生态默认的切屏动画效果, 动画的形态取决于编译的sdk,
ios默认使用最新版本没有问题,
但android使用7.1新版时切屏的动画并不是传统的slide-from-right, 效果比较尴尬. 如果要调整, 需要修改插件的android版本代码及编译的sdk版本, 比较麻烦.

4. android部分必须api 25才可以编译, react-native项目默认api 23就可以了, 需要自行更改项目的配置.

5. github上有数以百计的issues, 根据需求情况可能会碰到新的坑, 虽然说理论上可以自行处理, 但, 实在是好麻烦...

## 总结
虽然使用react-native-navigation可以使得app在切屏时获得与原生完全一致的体验, 但是完全掌握插件的使用方法代价也不小,
如对体验要求不是特别高, 建议还是使用官方的Navigator比较实在一点(虽然这玩意儿也有隐藏的坑-_-!!!).

[1]: https://github.com/wix/react-native-navigation/









