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

在做敏捷开发时, 除了公司自己造的轮子外, js组件是会被经常使用到的轮子, 下面就项目(电商项目, 管理类项目)中经常使用到的js组件做一个整理.

# 目录
1. [jquery.jsonp](#jquery.jsonp)
1. [jquery.blockui](#jquery.blockui)
1. [jquery.uniform](#jquery.uniform)
1. [jquery.layout](#jquery.layout)
1. [jquery.cookie](#jquery.cookie)
1. [jquery.validate](#jquery.validate)
1. [jquery.form](#jquery.form)
1. [jquery.transit](#jquery.transit)
1. [jquery.bxslider](#jquery.bxslider)
1. [jquery.qrcode](#jquery.qrcode)
1. [jquery.chosen](#jquery.chosen)
1. [jquery.select2](#select2)
1. [jquery.backstretch](#jquery.backstretch)
1. [jquery-siderbar](#jquery-siderbar)
1. [jquery-autocomplete](#jquery-autocomplete)
1. [jquery.slimscroll](#jquery.slimscroll)
1. [jquery.jqzoom](#jquery.jqzoom)
1. [jquery.imgScroll](#jquery.imgScroll)
1. [jquery.metadata](#jquery.metadata)
1. [jquery.lazyload](#jquery.lazyload)
1. [jquery.fancybox](#jquery.fancybox)
1. [jquery.poshytip](#jquery.poshytip)
1. [jquery.raty](#jquery.raty)
1. [OwlCarousel](#OwlCarousel)
1. [jquery-contextMenu](#jquery-contextMenu)
1. [jquery-timeago](#jquery-timeago)
1. [jquery-sessionTimeout](#jquery-sessionTimeout)
1. [jquery.toastr](#jquery.toastr)
1. [jquery.cubeportfolio](#jquery.cubeportfolio)
1. [jquery.countdown](#jquery.countdown)
1. [jquery.dataTables](#jquery.dataTables)
1. [jquery.gritter](#jquery.gritter)
1. [icheck](#icheck)
1. [ion.rangeSlider](#ion.rangeSlider)
1. [jquery.Jcrop](#jquery.Jcrop)
1. [jquery.color](#jquery.color)
1. [jquery.bootpag](#jquery.bootpag)
1. [jquery.pagination](#jquery.pagination)
1. [jquery.idletimer](#jquery.idletimer)
1. [jquery.inputMask](#jquery.inputMask)
1. [jquery knob](#jquery knob)
1. [jquery.minicolors](#jquery.minicolors)
1. [mixitup](#mixitup)
1. [Nestable](#Nestable)
1. [jquery.notific8](#jquery.notific8)
1. [jquery.slimScroll](#jquery.slimScroll)
1. [jquery.tagsinput](#jquery.tagsinput)
1. [noUiSlider](#noUiSlider)
1. [jquery.zoom](#jquery.zoom)
1. [jquery.easing](#jquery.easing)
1. [jquery.input-ip-address-contro](#jquery.input-ip-address-control)
1. [jquery.parallax](#jquery.parallax)

1. [bootstrap.transition](#bootstrap.transition)
1. [bootstrap.modal](#bootstrap.modal)
1. [bootstrap.scrollspy](#bootstrap.scrollspy)
1. [bootstrap.tab](#bootstrap.tab)
1. [bootstrap.tooltip](#bootstrap.tooltip)
1. [bootstrap.popover](#bootstrap.popover)
1. [bootstrap.collapse](#bootstrap.collapse)
1. [bootstrap.carousel](#bootstrap.carousel)
1. [bootstrap-hover-dropdown](#bootstrap-hover-dropdown)
1. [bootstrap-switch](#bootstrap-switch)
1. [bootstrap-colorpicker](#bootstrap-colorpicker)
1. [bootstrap-star-rating](#bootstrap-star-rating)
1. [bootstrap-modal](#bootstrap-modal)
1. [bootstrap-confirmation](#bootstrap-confirmation)
1. [bootstrap-contextmenu](#bootstrap-contextmenu)
1. [bootstrap-datepicker](#bootstrap-datepicker)
1. [bootstrap-datetimepicker](#bootstrap-datetimepicker)
1. [bootstrap-daterangepicker](#bootstrap-daterangepicker)
1. [bootstrap-timepicker](#bootstrap-timepicker)
1. [bootstrap-table](#bootstrap-table)
1. [x-editable](#x-editable)
1. [bootstrap-growl](#bootstrap-growl)
1. [bootstrap-markdown](#bootstrap-markdown)
1. [bootstrap-maxlength](#bootstrap-maxlength)
1. [bootstrap-select](#bootstrap-select)
1. [bootstrap-selectsplitter](#bootstrap-selectsplitter)
1. [bootstrap-tabdrop](#bootstrap-tabdrop)
1. [bootstrap-touchspin](#bootstrap-touchspin)
1. [bootstrap-wizard](#bootstrap-wizard)
1. [clockface](#clockface)
1. [bootstrap-auto-hiding-navbar](#bootstrap-auto-hiding-navbar)
1. [bootstrap-duallistbox](#bootstrap-duallistbox)
1. [bootstrap-autohidingnavbar](#bootstrap-autohidingnavbar)
1. [fuelux](#fuelux)
1. [bootstrap-multiselect](#bootstrap-multiselect)

1. [PubSubJS](#PubSubJS)
1. [typeahead](#typeahead)
1. [fullcalendar](#fullcalendar)
1. [dropzone](#dropzone)
1. [autosize](#autosize)
1. [ueditor](#ueditor)
1. [Web Uploader](#Web Uploader)
1. [echarts](#echarts)


<p id="jquery.jsonp"></p>

## jquery.jsonp

jquery强化jsonp支持的api, 允许定义返回错误的处理

[了解更多](https://github.com/jaubourg/jquery-jsonp)


<p id="jquery.blockui"></p>

## jquery.blockui

这个插件可以轻松实现模拟锁屏, 遮罩效果, 在做弹出层效果, 以及做操作提示时非常有用

[了解更多](http://malsup.com/jquery/block/)

<p id="jquery.uniform"></p>

<p id="jquery.uniform"></p>

## jquery.uniform
Web表单是一个网站的重要方面，但在视觉方面往往被忽视。这个插件可以帮助你增加一个华丽的外观和视觉效果。
例如单选按钮或选择下拉菜单，这些资源只能用简单的CSS，这通常是一件痛苦的事情

[了解更多](http://uniformjs.com)

<p id="jquery.layout"></p>

## jquery.layout

这个插件是一种基于jquery的布局框架，其核心是一个大小自适应的中心面板，面板的上下左右四个方向可以放置可折叠、可缩放的面板,
在做管理类的系统时特别有用

[了解更多](http://layout.jquery-dev.com/index.cfm)

<p id="jquery.cookie"></p>

## jquery.cookie

[了解更多](https://plugins.jquery.com/cookie/)

这个插件是对原生cookie的api的封装, 适合存放小数据

<p id="jquery.validate"></p>

## jquery.validate

[了解更多](http://jqueryvalidation.org/)

老版jquery表单验证插件, 功能也十分强大, 除了能做本地验证之外, 还可以轻松实现远程请求验证, 支持扩展, 自定义

<p id="jquery.form"></p>

## jquery.form

[了解更多](http://malsup.com/jquery/form/)

这个插件API提供了几个方法，让你轻松管理表单数据和进行表单提交。

<p id="jquery.transit"></p>

## jquery.transit

[了解更多](http://ricostacruz.com/jquery.transit/)

这个插件可以通过js api的方式实现css过渡效果, 而不用手动编写css

<p id="jquery.bxslider"></p>

## jquery.bxslider

[了解更多](http://bxslider.com/)

走马灯插件

<p id="jquery.qrcode"></p>

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

[了解更多](https://github.com/jillix/jquery-sidebar)

一个简易的侧边栏组件

# jquery-autocomplete

[了解更多](https://github.com/devbridge/jquery-Autocomplete)

一个功能强大的自动填充/搜索推荐组件

# jquery.slimscroll

[了解更多](http://plugins.jquery.com/slimScroll/)

实用jquery滚动条特效插件jquery slimScroll

# jquery.vmap

[了解更多](http://plugins.jquery.com/slimScroll/)

JQVAMP是一款jquery矢量地图生成插件, 不过没有热点功能

# jquery.jqzoom

[了解更多](https://github.com/mindprojects/jqzoom)

jqzoom是一款图片放大镜插件, 常用于电商的商品详情页面

# jquery.imgScroll

[了解更多](https://github.com/tabooc/imgScroll)

这个插件比较简单, 多是自定义版本

# jquery.metadata

[了解更多](https://github.com/jquery-archive/jquery-metadata)

元数据插件, 在html标签属性里传对象值使用

# jquery.lazyload

[了解更多](https://github.com/tuupola/jquery_lazyload)

延迟加载图片插件, 如果要实现自定义的延迟加载内容, 可以在插件基础上进行扩展

# jquery.ad-gallery

[了解更多](https://github.com/dodoroy/ad-gallery)
[了解更多](http://adgallery.codeplex.com/)

使用AD Gallery可以制作出强大的相册画廊

# jquery.fancybox

[了解更多](http://fancybox.net/)

强大的弹出层插件, 支持静态内容, 远程请求ajax内容, iframe, 图片切换等加载方式

# jquery.poshytip

[了解更多](https://github.com/vadikom/poshytip)

类似原生的工具条tooltip插件

# jquery.raty

[了解更多](https://github.com/wbotelhos/raty)

打星评分插件

# OwlCarousel

[了解更多](https://github.com/OwlFonk/OwlCarousel)

强大的旋转木马(传送带)插件

# jquery-contextMenu

[了解更多](https://github.com/swisnl/jquery-contextMenu)

强大的右键菜单插件

# jquery-timeago

[了解更多](https://github.com/rmm5t/jquery-timeago)

将时间戳显示为多少时间前的强大插件

# jquery-sessionTimeout

[了解更多](https://github.com/travishorn/jquery-sessionTimeout)

让页面在经过一段时间后, 会弹出提示框, 让用户确认是否要登出还是继续保持连接, 超时后自动跳转至登出(阿里云邮箱有使用)

# jquery.toastr

[了解更多](https://github.com/CodeSeven/toastr)

类似android里源生的toast的效果

# jquery.cubeportfolio

[了解更多](http://scriptpie.com/cubeportfolio/live-preview/templates/projects/)

收费插件, 做各种类型的grid展现, 图文并茂(样子很不错, 交互可以借鉴, 并没有特别的功能, 只是功能集+炫)

# jquery.countdown

[了解更多](https://github.com/hilios/jquery.countdown)

倒计时插件

# jquery.dataTables

[了解更多](https://github.com/DataTables/DataTables)

强大的数据表格插件, 支持定义成bootstrap样式

# jquery.gritter

[了解更多](https://github.com/jboesch/Gritter)

notification提示插件, 不过太久不更新了...

# icheck

[了解更多](https://github.com/fronteed/icheck)

强大的美化check, radio的插件, 支持jquery和Zepto

# ion.rangeSlider

[了解更多](https://github.com/IonDen/ion.rangeSlider)

刻度针选择插件

# jquery.Jcrop

[了解更多](https://github.com/tapmodo/Jcrop)

图案范围裁剪插件, 常用于上传头像的范围裁剪

# jquery.color

[了解更多](https://github.com/jquery/jquery-color)

cssHook, 能使jquery animate API 使用骆峰式的颜色动画变化

# jquery.bootpag

[了解更多](https://github.com/botmonster/jquery-bootpag)

基于boostrap的简单pagination插件

# jquery.pagination

[了解更多](https://github.com/flaviusmatis/simplePagination.js)

简单的pagination插件, 页码多时支持显示..., 支持bootstrap样式需要修改源代码, 隐藏a标签默认显示hash需要修改源代码

# jquery.idletimer

[了解更多](https://github.com/thorst/jquery-idletimer)

用于前端页面定时(判断是否超时, 以及后续操作)

# jquery.inputMask

[了解更多](https://github.com/RobinHerbots/jquery.inputmask)

格式化录入的jquery插件

# jquery knob

[了解更多](https://github.com/aterrien/jquery-Knob)

旋钮插件, 圆形把手(可用于百分比显示)

# jquery.minicolors

[了解更多](https://github.com/aterrien/jquery-Knob)

简单的colorpicker插件

# mixitup

[了解更多](https://github.com/patrickkunka/mixitup)

无刷新动画排序插件

# Nestable

[了解更多](https://github.com/dbushell/Nestable)

拖放分层项

# jquery.notific8

win8的notification插件

# jquery.slimScroll

[了解更多](https://github.com/rochal/jquery-slimScroll)

自定义滚动条插件

# jquery.tagsinput

[了解更多](https://github.com/xoxco/jquery-Tags-Input)

inputtext输入项展现时是一个个标签

# noUiSlider

[了解更多](https://github.com/leongersen/noUiSlider)

刻度范围选择rangeSlider

# jquery.zoom

[了解更多](https://github.com/fat/zoom.js)

图片放大插件

# jquery.easing

[了解更多](https://github.com/gdsmith/jquery.easing)

扩展jquery动画效果插件

# jquery.input-ip-address-control

[了解更多](https://github.com/gdsmith/jquery.easing)

让input变成ip地址格式输入

# jquery.parallax

[了解更多](https://github.com/IanLunn/jquery-Parallax)

视差插件

# jquery.ScrollTo

[了解更多](https://github.com/flesler/jquery.scrollTo)

控制滚动条渐变滚动插件

# jquery.sparkline

[了解更多](https://github.com/gwatts/jquery.sparkline)

迷你线图(反应数据趋势)

# jquery-migrate

[了解更多](https://github.com/jquery/jquery-migrate)

用于兼容旧版本比如1.9以下的移除的API


<p id="bootstrap.transition"></p>

## bootstrap.transition

[了解更多](http://v3.bootcss.com)

用以支持bootstrap的组件的过渡效果

<p id="bootstrap.modal"></p>

## bootstrap.modal

[了解更多](http://v3.bootcss.com)

用以支持bootstrap的组件的模态框, 支持静态方式使用, 也支持弹出方式

<p id="bootstrap.dropdown"></p>

## bootstrap.dropdown

[了解更多](http://v3.bootcss.com)

用以支持bootstrap的下拉菜单组件

<p id="bootstrap.scrollspy"></p>

## bootstrap.scrollspy

[了解更多](http://v3.bootcss.com)

滚动监听插件依赖 Bootstrap 的导航组件 用于高亮显示当前激活的链接。

<p id="bootstrap.tab"></p>

## bootstrap.tab

[了解更多](http://v3.bootcss.com)

标签页组件依赖 Bootstrap 的导航组件

<p id="bootstrap.tooltip"></p>

## bootstrap.tooltip

[了解更多](http://v3.bootcss.com)

类似原生浏览器的工具条提示

<p id="bootstrap.popover"></p>

## bootstrap.popover

[了解更多](http://v3.bootcss.com)

弹出框依赖 工具提示插件

<p id="bootstrap.button"></p>

## bootstrap.button

[了解更多](http://v3.bootcss.com)

按钮的功能很丰富。通过控制按钮的状态或创建一组按钮并形成一些新的组件，例如工具条。

也可以自定义按钮点击后的状态, 例如设置按钮正在loading

<p id="bootstrap.collapse"></p>

## bootstrap.collapse

[了解更多](http://v3.bootcss.com)

实现内容展开, 以及缩回的功能, 支持according

<p id="bootstrap.carousel"></p>

## bootstrap.carousel

[了解更多](http://v3.bootcss.com)

走马灯, 但是动画效果不支持ie8,9

<p id="bootstrap.affix"></p>

## bootstrap.affix

[了解更多](http://v3.bootcss.com)

模拟将元素变成sticky效果

<p id="bootstrap-hover-dropdown"></p>

## bootstrap-hover-dropdown

[了解更多](https://github.com/CWSpear/bootstrap-hover-dropdown)

bootstrap中的dropdown组件扩展hover事件

<p id="bootstrap-switch"></p>

## bootstrap-switch

[了解更多](http://www.bootstrap-switch.org/)

Bootstrap 开关（switch）控件

<p id="bootstrap-colorpicker"></p>

## bootstrap-colorpicker

[了解更多](http://www.bootstrap-switch.org/)

一个定制化的颜色拾取器插件, 依赖于Bootstrap 2 & 3

<p id="bootstrap-star-rating"></p>

## bootstrap-star-rating

[了解更多](https://github.com/kartik-v/bootstrap-star-rating)

打星评分插件

<p id="bootbox"></p>

## bootbox

[了解更多](https://github.com/makeusabrew/bootbox)

不用事先写死html代码就能使用bootstrap的各种弹出模态框

<p id="bootstrap-modal"></p>

## bootstrap-modal

[了解更多](https://github.com/jschr/bootstrap-modal)

强化了bootstrap源生的modal, 增加了居中显示, 远程ajax加载, 加载时显示进度条等功能

<p id="bootstrap-confirmation"></p>

## bootstrap-confirmation

[了解更多](https://github.com/ethaizone/Bootstrap-Confirmation)

依赖于bootstrap的tooltip组件, 在用户交互后, 弹出工具确认框, 引导用户进行确认或取消操作

<p id="bootstrap-contextmenu"></p>

## bootstrap-contextmenu

[了解更多](https://github.com/sydcanem/bootstrap-contextmenu)

右键菜单插件

<p id="bootstrap-datepicker"></p>

## bootstrap-datepicker

[了解更多](https://github.com/eternicode/bootstrap-datepicker)

强大的日期插件, 但需要自己扩展中文的支持

<p id="bootstrap-datetimepicker"></p>

## bootstrap-datetimepicker

[了解更多](https://github.com/smalot/bootstrap-datetimepicker)

支持时分秒的日期插件, 需要自己扩展中文的支持

<p id="bootstrap-daterangepicker"></p>

## bootstrap-daterangepicker

[了解更多](https://github.com/dangrossman/bootstrap-daterangepicker)

日期范围选择插件, 但在选取日期时存在二个文本框值相同的bug, 并且ie8上样式也存在问题

<p id="bootstrap-table"></p>

## bootstrap-table

[了解更多](https://github.com/wenzhixin/bootstrap-table)

基于bootstrap的数据表格


<p id="x-editable"></p>

## x-editable

[了解更多](https://github.com/vitalets/x-editable)

任意处都可以弹出工具层, 进行编辑, 支持客户端与服务端验证, 支持提交数据至远程

<p id="bootstrap-growl"></p>

## bootstrap-growl

[了解更多](https://github.com/ifightcrime/bootstrap-growl)

notification提示操作信息插件

<p id="bootstrap-gtreetable"></p>

## bootstrap-gtreetable

[了解更多](https://github.com/gilek/bootstrap-gtreetable)

树形数据表格插件, 在后台管理系统中做层级少的配置项操作中可以考虑使用(这样用不需要使用tree插件了)

<p id="bootstrap-markdown"></p>

## bootstrap-markdown

[了解更多](https://github.com/toopay/bootstrap-markdown)

markdown编辑器, 如果程序员使用的话, 可以考虑使用该编辑器进行文章发布

<p id="bootstrap-maxlength"></p>

## bootstrap-maxlength

[了解更多](https://github.com/mimo84/bootstrap-maxlength)

单行或多行文本框在输入时给予友好提示(在元素附近小工具层提示), 当前输入了多少个字, 最大能输入多少个字

<p id="bootstrap-pwstrength"></p>

## bootstrap-pwstrength

[了解更多](https://github.com/ablanco/jquery.pwstrength.bootstrap)

提示密码强度的插件

<p id="bootstrap-select"></p>

## bootstrap-select

[了解更多](https://github.com/silviomoreto/bootstrap-select)

美化select插件, 功能类同chosen

<p id="bootstrap-selectsplitter"></p>

## bootstrap-selectsplitter

[了解更多](https://github.com/xavierfaucon/bootstrap-selectsplitter)

能把一个分组的select变成二个select, 一个选择分组, 另外一个级联选择分组下的内容(使用机会不多)

<p id="bootstrap-tabdrop"></p>

## bootstrap-tabdrop

[了解更多](https://github.com/jmschabdach/bootstrap-tabdrop)

水平显示tab标签时, 如显示不下了, 这个插件可以把显示不下的tab自动并入右方一处下拉选项中, 可以自适应(只有resize事件).
要做到像各种IDE那样又能左右切换, 又有drop菜单, 并且在drop菜单中选择一项会智能定位到那一项等, 还需要自定义

<p id="bootstrap-timepicker"></p>

## bootstrap-timepicker

[了解更多](https://github.com/jdewit/bootstrap-timepicker)

简单的日期选择插件

<p id="bootstrap-touchspin"></p>

## bootstrap-touchspin

[了解更多](https://github.com/istvan-ujjmeszaros/bootstrap-touchspin)

加减数字以方便输入数字值的插件(三个部件, 文本框, 减按钮, 加按钮)

<p id="bootstrap-wizard"></p>

## bootstrap-wizard

[了解更多](https://github.com/VinceG/twitter-bootstrap-wizard)

标签+步骤插件, 比如注册环节步骤, 比如下订单环境步骤(要注意, 区别是传统做法, 插件使用的步骤都是在同一个页面, 输入项最终一起提交)

<p id="clockface"></p>

## clockface

[了解更多](https://github.com/vitalets/clockface)

长的像时钟的时间选择控件

<p id="bootstrap-duallistbox"></p>

## bootstrap-duallistbox

[了解更多](https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox)

左右ListBox选项互选插件

<p id="bootstrap-autohidingnavbar"></p>

## bootstrap-autohidingnavbar

[了解更多](https://github.com/istvan-ujjmeszaros/bootstrap-autohidingnavbar)

页面滚动条下拉后, 自动隐藏顶部navbar(一般电商需求是, 下拉到一定位置后navbar自动sticky...)

<p id="fuelux"></p>

## fuelux

[了解更多](https://github.com/ExactTarget/fuelux)

美化了各种控件, 比如常见的表单控件, 基于bootstrap3(使用机会不大)

<p id="bootstrap-multiselect"></p>

## bootstrap-multiselect

[了解更多](https://github.com/davidstutz/bootstrap-multiselect)

多选插件

<p id="bootstrap-tagsinput"></p>

## bootstrap-tagsinput

[了解更多](https://github.com/bootstrap-tagsinput/bootstrap-tagsinput)

input输入项变成标签


<p id="respond"></p>

## respond

[了解更多](https://github.com/scottjehl/Respond)

让ie9以下支持media query

<p id="moment"></p>

## moment

[了解更多](https://github.com/moment/moment)

强大的日期API库(格式化日期首选)


<p id="PubSubJS"></p>

## PubSubJS

[了解更多](https://github.com/mroderick/PubSubJS)

强大的订阅/发布模式实现的js库, 常用于模块间通信, 以解决业务模块的耦合问题

<p id="typeahead"></p>

## typeahead

[了解更多](https://github.com/twitter/typeahead.js)

强大的自动补全/搜索推荐插件

<p id="fullcalendar"></p>

## fullcalendar

[了解更多](https://github.com/fullcalendar/fullcalendar)

强大的日历组件

<p id="dropzone"></p>

## dropzone

[了解更多](https://github.com/enyo/dropzone)

拖放的范围内允许上传文件, 有进度条等支持

<p id="autosize"></p>

## autosize

[了解更多](https://github.com/jackmoore/autosize)

使textarea能根据文字输入自适应高度

<p id="ueditor"></p>

## ueditor

[了解更多](http://ueditor.baidu.com/)

百度编辑器插件

<p id="Web Uploader"></p>

## Web Uploader

[了解更多](http://fex.baidu.com/webuploader/)

百度上传文件插件

<p id="echarts"></p>

## echarts

[了解更多](http://echarts.baidu.com/)

百度生成数据分析图形插件