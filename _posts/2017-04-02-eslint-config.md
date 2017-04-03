---
layout:     post
title:      "eslint使用小记"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - eslint
    - eslintrc
---

>

## eslint是什么

ESLint 是一个开源的 JavaScript 代码校验工具，最初是由 Nicholas C. Zakas 在2013年创建的。经常被用来发现问题的模式或代码，不符合特定的风格准则。

ESLint 创建的首要原因是为了让开发人员创建自己的校验规则，ESLint 的目的是让所有的规则完全可插拔。虽然ESLint将附带一些内置的规则，你可以在任何时间点动态加载规则。

## eslint有什么用

* 可以辅助编码规范执行，有效控制代码质量

* 默认规则包含所有 JSLint、JSHint 中存在的规则，易迁移

* 规则可配置性高：可设置「警告」、「错误」两个 error 等级，或者直接禁用

* 包含代码风格检测的规则

* 支持插件扩展、自定义规则

## eslintrc是如何解决问题的

`eslintrc`有二种使用方式：

* 在编译时验证，需要配置IDE上的插件，比如webstorm，配置方法可参考[这里][0]

* 在代码提交前验证，在package.json中配置，代码如下：
  
  ```json
  "scripts": {
      "precommit": "eslint . --quiet"
    },
  ```

## 如何使用eslintrc

eslintrc使用起来非常的方便。只需要如下几个步骤：

* 全局安装eslint `npm install -g eslint`

* 在项目根目录创建一个`.eslintrc`的文件

* 在这个文件中定义项目的编码规范

## 推荐的常用eslintrc编码风格定义

由于规则较多，这里不一一罗列，需要的可以参考[这里][1]
 
不希望自己一个个检查及配置，推荐安装插件并使用airbnb的配置，参考[这里][2]

[0]: http://blog.csdn.net/jw5678/article/details/54947045

[1]: http://cn.eslint.org/docs/rules/

[2]: https://www.npmjs.com/package/eslint-config-airbnb-base












