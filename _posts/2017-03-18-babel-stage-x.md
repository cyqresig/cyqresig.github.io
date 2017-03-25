---
layout:     post
title:      "babel配置-各阶段的stage的区别"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - babel
    - stage
---

>

## 前言

由于各大浏览器并对es6的并没有完成支持，我们开发前端项目时需要使用Babel来将ES6代码编译为ES5。
配置`.babelrc`文件时一般配置为如下：

```js
{
    "presets": [
        "es2015"，
        "react",
        "stage-0"
    ],
    "plugins": []
}
```

这个配置文件的意思。首先，这个配置文件是针对babel 6的。babel 6做了一系列模块化，不像Babel 5一样把所有的内容都加载。

如果需要编译es6，我们需要设置presets包含`es2015`，也就是预先加载es6编译的模块。

如果需要编译jsx，我们需要设置presets包含`react`，也就是预先加载react编译的模块。

如果需要编译es7，我们需要设置presets包含`stage-0`，也就是预先加载es7编译的模块。

## stage不同阶段的区别

es7不同阶段语法提案的转码规则模块（共有4个阶段），分别是stage-0，stage-1，stage-2，stage-3。

### stage-0

stage-0的功能范围最广大，包含stage-1, stage-2以及stage-3的所有功能，同时还另外支持如下两个功能插件：

* [transform-do-expressions][2]

* [transform-function-bind][3]

#### transform-do-expressions

这个插件是为了方便在 jsx写if/else表达式而提出的.

众所周知，react中jsx对条件表达式支持的不是太好，你不能很方便的使用if/else表达式，要么你使用三元表达，要么用函数。例如你不能写如下的代码：

```js
var App = React.createClass({

    render(){
        let { color } = this.props;

        return (
            <div className="parents">
                {
                    if(color == 'blue') { 
                        <BlueComponent/>; 
                    }else if(color == 'red') { 
                        <RedComponent/>; 
                    }else { 
                        <GreenComponent/>; }
                    }
                }
            </div>
        )
    }
})
```

而只能这么写，

```js
var App = React.createClass({

    render(){
        let { color } = this.props;


        const getColoredComponent = color => {
            if(color === 'blue') { return <BlueComponent/>; }
            if(color === 'red') { return <RedComponent/>; }
            if(color === 'green') { return <GreenComponent/>; }
        }


        return (
            <div className="parents">
                { getColoredComponent(color) }
            </div>
        )
    }
})
```

#### transform-function-bind

这个插件其实就是提供过 `::` 这个操作符来方便快速切换上下文`this`。

使用bind切换this代码如下：

```js
func1.bind(obj)
func2.bind(this)
```

使用插件后，改写代码如下：

```js
obj::func1
::func2
```

### stage-1

stage-1除了包含stage-2和stage-3，还包含了下面4个插件：

* [transform-class-constructor-call][4]

* [transform-class-properties][5]

* [transform-decorators][6]

* [transform-export-extensions][7]

#### transform-class-constructor-call

这个模块已经废弃，不再使用了

#### transform-class-properties
    
这个插件可以支持解释如下代码

```js
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    }

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    }
}
```
    
#### transform-decorators

这个插件可以使如下代码

```js
class MyClass extends Component {
  constructor(props, context) {
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {isLoading: true}
  }
  
  onChange() {}
  handleSubmit() {}
}
``` 

通过使用`autobind`装饰器，改写为如下代码

```js
class MyClass extends Component {
  state = {isLoading: true}
  
  @autobind
  onChange() {}
  
  @autobind
  handleSubmit() {}
}
``` 
    
#### transform-export-extensions

这个插件支持将如下代码：

```js
import * as ns from 'mod'
export default ns
import v from 'mod'
export default v
```

改写为如下代码：

```js
export * as ns from 'mod'
export v from 'mod'
```

### stage-2

stage-2除了包含stage-3，还包含了下面2个插件：

* [syntax-trailing-function-commas][8]

* [transform-object-reset-spread][9]

#### syntax-trailing-function-commas

这个插件可以支持函数的最后一个参数后面允许加逗号，代码如下：

```js
function clownPuppiesEverywhere(
  param1,
  param2,   // 最后一个参数加逗号，以方便增加后面一个参数，以及优化源代码管理
) { /* ... */ }
```

#### transform-object-reset-spread

这个插件支持解释扩展运算符，代码如下：

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
```

### stage-3

stage-3包含了下面2个插件：

* [transform-async-to-generator][10]

* [transform-exponentiation-operator][11]

#### transform-async-to-generator

这个插件用来支持es7中的async和await，代码如下：

```js
const sleep = (timeout)=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(resolve, timeout)
    })
}

(async ()=>{
    console.time("async");
    await sleep(3000);
    console.timeEnd("async");
})()
```

#### transform-exponentiation-operator

这个插件可以支持 `**` 操作符进行幂操作，代码如下：

```js
let squared = 2 ** 2;
// same as: 2 * 2

let cubed = 2 ** 3;
// same as: 2 * 2 * 2
``` 

[babel stage 文档][1]

[1]: https://babeljs.io/docs/plugins/preset-stage-0/
[2]: https://babeljs.io/docs/plugins/transform-do-expressions
[3]: http://babeljs.io/docs/plugins/transform-function-bind/
[4]: http://babeljs.io/docs/plugins/transform-class-constructor-call/
[5]: http://babeljs.io/docs/plugins/transform-class-properties/
[6]: http://babeljs.io/docs/plugins/transform-decorators/
[7]: http://babeljs.io/docs/plugins/transform-export-extensions/
[8]: http://babeljs.io/docs/plugins/syntax-trailing-function-commas/
[9]: http://babeljs.io/docs/plugins/transform-object-rest-spread/
[10]: http://babeljs.io/docs/plugins/transform-async-to-generator/
[11]: http://babeljs.io/docs/plugins/transform-exponentiation-operator/










