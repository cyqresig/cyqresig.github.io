---
layout:     post
title:      "autocomplete功能实现分析"
subtitle:   " \"实现任何功能前都应先分析\""
author:     "绯雨闲丸"
header-img: "img/post-bg-2016-03-04.jpg"
tags:
    - javascript组件
---

> “先分析, 后动工”

#   autocomplete 功能实现分析

>  一般说来, 一个组件内抽象着很多具体的实现, 想要全面控制这些实现,
   需要先分析, 然后将具体实现分离关注.

##  确定实现功能所需的所有界面(按逻辑划分)

1.  *一个单行文本框*`search-input`

2.  *一个填充搜索推荐层*`search-menu`

    1. *头部区域块*`search-menu-header`

    2. *内容区域块*`search-menu-content`

        1.  *推荐搜索项区域块*`search-menu-item`

            1.  *推荐搜索文字区域块*`item-text`

            2.  *推荐搜索附加信息区域块*, 例如: `item-count`

    3. *尾部区域块*`search-menu-footer`

## 确定实现功能所需的所有逻辑(按人机交互事件划分)

1. *一个单行文本框*`search-input`
    1.  `input`*事件*

        1.  主要控制输入的关键字与推荐关键词数据的匹配获取,

        2.  `search-menu`的控制隐显, 模板重新生成

        3.  记忆已进行匹配操作的关键词, 以及匹配的推荐关键词数据

    2.  `click`*事件*

        1.  `search-menu`的控制隐显

    3.  `foucsin` 事件

        1.  记忆`search-input`当前的focus状态, 键盘事件要用

    3. `focusout` 事件

        1.  记忆`search-input`当前的focus状态, 键盘事件要用

        2.  `search-menu`的控制隐显

    4.  `keydown` 事件

        1.  ESC: 27

            1.  `search-menu`的控制隐显

        2.  RETURN: 13

            1.  提交搜索(比如提交数据至远程服务器进行关键词匹配的商品搜索)

        3.  LEFT: 37

        4.  UP: 38

            1.  `search-menu`的控制隐显

            2.  记忆`search-menu-item`选中第几项

            3.  处理选中后`search-menu-item`的UI变化

            4.  处理选中后`search-input`的value变化

        5.  RIGHT: 39

        6.  DOWN: 40

            1.  `search-menu`的控制隐显

            2.  记忆`search-menu-item`选中第几项

            3.  处理选中后`search-menu-item`的UI变化

            4.  处理选中后`search-input`的value变化

2.  *一个填充搜索推荐层*`search-menu`

    1. `mouseenter`事件 (针对searchItem冒泡)

        1.  记忆`search-menu-item`选中第几项

        2.  处理选中后`search-menu-item`的UI变化

    2. `mouseleave`事件

        1.  记忆`search-menu-item`选中第几项

        2.  处理选中后`search-menu-item`的UI变化

    2.  `click`事件 (针对searchItem冒泡)

         1.  记忆`search-menu-item`选中第几项

         2.  处理选中后`search-menu-item`的UI变化

         3.  `search-menu`的控制隐显

         4.  提交搜索(比如提交数据至远程服务器进行关键词匹配的商品搜索)

## 确定数据存储

   1.   *search-menu的赋值数据源*

   2.   *search-menu-content的赋值数据源*

   3.   *历史已提交搜索关键词缓存*

   4.    *历史未提交搜索关键词缓存*

   5.   *历史未提交搜索关键词 -> 推荐搜索关键词数据源缓存*

## 确定公开配置

   1.  [公开]*历史已提交搜索关键词缓存最大个数*`maximumHistorySearchedKeywordCacheList`(Int) 默认为10

   2.  [公开]*推荐搜索项显示个数*`maximumRecommendKeywordDataList`(Int) 默认为10

   3.  [公开]*历史未提交搜索关键词缓存最大个数*`maximumHistoryKeywordCacheList`(Int) 默认为100

   4.  [公开]*是否使用远程数据*`remote`(Boolean) 默认false (请求方式强制使用jsonp)

   5.  [公开]*远程请求地址*`url`(String) 默认未定义 (当`remote`为true时必须指定)

   6.  [公开]*对应搜索文本的请求参数名*`queryName`(String) 默认为'query'

   7. [公开]*附加请求参数对象*`additionalQueryParams`(Object) 默认null (需要支持实例修改)

   8. [公开]*本地数据源*`localData`(Object) 默认null (当`remote`为false时必须指定)

   9. [公开]*对每个推荐搜索返回结果集里指定的字段进行格式化, 返回格式化后的值 -> 回调函数*`formatRecommendKeywordData`(Function) 默认为null

   10. [公开]*允许触发一次获取搜索推荐数据动作最小间隔*`recommendFetchInterval`(Int) 默认为10(ms)

   11. [公开]*提交搜索事件 -> 回调函数*`onSearch`(Function)

   12. [公开]*切换推荐搜索项事件 -> 回调函数*`onSelect`(Function) 默认为更新UI方法 应是指定*搜索文本框元素*`searchInput`的value值, 以及针对自定义模板选中的searchItem切换选中样式

   13. [公开]*切换搜索菜单层显示状态事件 -> 回调函数*`onSearchMenuDisplayStateChange`(Function) 默认为更新UI方法 应指定切换*推荐搜索层元素*`searchMenu`的隐显

   14. [公开]*搜索文本框元素*`searchInput`(HTMLElement) (必须指定)

   15. [公开]*设置完search-menu的赋值数据源事件`searchMenuData`* -> 回调函数*`onSetSearchMenuData*`(Function) 默认为设置header与footer值方法 使用者可以在这里指定搜索菜单header, footer或其他自定义变量

   16. [公开]*自定义模板解析生成方法*`template`(Function) 默认为模板方法 该方法应是获取到自定义模板后, 直接传入js对象即可返回html代码

   17. [公开]*模板生成html后事件 -> 回调函数*`onTemplate`(Function) 默认为更新UI方法 应是获取到模板解析数据后生成的html代码, 然后将*推荐搜索层元素*`searchMenu`内容替换(模板需要作控制, 只有第一次才包含容器元素标签)

   18. [公开]*每个推荐搜索项匹配的选择器*`searchItemSelector`(String) 默认为与默认模板匹配的选择器 可自定义, 但需要同时自定义模板

   19. [公开]*被选中的那个推荐搜索项匹配的附加选择器*`searchItemSelectedSelector`(String) 默认为与默认模板匹配的附加选择器 可自定义, 但需要同时自定义css
