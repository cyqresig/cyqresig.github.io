---
layout:     post
title:      "autocomplete组件分析与实现"
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

            2.  *推荐搜索附加信息区域块*, 例如: *商品数量显示*`item-count`或者*历史提交搜索记录删除按钮*`search-menu-history-delete`

    3. *尾部区域块*`search-menu-footer`

        1. *关闭按钮*`search-menu-close`

## 确定实现功能所需的所有逻辑(按人机交互事件划分)

1. *一个单行文本框*`search-input`
    1.  `input`*事件*

        1.  主要控制输入的关键字与推荐关键词数据的匹配获取,

        2.  `search-menu`的控制隐显, 模板重新生成

        3.  记忆已进行匹配操作的关键词, 以及匹配的推荐关键词数据

    2.  `click`*事件*

        1.  `search-menu`的控制隐显, 模板重新生成

    3.  `foucsin` 事件

        1.  记忆`search-input`当前的focus状态, 键盘事件要用

    3. `focusout` 事件

        1.  记忆`search-input`当前的focus状态, 键盘事件要用

        2.  `search-menu`的控制隐显

    4.  `keydown` 事件

        1.  ESC: 27

            1.  `search-menu`的控制隐显

        2.  RETURN: 13

            1.  记忆历史搜索提交项

            2.  提交搜索(比如提交数据至远程服务器进行关键词匹配的商品搜索)

        3.  LEFT: 37

        4.  UP: 38

            1.  `search-menu`的控制隐显

            2.  记忆`search-menu-item`选中第几项

            3.  处理操作后`search-menu-item`的UI变化

            4.  处理操作后`search-input`的value变化

        5.  RIGHT: 39

        6.  DOWN: 40

            1.  `search-menu`的控制隐显

            2.  记忆`search-menu-item`选中第几项

            3.  处理操作后`search-menu-item`的UI变化

            4.  处理操作后`search-input`的value变化

2.  *一个填充搜索推荐层*`search-menu`

    1. `mouseenter`事件 (针对searchItem冒泡)

        1.  记忆`search-menu-item`选中第几项

        2.  处理操作后`search-menu-item`的UI变化

    2. `mouseleave`事件

        1.  记忆`search-menu-item`选中第几项

        2.  处理操作后`search-menu-item`的UI变化

    2.  `click`事件 (针对searchItem冒泡)

         1.  记忆`search-menu-item`选中第几项

         2.  处理操作后`search-menu-item`的UI变化

         3.  `search-menu`的控制隐显

         4.  提交搜索(比如提交数据至远程服务器进行关键词匹配的商品搜索)

3.  *关闭按钮*`search-menu-close`

    1. `click`事件

        1. `search-menu`的控制隐显
        
4.  *历史提交搜索记录删除按钮*`search-menu-history-delete`

    1.  'click'事件
    
        1.  删除该项历史提交搜索记录
        
        2.  处理操作后`search-menu-item`的UI变化

        3.  将焦点返回`search-input`


## 确定数据存储

1.  *search-menu的赋值数据源*`searchMenuData`(Object) 默认为空对象

    [key] `id`  默认未定义

    [key] `isShowHeader` 默认false

    [key] `isShowFooter` 默认true

    [key] `recommendKeywordDataList`

1.  *search-menu-content的赋值数据源*`recommendKeywordDataList`(Array\<Object>)   默认未定义

    其中Object部分

    [key] `keyword` 可以自定义指定这个key

2.  *历史已提交搜索关键词缓存*`historySearchedKeywordCacheList`(Array\<String>) 默认为空数组

3.  *历史未提交推荐搜索关键词缓存*`historyRecommendKeywordCacheList`(Array\<String>) 默认为空数组

4.  *历史未提交推荐搜索关键词 -> 返回的数据结果集*`historyRecommendKeywordCache`(Object) 默认为空对象

    key -> historyKeyword | value -> recommendKeywordDataList toJson


## 确定关键属性

1.  *一个单行文本框*`search-input`*输入文本值*`searchInputValue`(String) 默认未定义

2.  *推荐搜索关键词*`recommendKeyword`(String) 默认未定义

3.  *头部区域块是否显示标识*`isShowHeader`(Boolean) 默认false

4.  *尾部区域块是否显示标识*`isShowFooter`(Boolean) 默认true

5.  [公开]*历史已提交搜索关键词缓存最大个数*`maximumHistorySearchedKeywordCacheList`(Int) 默认为100

5.  [公开]*历史已提交搜索关键词显示个数*`displayHistorySearchedKeywordCacheListCount`(Int)默认为10

6.  [公开]*历史未提交搜索关键词缓存最大个数*`maximumHistoryKeywordCacheList`(Int) 默认为100

7.  [公开]*是否使用远程数据*`remote`(Boolean) 默认false (请求方式强制使用jsonp)

8.  [公开]*远程请求地址*`url`(String) 默认未定义 (当`remote`为true时必须指定)

