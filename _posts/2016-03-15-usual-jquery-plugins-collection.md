---
layout:     post
title:      "常用jquery组件的整理"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/post-bg-2016-03-15.jpg"
tags:
    - javascript
---

> 未完待续

在做敏捷开发时, 除了公司自己造的轮子外, jquery组件是会被经常使用到的轮子, 下面就项目中经常被使用到的jquery组件做一个整理.

# 目录
1. [jquery.blockui](#jquery.blockui)
1. [jquery.uniform](#jquery.uniform)
1. [jquery.layout](#jquery.layout)
1. [jquery.cookie](#jquery.cookie)
1. [jquery.validate](#jquery.validate)
1. [jquery.form](#jquery.form)
1. [jquery.transit](#jquery.transit)
1. [jquery.bxslider](#jquery.bxslider)
1. [jquery.qrcode](#jquery.qrcode)
1. [jquery.backstretch](#jquery.backstretch)
1. [jquery-siderbar](#jquery-siderbar)
1. [jquery-autocomplete](#jquery-autocomplete)

1. [bootstrap.transition](#bootstrap.transition)
1. [bootstrap.modal](#bootstrap.modal)
1. [bootstrap.scrollspy](#bootstrap.scrollspy)
1. [bootstrap.tab](#bootstrap.tab)
1. [bootstrap.tooltip](#bootstrap.tooltip)
1. [bootstrap.popover](#bootstrap.popover)
1. [bootstrap.collapse](#bootstrap.collapse)
1. [bootstrap.carousel](#bootstrap.carousel)


## jquery.blockui

这个插件可以轻松实现模拟锁屏, 遮罩效果, 在做弹出层效果, 以及做操作提示时非常有用

[了解更多](http://malsup.com/jquery/block/)

## jquery.uniform
Web表单是一个网站的重要方面，但在视觉方面往往被忽视。这个插件可以帮助你增加一个华丽的外观和视觉效果。
例如单选按钮或选择下拉菜单，这些资源只能用简单的CSS，这通常是一件痛苦的事情

[了解更多](http://uniformjs.com)

## jquery.layout

这个插件是一种基于jQuery的布局框架，其核心是一个大小自适应的中心面板，面板的上下左右四个方向可以放置可折叠、可缩放的面板,
在做管理类的系统时特别有用

[了解更多](http://layout.jquery-dev.com/index.cfm)

## jquery.cookie

[了解更多](https://plugins.jquery.com/cookie/)

这个插件是对原生cookie的api的封装, 适合存放小数据

## jquery.validate

[了解更多](http://jqueryvalidation.org/)

老版jquery表单验证插件, 功能也十分强大, 除了能做本地验证之外, 还可以轻松实现远程请求验证, 支持扩展, 自定义

## jquery.form

[了解更多](http://malsup.com/jquery/form/)

这个插件API提供了几个方法，让你轻松管理表单数据和进行表单提交。

## jquery.transit

[了解更多](http://ricostacruz.com/jquery.transit/)

这个插件可以通过js api的方式实现css过渡效果, 而不用手动编写css

## jquery.bxslider

[了解更多](http://bxslider.com/)

走马灯插件

## jquery.qrcode

[了解更多](http://jeromeetienne.github.io/jquery-qrcode/)

生成二维码插件

# jquery.chosen

[了解更多](http://plugins.jquery.com/chosen/)

jquery chosen一款强化原生select的插件,支持检索,多选,但不支持输入效果,

# select2

[了解更多](http://select2.github.io/)

强化原生select的功能强大的组件, 支持搜索, 远程加载等

# jquery.backstretch

[了解更多](https://github.com/srobbin/jquery-backstretch)

响应式背景图轮换, 可以设置页面背景图片, 也可以让背景图片动态切换, 缺点是图片可能太大会导致加载速度变慢

# jquery-siderbar

[了解更多](https://github.com/jillix/jQuery-sidebar)

一个简易的侧边栏组件

# jquery-autocomplete

[了解更多](https://github.com/devbridge/jQuery-Autocomplete)

一个功能强大的自动填充/搜索推荐组件


## bootstrap.transition

[了解更多](http://v3.bootcss.com)

用以支持bootstrap的组件的过渡效果

## bootstrap.modal

[了解更多](http://v3.bootcss.com)

用以支持bootstrap的组件的模态框, 支持静态方式使用, 也支持弹出方式

## bootstrap.dropdown

[了解更多](http://v3.bootcss.com)

用以支持bootstrap的下拉菜单组件

## bootstrap.scrollspy

[了解更多](http://v3.bootcss.com)

滚动监听插件依赖 Bootstrap 的导航组件 用于高亮显示当前激活的链接。

## bootstrap.tab

[了解更多](http://v3.bootcss.com)

标签页组件依赖 Bootstrap 的导航组件

## bootstrap.tooltip

[了解更多](http://v3.bootcss.com)

类似原生浏览器的工具条提示

## bootstrap.popover

[了解更多](http://v3.bootcss.com)

弹出框依赖 工具提示插件

## bootstrap.button

[了解更多](http://v3.bootcss.com)

按钮的功能很丰富。通过控制按钮的状态或创建一组按钮并形成一些新的组件，例如工具条。

也可以自定义按钮点击后的状态, 例如设置按钮正在loading

## bootstrap.collapse

[了解更多](http://v3.bootcss.com)

实现内容展开, 以及缩回的功能, 支持according

## bootstrap.carousel

[了解更多](http://v3.bootcss.com)

走马灯, 但是动画效果不支持ie8,9

## bootstrap.affix

[了解更多](http://v3.bootcss.com)

模拟将元素变成sticky效果