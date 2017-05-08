---
layout:     post
title:      "babel-polyfill和babel-runtime的区别"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - babel
    - babel-polyfill
    - babel-runtime
    - babel-plugin-transform-runtime
---

> 

## Babel编译转码的范围

Babel默认只转换新的JavaScript语法，而不转换新的API。
例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。
如果想使用这些新的对象和方法，则需要为当前环境提供一个polyfill

## babel-polyfill

目前最常用的配合Babel一起使用的polyfill是`babel-polyfill`，它会"加载整个polyfill库"，针对编译的代码中新的API进行处理，并且在代码中插入一些帮助函数。

比如说：代码中包含

```js
const key = 'babel'
const obj = {
    [key]: 'polyfill',
}
```

使用`babel-polyfill`配合转码后，代码会变成这样

```js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

var key = 'babel';
var obj = _defineProperty({}, key, Object.assign({}, { key: 'polyfill' }));
```

## babel-runtime

`babel-polyfill`解决了Babel不转换新API的问题，但是直接在代码中插入帮助函数，会导致污染了全局环境，并且不同的代码文件中包含重复的代码，导致编译后的代码体积变大。
（比如：上述的帮助函数_defineProperty有可能在很多的代码模块文件中都会被插入）

Babel为了解决这个问题，提供了单独的包`babel-runtime`用以提供编译模块的工具函数，
启用插件`babel-plugin-transform-runtime`后，Babel就会使用`babel-runtime`下的工具函数，上述的代码就会变成这样

```js
var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { 
    return obj && obj.__esModule ? obj : { default: obj }; 
}

var key = 'babel';
var obj = (0, _defineProperty3.default)(
            {}, key, (0, _assign2.default)({}, { key: 'polyfill' })
          );
```

可以看到上述转换后的代码中_defineProperty帮助函数是通过`babel-runtime`下的模块引用的，
同时Object.assign也变成了模块引用, 这样可以避免自行引入polyfill时导致的污染全局命名空间的问题。

## 配置

* 使用`babel-polyfill`需要额外安装`babel-polyfill`依赖包，
然后在webpack配置文件中的入口或者公共模块中加入'babel-polyfill'即可，代码如下：

```js
entry: {
    common: [
        `babel-polyfill`,
        `whatwg-fetch`,
        `react`,
        `react-dom`,
        `redux`,
        `react-redux`,
        `js-cookie`,
    ],
},
```

* 使用`babel-runtime`需要额外安装`babel-runtime`和`babel-plugin-transform-runtime`依赖包，
然后在`.babelrc`配置文件中启用`transform-runtime`, 代码如下：

```js
{
    "presets": [
        "es2015",
        "react",
        "stage-0"
    ],
    "plugins": [
        "transform-runtime"
    ]
}
```

## 比较

`babel-polyfill`与`babel-runtime`相比虽然有各种缺点，但在某些情况下仍然不能被`babel-runtime`替代，
例如，代码：`[1, 2, 3].includes(3)`，`Object.assign({}, {key: 'value'})`，Array，Object以及其他"实例"下es6的方法，`babel-runtime`是无法支持的，
因为`babel-runtime`只支持到static的方法。

## 结论

`babel-runtime`适合在组件，类库项目中使用，而`babel-polyfill`适合在业务项目中使用。

## 参考

[http://stackoverflow.com/questions/31781756/is-there-any-practical-difference-between-using-babel-runtime-and-the-babel-poly][0]

[0]: http://stackoverflow.com/questions/31781756/is-there-any-practical-difference-between-using-babel-runtime-and-the-babel-poly