9.  [公开]*对应搜索文本的请求参数名*`queryName`(String) 默认为'searchKey'

10. [公开]*附加请求参数对象*`additionalQueryParams`(Object) 默认null (需要支持实例修改)

11. [公开]*本地数据源*`localData`(Object) 默认null (当`remote`为false时必须指定)

    key -> keyword | value -> recommendKeywordDataList toJson

12. [公开]*对每个推荐搜索返回结果集里指定的字段进行格式化, 返回格式化后的值 -> 回调函数*`formatRecommendKeywordData`(Function) 默认为null

13. [公开]*允许触发一次获取搜索推荐数据动作最小间隔*`recommendFetchInterval`(Int) 默认为10(ms)

14. *fetch数据的请求对象*`xhr`(Object) 默认null 由jQuery.ajax创建

15. *延迟进行fetch数据请求对象*`defered`(Object) 默认null 由setTimeout创建

16. *一个单行文本框*`search-input`*当前focus状态*`focusState`(Boolean) 默认false

17. *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`(Boolean)  默认false

18. *推荐搜索项count*`recommendItemsCount`(Int) 默认0

19. *当前选择/停留的搜索项index*`searchItemIndex`(Int) 默认-1 选择搜索推荐项时使用, 0表示第一项, `recommendItemsCount-1`表示最后一项

20. [公开]*提交搜索事件 -> 回调函数*`onSearch`(Function)

21. [公开]*切换推荐搜索项事件 -> 回调函数*`onSelect`(Function) 默认为更新UI方法 应是指定*搜索文本框元素*`searchInput`的value值, 以及针对自定义模板选中的searchItem切换选中样式

21. [公开]*切换搜索菜单层显示状态事件 -> 回调函数*`onSearchMenuDisplayStateChange`(Function) 默认为更新UI方法 应指定切换*推荐搜索层元素*`searchMenu`的隐显

22. [公开]*搜索文本框元素*`searchInput`(HTMLElement) (必须指定)

23. *推荐搜索层元素*`searchMenu`(HTMLElemnt) 默认为null, 内部模板解析创建元素后, 自动关联(通过id)

24. [公开]*设置完search-menu的赋值数据源事件`searchMenuData`* -> 回调函数*`onSetSearchMenuData*`(Function) 默认为设置header与footer值方法 使用者可以在这里指定搜索菜单header, footer或其他自定义变量

25. [公开]*自定义模板解析生成方法*`template`(Function) 默认为模板方法 该方法应是获取到自定义模板后, 直接传入js对象即可返回html代码

26. [公开]*模板生成html后事件 -> 回调函数*`onTemplate`(Function) 默认为更新UI方法 应是获取到模板解析数据后生成的html代码, 然后将*推荐搜索层元素*`searchMenu`内容替换(模板需要作控制, 只有第一次才包含容器元素标签)

27. [公开]*每个推荐搜索项匹配的选择器*`searchItemSelector`(String) 默认为与默认模板匹配的选择器 可自定义, 但需要同时自定义模板

28. [公开]*被选中的那个推荐搜索项匹配的选择器*`searchItemSelectedSelector`(String) 默认为与默认模板匹配的附加选择器 可自定义, 但需要同时自定义css

29.  *是否允许`search-input`focusout事件触发*`allowFocusOut`(Boolean) 默认true 为防止点击`search-menu`执行foucsout事件逻辑

30. [公开]*search-menu-content的赋值数据源*`recommendKeywordDataList`*中对应显示推荐搜索词的字段名*`suggestKeyword`(String) 默认为'keyword'

31. [公开]*请求远程数据, 返回结果对应dataList数组的key*`resultListKey`(String) 默认为'list'

32. [公开]*推荐搜索层*`search-menu`*的关闭按钮匹配的选择器*`searchMenuCloseSelector`(String) 默认为'.search-menu-close' 可自定义, 但需要同时自定义模板

33. [公开]*推荐搜索层*`search-menu`*的内容部分匹配的选择器*`searchMenuContentSelector`(String) 默认为'.search-menu-content'   可自定义, 但需要同时自定义模板

34. [公开]*远程请求超时时间*`timeout`(Int) 默认为3000(30s)

35. [公开]*远程请求返回数据方式*`dataType`(String) 默认为'json' 也支持'jsonp'

36. [公开]*search-menu-content的赋值数据源*`recommendKeywordDataList`*中对应显示推荐搜索词的字段的html内容*`suggestKeywordHtml`(String) 默认为'suggestKeywordHtml'  可自定义, 但需要同时自定义模板

37. [公开]*推荐搜索层*`search-menu`*的历史已提交搜索记录的删除按钮匹配的选择器*`searchMenuHistoryDeleteSelector`(String) 默认为'.search-menu-history-delete' 可自定义, 但需要同时自定义模板

##  View Live Demo(http://www.vanadis.cn/demo/autocomplete.html)

##  Github(https://github.com/cyqresig/jquery.autocomplete)
