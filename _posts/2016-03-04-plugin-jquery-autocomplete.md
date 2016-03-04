---
layout:     post
title:      "autocomplete功能实现分析"
subtitle:   " \"先写伪代码的好处\""
date:       2016-03-03 12:00:00
author:     "绯雨闲丸"
header-img: "img/post-bg-2016-03-03.jpg"
tags:
    - jquery组件
---

#   autocomplete 功能实现分析

> 功能分析参照了taobo首页的搜索框功能

##  确定实现功能所需的所有界面(按逻辑划分)

1.  *一个单行文本框*`search-input`

2.  *一个填充搜索推荐层*`search-menu`

    1. *头部区域块*`search-menu-header`(默认不显示)

    2. *内容区域块*`search-menu-content`

        1.  *推荐搜索项区域块*`search-menu-item`

            1.  *推荐搜索文字区域块*`item-text`

            2.  *推荐搜索附加信息区域块*, 例如: `item-count`

    3. *尾部区域块*`search-menu-footer`(默认显示)

## 确定实现功能所需的所有逻辑(按人机交互事件划分)

1. *一个单行文本框*`search-input`
    1.  `input`*事件*
    
        1.  获取*一个单行文本框*`search-input`的*输入文本值*`value`在移除首尾空白符后转化成*推荐搜索关键词*`recommendKeyword`

        1.  [分支]*是否使用远程数据*`remote`的值为false时,

            1.  [分支]当*推荐搜索关键词*`recommendKeyword`的值为空时,

                1.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

                       1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

                       2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

            2.  [分支]当*推荐搜索关键词*`recommendKeyword`的值不为空时,

                1.  [分支]当*推荐搜索关键词*`recommendKeyword`被*本地数据源*`localData`中的关键词匹配时

                    1.  将值给*search-menu-content的赋值数据源*`recommendKeywordDataList`赋值 -> *本地数据源*`localData`

                    2.  *头部区域块是否显示标识*`isShowHeader`, 赋值为false, 以便模板中可以不显示出*头部区域块*`search-menu-header`

                    3.  给*search-menu的赋值数据源*`searchMenuObject`的[key] `isShowHeader` 赋值

                2.  [分支]当*推荐搜索关键词*`recommendKeyword`被*本地数据源*`localData`中的关键词不匹配时

                     1.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

                            1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

                            2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

                3.  将*search-menu的赋值数据源*`searchMenuObject`传入配置的模板, 得到最终的html代码

                4.  将*一个填充搜索推荐层*`search-menu`内容替换

                5. *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                    1.  [结束]显示*一个填充搜索推荐层*`search-menu`

                    2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

        2.  [分支]*是否使用远程数据*`remote`的值为true时,

            1.  [判断]*延迟进行fetch数据请求对象*`defered`存在, 说明下一个请求即将开始, 需要阻止

                1.  中止延迟请求

                2.  *延迟进行fetch数据请求对象*`defered`赋值null

            2.  [判断]*fetch数据的请求对象*`xhr`存在, 说明请求正在进行中

                1.  中止请求

                2.  *fetch数据的请求对象*`xhr`赋值null

            3.  [分支]当*推荐搜索关键词*`recommendKeyword`的值为空时,

                1.  [分支]当已经存在*历史提交搜索关键词缓存*`historySearchKeywordList`时

                    1.  给*search-menu-content的赋值数据源*`recommendKeywordDataList`赋值 -> *历史提交搜索关键词缓存*`historySearchKeywordList`

                    2.  *头部区域块是否显示标识*`isShowHeader`, 赋值为true, 以便模板中可以显示出*头部区域块*`search-menu-header`

                    3.  给*search-menu的赋值数据源*`searchMenuObject`的[key] `isShowHeader` 赋值

                    3.  将*search-menu的赋值数据源*`searchMenuObject`传入配置的模板, 得到最终的html代码

                    4.  将*一个填充搜索推荐层*`search-menu`内容替换

                    5. *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                        1.  [结束]显示*一个填充搜索推荐层*`search-menu`

                        2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

                2.  [分支][有效分支]当已经不存在*历史提交搜索关键词缓存*`historySearchKeywordList`时

                    1.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

                        1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

                        2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

            2.  [分支]当*推荐搜索关键词*`recommendKeyword`的值不为空时,

                1.  [分支]当*推荐搜索关键词*`recommendKeyword`被*历史未提交搜索关键词缓存*`historyKeywordCacheList`中的关键词匹配时

                    1.  获取匹配键的值, 对值进行Json反序列化

                    2.  将值给*search-menu-content的赋值数据源*`recommendKeywordDataList`赋值

                    2.  *头部区域块是否显示标识*`isShowHeader`, 赋值为false, 以便模板中不显示出*头部区域块*`search-menu-header`

                    3.  给*search-menu的赋值数据源*`searchMenuObject`的[key] `isShowHeader` 赋值

                    3.  将*search-menu的赋值数据源*`searchMenuObject`传入配置的模板, 得到最终的html代码

                    4.  将*一个填充搜索推荐层*`search-menu`内容替换

                    5. *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                        1.  [结束]显示*一个填充搜索推荐层*`search-menu`

                        2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

                2.  [分支][有效分支]当*推荐搜索关键词*`recommendKeyword`被*历史未提交搜索关键词缓存*`historyKeywordCacheList`中的关键词不匹配时

                    1.  创建*fetch数据的请求对象*`xhr`curry

                    2.  创建并启动*延迟进行fetch数据请求对象*`defered`

                    >   该分支以下逻辑都在*fetch数据的请求对象*`xhr`的回调函数中进行

                     2.  将请求的返回json对象给*search-menu-content的赋值数据源*`recommendKeywordDataList`赋值

                     2.  *头部区域块是否显示标识*`isShowHeader`, 赋值为false, 以便模板中不显示出*头部区域块*`search-menu-header`

                     3.  给*search-menu的赋值数据源*`searchMenuObject`的[key] `isShowHeader` 赋值

                     3.  将*search-menu的赋值数据源*`searchMenuObject`传入配置的模板, 得到最终的html代码

                     4.  将*一个填充搜索推荐层*`search-menu`内容替换

                     5. *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                        1.  [结束]显示*一个填充搜索推荐层*`search-menu`

                        2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

    2.  `click`*事件*

        1.  [分支]当*推荐搜索关键词*`recommendKeyword`的值为空时,

            1.  [分支]当已经存在*历史提交搜索关键词缓存*`historySearchKeywordList`时

                1.  给*search-menu-content的赋值数据源*`recommendKeywordDataList`赋值 -> *历史提交搜索关键词缓存*`historySearchKeywordList`

                2.  *头部区域块是否显示标识*`isShowHeader`, 赋值为true, 以便模板中可以显示出*头部区域块*`search-menu-header`

                3.  给*search-menu的赋值数据源*`searchMenuObject`的[key] `isShowHeader` 赋值

            2.  [分支][无效分支]当已经不存在*历史提交搜索关键词缓存*`historySearchKeywordList`时

                1.  [判断]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

                    1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

                    2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

        2.  [分支]当*推荐搜索关键词*`recommendKeyword`的值不为空时,

            1.  [分支]当*推荐搜索关键词*`recommendKeyword`被*历史未提交搜索关键词缓存*`historyKeywordCacheList`中的关键词匹配时

                1.  获取匹配键的值, 对值进行Json反序列化

                2.  将值给*search-menu-content的赋值数据源*`recommendKeywordDataList`赋值
                
            2.  [分支][无效分支]当*推荐搜索关键词*`recommendKeyword`被*历史未提交搜索关键词缓存*`historyKeywordCacheList`中的关键词不匹配时

                1.  [判断]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

                    1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

                    2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

        3.  将*search-menu的赋值数据源*`searchMenuObject`传入配置的模板, 得到最终的html代码

        4.  将*一个填充搜索推荐层*`search-menu`内容替换

        5.  [判断]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

            1.  [结束]显示*一个填充搜索推荐层*`search-menu`

            2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

    3.  `foucsin` 事件

        1.  *一个单行文本框*`search-input`*当前focus状态*`focusState`赋值为true

    3. `focusout` 事件

        1.  *一个单行文本框*`search-input`*当前focus状态*`focusState`赋值为false

        1.  [判断]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

            1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

            2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

    4.  `keydown` 事件

        1.  ESC: 27

            1.  [判断]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为true

                1.  [结束]隐藏*一个填充搜索推荐层*`search-menu`

                2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为false

        2.  RETURN: 13

            1.  [判断]*提交搜索事件 -> 回调函数*`onSearch`是否存在

                1.  执行`onSearch`

        3.  LEFT: 37

        4.  UP: 38

            1.  [判断]*一个单行文本框*`search-input`*当前focus状态*`focusState`为true

                1.  [分支]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                    1.  *当前选择/停留的搜索项index*`searchItemIndex`赋值为*推荐搜索项count*`recommendItemsCount` (最后一项+1)

                    1.  显示*一个填充搜索推荐层*`search-menu`

                    2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

                2.  [分支]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                    1.  [分支]*当前选择/停留的搜索项index*`searchItemIndex`的值等于0

                        1.  *当前选择/停留的搜索项index*`searchItemIndex`赋值为*推荐搜索项count*`recommendItemsCount`

                    2.  [分支]*当前选择/停留的搜索项index*`searchItemIndex`的值不等于0

                        1.  *当前选择/停留的搜索项index*`searchItemIndex`赋值为旧值+1

                    3.  [分支2]*当前选择/停留的搜索项index*`searchItemIndex`的值等于*推荐搜索项count*`recommendItemsCount` 或者 等于 -1

                        1.  *一个单行文本框*`search-input`*输入文本值*`input.value` 赋值为 *推荐搜索关键词*`recommendKeyword`

                    4.  [分支2]*当前选择/停留的搜索项index*`searchItemIndex`的值不等于*推荐搜索项count*`recommendItemsCount` 或者 等于 -1

                        1.  *一个单行文本框*`search-input`*输入文本值*`input.value` 赋值为 *search-menu-content的赋值数据源*`recommendKeywordDataList`的第`searchItemIndex`项的keyword值

                    5.  [判断]*切换推荐搜索项事件 -> 回调函数*`onSelect`是否存在

                        1.  执行`onSelect`

        5.  RIGHT: 39

        6.  DOWN: 40

            1.  [判断]*一个单行文本框*`search-input`*当前focus状态*`focusState`为true

                1.  [分支]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                    1.  *当前选择/停留的搜索项index*`searchItemIndex`赋值为-1

                    1.  显示*一个填充搜索推荐层*`search-menu`

                    2.  *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`赋值为true

                2.  [分支]*一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`为false

                    1.  [分支]*当前选择/停留的搜索项index*`searchItemIndex`的值等于*推荐搜索项count*`recommendItemsCount`

                        1.  *当前选择/停留的搜索项index*`searchItemIndex`赋值为0

                    2.  [分支]*当前选择/停留的搜索项index*`searchItemIndex`的值不等于*推荐搜索项count*`recommendItemsCount`

                        1.  *当前选择/停留的搜索项index*`searchItemIndex`赋值为旧值+1

                    3.  [分支2]*当前选择/停留的搜索项index*`searchItemIndex`的值等于*推荐搜索项count*`recommendItemsCount` 或者 等于 -1

                        1.  *一个单行文本框*`search-input`*输入文本值*`input.value` 赋值为 *推荐搜索关键词*`recommendKeyword`

                    4.  [分支2]*当前选择/停留的搜索项index*`searchItemIndex`的值不等于*推荐搜索项count*`recommendItemsCount` 或者 等于 -1

                        1.  *一个单行文本框*`search-input`*输入文本值*`input.value` 赋值为 *search-menu-content的赋值数据源*`recommendKeywordDataList`的第`searchItemIndex`项的keyword值

                    5.  [判断]*切换推荐搜索项事件 -> 回调函数*`onSelect`是否存在

                        1.  执行`onSelect`




