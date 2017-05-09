---
layout:     post
title:      "设置github个人网站页使用https访问"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - github
    - page
    - ssl
    - https
---

> [译]

## Github Pages

使用Github的Github pages的功能可以免费搭建博客或者托管网页，但是访问方式默认是http的，如果我希望使用https应该如何设置呢？

## 使用github.io域名时的设置

* 进入github pages对应的仓库首界面

* 点击Settings，进入这个仓库的设置界面

* 找到`GitHub Pages`配置栏，勾选`Enforce HTTPS`

## 使用自定义域名的设置

当在仓库的Settings中设置过`Custom domain`时，是无法勾选`Enforce HTTPS`的。
在这种情况下，将不得不借助第三方的支持来实现https的访问。

* 访问https://support.cloudflare.com/

* 登录，如果没有帐号，则新建一个帐号。
  
* 点击`Add Website`新增一个网站，注意需要输入你的自定义域名

* 创建`A`记录-你的自定义域名，指向你的Github Pages的IP

* 创建`A`记录-`www`，指向你的Github Pages的IP

* 或者创建`CNAME`记录-`www`，指向你的Github Pages的域名

* 确保在你的Github Pages根目录下存在一个文件`CNAME`，里面设置了你的自定义域名

* 打开你的域名管理网站，将这个域名对应的DNS服务器地址设置成cloudflare提供给你的地址

* 在cloudflare的域设置中，将`Setting SSL`这项设置为`Flexible`

* 完成cloudflare的设置

* 过数分钟或者数小时后，配置将生效

## 让搜索引擎知道网站是使用https访问的

上面的配置，只是允许你的站点能使用https访问，但同时还是允许http的方式访问，如要强制使用https访问，则需要：

* 在你的Github Pages仓库根目录下的`_config.yml`文件中，加入

```js
url: https://www.yoursite.com   # with the https protocol
enforce_ssl: www.yoursite.com   # without any protocol

# For example, my configuration is this:
url: https://vanadis.cn
enforce_ssl: vanadis.cn
```

* 确保在页面的<head>标签中存在带`canonical`属性的<link>标签

```js
<link rel="canonical" href=" { { site.url } }{ { page.url } }" />
```

## 强制使用http访问的用户重定向至https访问

* 你的页面的<head>标签中的最底部增加script代码

```js
<script type="text/javascript">
    var host = "yoursite.com";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";
</script>
```

## 其他注意事项 

* 如果你发现有一些css样式文件或者js文件报没有找到的错误，需要检查一下引用的路径是否是使用https的方式，一个比较好的解决办法是引用路径不写协议`protocol`的部分

```js
<!-- Change this -->
<link rel="stylesheet" href="http://www.somesite.com/path/to/styles.css">

<!-- to this: -->
<link rel="stylesheet" href="//www.somesite.com/path/to/styles.css">
```

## 资源和示例

[设置Github Pages使用自定义域名][1]

[设置Github Pages使用https访问][2]

[示例-设置_config.yml文件][3]

[示例-设置CNAME.yml文件][4]

[示例-设置head.html文件][5]


## 英文原文参考

[https://sheharyar.me/blog/free-ssl-for-github-pages-with-custom-domains/][0]

[0]: https://sheharyar.me/blog/free-ssl-for-github-pages-with-custom-domains/

[1]: https://help.github.com/articles/using-a-custom-domain-with-github-pages/

[2]: https://konklone.com/post/github-pages-now-sorta-supports-https-so-use-it

[3]: https://github.com/sheharyarn/sheharyarn.github.io/blob/code/_config.yml#L5-L6

[4]: https://github.com/sheharyarn/sheharyarn.github.io/blob/master/CNAME

[5]: https://github.com/sheharyarn/sheharyarn.github.io/blob/code/.themes/sybtle/source/_includes/head.html#L7-L11












