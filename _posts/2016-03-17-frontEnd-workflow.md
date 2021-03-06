---
layout:     post
title:      "前端开发流程整理"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/post-bg-2016-03-15.jpg"
tags:
    - javascript
---

随着前端技术的不断发展, 前端开发已经不仅仅是随便写点JS代码, 做一点交互和特效这么简单了, 整个开发流程会涉及到很多步骤. 这里根据个人理解, 对前端的开发流程做了一个整理汇总.

## 了解需求

许多开发人员在开发时都有一个坏习惯, 开发到某一个功能时再去了解这个功能的需求, 而不是在一开始先了解下应用整体需求,
应用要做什么, 主要有哪些功能等. 了解应用整体需求, 有助于在开发时更好的理清思路, 也更有利于模块的划分和代码的组织.

在这个阶段, 前端人员需要查看需求及产品设计人员制作的业务模型, UI原型, 文字和流程图等需求文档,
并与需求及产品设计人员密切沟通, 以便在最短的时间内最大程度的了解需求.

## 模块划分

模块划分有助于应用程序的解耦, 并且在划分后可以方便地将不同模块安排给不同的前端开发人员负责进行开发.

在这个阶段, 前端开发人员需要根据业务模型, 及UI原型, 将业务模块尽可能细分出来(一个细分的业务模块对应一个业务模块js文件),
之后在开始阶段时需要有效的进行模块管理（文件结构、书写规范等）、模块解耦（模块间不要直接互相调用，通过订阅/发布者模式来通信）、模块复用.

## 路由定义

由于使用了nodejs服务器作为渲染层, 路由将全部由前端开发人员进行定义.

路由定义可以清晰有效地梳理出页面跳转, 有利于前后端交互接口的事先定义.

对单页路由来说, 还需要额外定义前端路由.

## 框架选定

根据应用的规模, 实际业务的需求, 开发团队的人员配置, 进行前端框架的选择.

比如, 管理系统如果选择做成spa单页应用, 多选用AngularJS.
传统多页面应用, 多选用jQuery+plugins的方式进行开发.
如果愿意花时间自定义基础组件, 上述二种也可以选用ReactJS进行开发

## 组件选定

在这个阶段, 前端开发人员仔细查看UI原型, 梳理功能, 并且根据实际的需要, 选定匹配的, 成熟的组件.
如果功能定制化程度太高, 则可以考虑在相似功能的组件的基础上做二次开发, 或者考虑自己造轮子.

## 规范定义

定义css编写规范
定义js编写规范
定义模块编写规范

## 工程化构建

使用webstorm作为首选IDE,

使用markdown编写开发文档,

使用webpack + gulp + nodejs + mocha + mockjs搭建应用工程,

开发时配置webpack.config, 启动webpack-dev-server或者与之对应的nodejs中间件, 用来管理模块, 自动编译及刷新浏览器.

使用mocha编写单元测试用例, 如需编写的用例涉及到UI的更新, 可以配合使用jsdom.

使用mockjs模拟测试数据, 在明确定义接口的情况下, 无须等待后端开发人员完成接口, 即可自行进行调试.

使用webpack + gulp进行自动化测试, 模块管理编译, 公共依赖提取, 文件压缩打包等构建工程的必要事项.

如开发环境中有搭建持续集成服务器(比如Jenkins), 加入持续集成的配置, 进行自动化构建.