## 确定数据存储

1.  *search-menu的赋值数据源*`searchMenuObject`(Object) 默认为空对象

    [key] `isShowHeader`
    [key] `isShowFooter`

1.  *search-menu-content的赋值数据源*`recommendKeywordDataList`(Array\<Object>)   默认未定义

2.  *历史已提交搜索关键词缓存*`historySearchedKeywordCacheList`(Array\<String>) 默认为空数组

3.  *历史未提交搜索关键词缓存*`historyKeywordCacheList`(Array\<String>) 默认为空数组

4.  *历史推荐搜索关键词 -> 返回的数据结果集*`historyRecommendKeywordCache`(Object) 默认为空对象

    key -> historyKeyword | value -> recommendKeywordDataList toJson


## 确定关键属性

1.  *一个单行文本框*`search-input`*输入文本值*`input.value`(String) 默认没有输入值

2.  *推荐搜索关键词*`recommendKeyword`(String) 默认未定义

3.  *头部区域块是否显示标识*`isShowHeader`(Boolean) 默认false

4.  *尾部区域块是否显示标识*`isShowFooter`(Boolean) 默认true

5.  *历史已提交搜索关键词缓存最大个数*`maximumHistorySearchedKeywordCacheList`(Int) 默认为10

6.  *历史未提交搜索关键词缓存最大个数*`maximumHistoryKeywordCacheList`(Int) 默认为100

