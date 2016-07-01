---
layout:     post
title:      "react-native的尺寸pt与psd设计稿中的px的转换规则"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/markman-bg.jpg"
tags:
    - react-native
---

>

### pt (point，磅)：
是一个物理长度单位，指的是72分之一英寸。

### px (pixel，像素)：
是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果px要换算成物理长度，需要指定精度DPI(Dots Per Inch，每英寸像素数)，在扫描打印时一般都有DPI可选。Windows系统默认是96dpi，Apple系统默认是72dpi。

### em(相对长度单位，相对于当前对象内文本的字体尺寸)：
是一个相对长度单位，最初是指字母M的宽度，故名em。现指的是字符宽度的倍数，用法类似百分比，如：0.8em, 1.2em,2em等。通常1em=16px。

### 字号：
是中文字库中特有的一种单位，以中文代号表示特定的磅值pt，便于记忆、表述。

pt和px的换算公式可以根据pt的定义得出:

pt=1/72(英寸), px=1/dpi(英寸)

因此 pt=px*72/dpi

以Windows下的96dpi来计算，pt=px*72/96=px*3/4

ios设备的物理分辨率, 逻辑分辨率, 缩放比, DPI等参数参见下图

![ios-device-dpi][1]

react-native中设置宽高, 以及字号所用的尺寸单位是pt, 是针对上图中的逻辑分辨率(logic point)而言的.
可以看到iphone6的物理分辨率是750*1334, 逻辑分辨率是375*667, 缩放比为2, 假设在react-native设置宽度为10pt,
则在iphone6上实际显示为20px.

因此, 假设你拿到的psd设计稿(注: ps的屏幕分辨率需设置为72像素/英寸)是基于iphone6的分辨率来做的,
则react-native中设置对象的尺寸 = 设计稿对应对象的尺寸(px) / 2.

### 最终的转换公式为:
react-native中设置对象的尺寸 = 设计稿对应对象的尺寸(px) / 设备缩放比

[1]: http://cyqresig.github.io/img/ios-device-dpi.jpg