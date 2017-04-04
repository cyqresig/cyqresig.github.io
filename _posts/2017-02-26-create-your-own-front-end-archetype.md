---
layout:     post
title:      "创建你自己的pc前端react spa项目模板"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - react
    - pc
    - spa
    - front-end
    - template
    - archetype
---

>

## 前端项目模板是什么

前端项目模板是针对特定范围的前端项目开发所使用的项目模板，它预先内置了项目开发所需的结构与配置，包含但不限于：
项目的目录结构，模板示例，git配置，npm仓库配置，代码风格配置，代码检查配置，开发环境配置，代码编译配置，代码打包配置，代码发布配置。

## 为什么要使用前端项目模板

使用项目模板，可以避免每次创建新项目都需要重新设定项目的结构与配置，并可以保证同类型项目使用完全一致的项目结构与配置。

## git配置

* 配置.gitignore

```js
# OSX
#
.DS_Store

# WebStorm
#
.idea

# node.js
#
node_modules/
npm-debug.log
yarn-error.log

# others
#
build/
```

## npm仓库配置

* 配置.npmrc

```js
registry=http://registry.npmjs.org/
disturb=http://npmjs.org/dist
```

## 代码风格配置

* 配置.editorconfig

```js
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
curly_bracket_next_line = false
spaces_around_operators = true
spaces_around_brackets = none
indent_brace_style = 1TBS

[*.js]
quote_type = single

[*.{html,less,css,json}]
quote_type = double
```

## 代码质量检查配置

* 配置.eslintrc 

```js
{
    "extends": "airbnb-base/legacy",
    "parser": "babel-eslint",
    "plugins": [
        "import"
    ],
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "never"],
        "comma-dangle": ["error", "always"]
    },
    "globals": {
        "cc": true
    }
}
```

* 安装相关依赖 `yarn add --dev babel-eslint eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-react pre-commit`

* 在WebStorm中配置eslint, 并将IDE的javascript质量检查都关闭

* 在package.json中配置提交检查

```json
"scripts": {
        "eslint": "eslint . --quiet"
    },
    "pre-commit": [
        "eslint"
    ],
```

## 开发环境配置

* 安装webpack及相关依赖项 `yarn add --dev webpack webpack-dev-server json-loader file-loader url-loader style-loader css-loader less less-loader postcss postcss-cssnext postcss-import postcss-loader precss`

  1. webpack `webpack核心库`
  
  2. webpack-dev-server `webpack开发服务器`
  
  3. json-loader `json文件加载器`
  
  4. file-loader `文件加载器`
  
  5. url-loader `url加载器，用于加载样式文件中引用的资源`
  
  6. style-loader `样式加载器，用于加载内联样式`
  
  7. css-loader `css文件加载器`
  
  8. less `less核心库`
  
  9. less-loader `less文件加载器`
  
  10. postcss `postcss核心库，自带浏览器前缀兼容处理`
  
  11. postcss-loader postcss-cssnext postcss-import precss `postcss文件加载器依赖的相关插件 postcss-cssnext内包含autoprefixer`

* 配置webpack

* 配置webpack-dev-server

* 安装webpack提取文件内容插件 `yarn add --dev extract-text-webpack-plugin`

* 安装webpack视图html文件注入插件 `yarn add --dev html-webpack-plugin`

* 安装node环境变量注入 `yarn add --dev cross-env`

  之后就可以在执行nodejs脚本时自由改变环境变量`cross-env NODE_ENV=development node ./script.js`

* 安装ip依赖包 `yarn add --dev ip`

* 安装open依赖包 `yarn add --dev open`

* 安装log-update依赖包 `yarn add --dev log-update`

* 安装numeral依赖包 `yarn add --dev numeral`

## 代码编译配置

* 安装babel及相关依赖 `yarn add --dev babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-register babel-runtime`
  
  1. babel-core
  
     babel转码核心库, 可以使用transform api手动转码字符串或者文件
  
  2. babel-loader
  
     支持webpack处理babel的loader
  
  3. babel-polyfill
  
     加载后可以完整模拟es2015环境，以支持完整的es6，7转码
  
  4. babel-preset-es2015
  
     支持es6编译
  
  5. babel-preset-react 
  
     支持react编译
  
  6. babel-preset-stage-0
  
     支持es7编译
  
  7. babel-register
  
     引用执行后可以自动转码代码, 一般与babel-polyfill一起使用
  
  8. babel-runtime
  
     避免重复的模块引用代码在编译中的输出
  
* 配置.babelrc

```js
{
    "presets": [
        "es2015",
        "react",    // 只有react项目才需要
        "stage-0"
    ],
    "plugins": []
}
```

* 调整webpack中的babel设置

```js
// 模块配置
     module: {
        // 模块处理规则（包括配置模块加载器，模块编译解析规则等等）
        rules: [
          // es6的js文件使用 babel-loader 来处理，转换成es5
          {
            // 匹配的模块文件范围  
            test: /\.js$/,
            
            // 包括哪些范围
            include: [
              path.resolve(__dirname, "app")
            ],
            
            // 排除哪些范围
            exclude: [
              path.resolve(__dirname, "app/demo-files")
            ],
            
            // 使用多个插件，及指定插件配置
            use: [
                 // "babel-loader",         // 不指定插件配置的方式
                 {
                    loader: "babel-loader", // 指定插件配置的方式，注：babel的配置建议使用.babelrc来配置
                    options: {
                      presets: ["es2015"]
                    },
                 },
                 
                 // 如使用react-hot-loader，则需要在这里加入
                 'react-hot-loader/webpack'
            ]
          },
          ...
        ],
        ...
     }         
```

## 代码打包配置

配置打包脚本

## 代码发布配置

配置发布脚本

## 目录结构

```
├── ...
├── build                   # 编译后的文件存入的目录
├── mock                    # 服务端模拟数据的目录
├── src                     # 所有组件所在的文件夹
│   ├── action              # redux -> action目录
│   ├── api                 # 服务端api目录
│   ├── component           # 业务组件目录
│   ├── constant            # 项目常量配置目录
│   ├── container           # redux -> container目录
│   ├── error               # 自定义错误类目录
│   ├── images              # 图片存放目录
│   ├── main                # 项目入口目录
│   ├── pcss                # pcss样式目录
│   ├── reducer             # redux -> reducer目录
│   ├── route               # route目录
│   ├── view                # 项目视图目录
│   ├── util                # 项目工具类目录
│   │   
│   └── ...其他组件
└── ...
```

## 模板示例


## 变更日志


## 文档


## react环境配置

* 安装react及相关依赖 `yarn add --dev react react-dom react-hot-loader@3.0.0-beta.6`

  react-hot-loader@3.0版本还没有正式发布，需要手动指定版本号

* 配置react

## redux环境配置

* 安装react及相关依赖 `yarn add --dev redux redux-devtools redux-logger redux-thunk react-redux`

* 配置redux

## router环境配置

* 安装react及相关依赖 `yarn add --dev react-router react-router-redux`

* 配置router

## 其他依赖

* 安装cookie依赖 `yarn add --dev js-cookie`

* 安装fetch依赖 `yarn add --dev isomorphic-fetch`
  
  支持在浏览器和node二端使用同样的api
  
* 安装国际化依赖 `yarn add --dev i18n`  

* 安装fetch mock `yarn add --dev fetch-mock`

## 自定义封装

* 封装自定义错误

* 封装fetch

