7.  [公开]*是否使用远程数据*`remote`(Boolean) 默认false (请求方式强制使用jsonp)

8.  [公开]*远程请求地址*`url`(String) 默认未定义 (当`remote`为true时必须指定)

9.  [公开]*对应搜索文本的请求参数名*`paramName`(String) 默认为'query'

10. [公开]*附加请求参数对象*`params`(Object) 默认null (需要支持实例修改)

11. [公开]*本地数据源*`localData`(Object) 默认null (当`remote`为false时必须指定)

    key -> keyword | value -> recommendKeywordDataList toJson

12. [公开]*对每个推荐搜索返回结果集里指定的字段进行格式化, 返回格式化后的值 -> 回调函数*`formatRecommendKeywordData`(Function)

13. [公开]*允许触发一次获取搜索推荐数据动作最小间隔*`recommendFetchInterval`(Int) 默认为10(ms)

14. *fetch数据的请求对象*`xhr`(Object) 默认null 由jQuery.ajax创建

15. *延迟进行fetch数据请求对象*`defered`(Object) 默认null 由setTimeout创建

16. *一个单行文本框*`search-input`*当前focus状态*`focusState`(Boolean) 默认false

17. *一个填充搜索推荐层*`search-menu`*当前显示状态*`displayState`(Boolean)  默认false

18. *推荐搜索项count*`recommendItemsCount`(Int) 默认0

19. *当前选择/停留的搜索项index*`searchItemIndex`(Int) 默认-1 选择搜索推荐项时使用, 0表示第一项, `recommendItemsCount-1`表示最后一项

20. *提交搜索事件 -> 回调函数*`onSearch`(Function)

21. *切换推荐搜索项事件 -> 回调函数*`onSelect`(Function)