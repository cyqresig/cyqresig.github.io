---
layout:     post
title:      "nodejs中package.json中的字段说明"
subtitle:   ""
author:     "绯雨闲丸"
header-img: "img/react-native-etc.jpg"
tags:
    - npm nodejs
---

>

## package.json中的字段说明

package.json文件可以通过`npm init`创建

一个package.json文件通常有以下字段：

- name —— 包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
- description —— 包的简要说明
- version —— 包的版本
- author —— 包的作者
- contributors —— 贡献者数组，数组每一项为一个包含一个贡献者资料的对象
- dependencies —— 包的依赖，为一个对象，对象的属性为包名称，属性值为版本号
- devDependencies —— 开发环境下的包依赖，为一个对象，对象的属性为包名称，属性值为版本号
- keywords —— 关键字数组，通常用于搜索
- repository —— 仓库托管地址，通常为一个包含type（仓库的类型，如：git）和 url（仓库的地址）的对象
- main —— 包的入口文件，如不指定，则默认为根目录下的index.js或index.node
- bin —— 可执行文件的路径
- bugs —— 提交bug的地址
- maintainers —— 维护者数组，数组每一项为一个包含一个维护者资料的对象
- licenses —— 许可证数组，数组每一项为一个包含type（许可证的名称）和url（链接到许可证文本的地址）的对象








