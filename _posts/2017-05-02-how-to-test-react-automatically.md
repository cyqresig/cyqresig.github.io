---
layout:     post
title:      "React自动化测试"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - react
    - component
    - test
    - case
    - mocha
    - karma
    - enzyme
---

> 

## 为什么要写测试用例

软件测试的重要性是毋庸置疑的。但如何以最少的人力、资源投入，在最短的时间内完成测试，发现软件系统的缺陷，持续保证软件的优良品质呢？

试想，如果写一个react组件，这个组件有10个需要用户交互的功能点，开发者为保证质量，每次修改代码都需要打开浏览器，运行组件代码，执行10次不同的用户交互操作，并查看与之对应的10个功能点是否运行正常。

这种方式费时费力，还不能保证不会出错。 而有了测试用例，无论是谁来测试，参照测试用例实施，都能保障测试的质量。测试用例自动化更是可以把人为因素的影响减少到最小。即便最初的测试用例考虑不周全，随着测试的进行和软件版本更新，也将日趋完善。

## 如何为React组件写测试用例

目前适用于React的测试框架很多，例如：facebook的[jest][2], airbnb的[enzyme][0]等。

这里我们使用airbnb的[enzyme][0], 并使用[ava][1]来配合编写测试用例。

### 安装测试依赖

* 安装测试框架，`npm install --dev ava enzyme nya`

* 安装配套的代理包，`npm install --dev sinon`

* 如果使用的react版本在15.5以下，则需要指定安装react测试套件，`npm install --dev react-addons-test-utils`

* 如果使用的react版本在15.5及以上，则需要指定安装react测试套件 `npm install --dev react-test-renderer`

* 如需使用[enzyme][0]的`mount`api，则需要安装[jsdom][3]，`npm install --dev jsdom@9.12` (由于版本10有break change，为方便兼容旧代码先安装版本9)

### 配置测试环境


### 编写测试用例


## React组件需要如何测试

### 输入props

### 输入模拟用户交互

### 输出state

### 输出component

### 输出HTMLElement

...未完待续


[0]: http://airbnb.io/enzyme/
[1]: https://github.com/avajs/ava
[2]: http://facebook.github.io/jest/
[3]: https://github.com/tmpvar/jsdom











