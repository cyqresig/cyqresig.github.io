---
layout:     post
title:      "react-native简介"
subtitle:   "引领了新一代移动源生开发"
author:     "绯雨闲丸"
header-img: "img/react-native-bg.jpg"
tags:
    - react-native
---

>

2015年3月facebook正式开源了react-native ios版, 同年10月正式开源了react-native android版. 并且倍受广大开发者追捧.

Facebook对[react-native][1]的宣传为:

*   React Native使你能够在Javascript和React的基础上获得完全一致的开发体验，构建世界一流的原生APP.

*   React Native着力于提高多平台开发的开发效率 —— 仅需学习一次，编写任何平台.(Learn once, write anywhere)

*   已经在多项产品中使用了React Native，并且将持续地投入建设React Native.

又能大幅提升开发效率, 又能获得源生APP的开发体验, 听起来是不是灰常灰常滴棒?

肯定有很多同学会不信, 但是别忙着离开, 下面的内容会解答你的疑惑.


# 为什么要使用react-native
众所周知, 当前android和ios开发的各方面都已经很成熟, 但是Facebook为什么非要自己造一套新的开发体系呢?

这是因为, 移动设备的环境要比Web环境复杂得多, 并且每次都得开发二套(android和ios各自开发一套, 开发环境,语言等都不同), 也就导致了Native开发的成本非常的高.
随着前端的发展, 已经拥有了一定的有经验的前端从业人员, 相比之下, 熟练的移动端开发人员相对较少.
很多公司为了寻求App开发效率、成本、体验之间的平衡,从而选择了Hybird App(基于webview)的开发方案, 比较成熟的有[phonegap][2], [h5 plus][3]等.
这样做的一个好处就是, 既能拥有高效的开发效率和较多的开发人员, 又能快速更新App.
但是, 在解决了降低开发成本, 提高开发效率的问题后, 另一个问题产生了.
webview的用户体验与源生app的用户体验相比, 存在明显的缺陷, 并且会造成性能以及耗电等问题.
这也为技术发展提出了一个新的挑战: 如何既能大幅降低开发成本, 又能保持源生APP的用户体验?

Facebook提出了React Native的解决方案.
也正是因为React Native的跨平台解决的特性和使用JavaScript作为开发语言而赢得了众多开发者的关注.
很多时候,前端都有一种乐观的想法:h5+webview应用可以替代原生应用.但是,实际上, h5+webview应用在用户体验和性能上比原生应用会弱很多.
这就是React Native的切入点.
React Native不仅可以使用前端开发的模式来开发应用,还能调用原生应用的UI组件和API.
所以说,React Native兼顾了开发效率,提高了用户体验.这也为前端开发者进入原生开发领域降低了门槛.

# ReactJS 简介

React Native是基于React设计的,因此,了解React有助于我们开发React Native应用

目前, React的最新版本是React v0.14.0,其官方的介绍是A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES。
可以看到,React提出的是一个新的开发模式和理念,它强调的 是“用户界面”。

React主要有如下3个特点。
*   作为UI(Just the UI):React可以只作为视图(View)在MVC中使用。并且在已有项目 中,很容易使用React开发新功能。
*   虚拟DOM(Virtual DOM):这是React的一个亮点,可以很好地优化视图的渲染和刷新。 当然,它也可以在Node.js服务器端和React Native中使用。虚拟DOM是React最重要的一个 特性。以前,我们更新视图时,需要先清空DOM容器中的内容,然后将最新的DOM和数 据追加到容器中,现在React将这一操作放进了内存。React认为内存的操作远比视图全部 更新来得高效。随着浏览器的迭代,事实情况更是如此,内存相比视图刷新要廉价得多。 React将视图变化放进内存进行比较(就是虚拟DOM的比较),计算出最小更新的视图, 然后将该差异部分进行更新以完成整个组件的渲染。这就是React如此高效的原因。
*   数据流(Data Flow):React实现了单向的数据流,并且相对于传统的数据绑定而言,React 更加灵活、便捷。

# 学习React需要掌握哪些知识

*   JSX语法知识:JSX的官方解释是其语法类似于XML(an XML-like syntax),这也是前端 工程师更容易理解JSX的原因。因为HTML是XML的子集,前端工程师对HTML更为熟悉。
*   ES6相关知识:因为ES6增加了很多语法特性和新功能,可以使用ES6更加快速地进行功能开发。
*   前端基础知识:当然,最为基础的是需要具备基本的前端知识,其中CSS以及JavaScript比较重要。

# React Native 简介

React Native的官网介绍是使用React构建Native应用的框架(A FRAMEWORK FOR BUILDING NATIVE APPS USING REACT)。

这说明,React Native采用的语法也是React。
React Native的目标是高效跨平台地开发Native 应用, 同时, 也强调了“一次学习,多个平台编写代码”。
也就是说, React Native不是“一次编码, 多处运行”。如下图所示, 我们可以清楚地看到React Native是构建在React和JSX基础上的。
因此,只要基本掌握了React和JSX, 同时补充相关平台(iOS、Android、Web)的知识, 就能开发Native应用.

![react-native 设计思路][4]

React Native的开发流程也是继承了React的部分流程, 如下图:

![react-native 开发流程][5]

# 学习React Native需要掌握哪些知识

* react相关知识: react-native是基于react的, 不会react直接上手react-native会举步艰难.
* nodeJS相关知识: 包括如何使用npm进行代码管理, 构建等.
* react-native相关知识: 包括组件, api, 布局方式, 扩展源生能力, 使用第三方组件, 自定义组件, 配置环境, 打包发布等.

# 如何获取React Native学习资料

目前,React Native更新的速度较快, 文档方面还不是很全。
如果开发一款小型的App, 掌握React Native的组件和API就已经足够了。
如果学习和实践中遇到问题, 可以到 React Native GitHub issues上搜索, 其中有很多解决方法。
下面是关于React Native的4个比较重要的地址。
*   React Native官方网站: http://facebook.github.io/react-native/。
*   React Native版本发布: https://github.com/facebook/react-native/releases。
*   React Native GitHub地址: https://github.com/facebook/react-native。
*   疑难问题搜索: https://github.com/facebook/react-native/issues。


[1]: http://www.reactnative.com/
[2]: http://phonegap.com/
[3]: http://www.html5plus.org/
[4]: http://cyqresig.github.io/img/react-native-design.jpg
[5]: http://cyqresig.github.io/img/react-native-dev.jpg
