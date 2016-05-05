---
layout:     post
title:      "es6新增内容简介"
subtitle:   " \"\""
author:     "绯雨闲丸"
header-img: "img/post-bg-2016.jpg"
tags:
    - es6
---

> “”


## ES6新增的内容

ES6新增了大量的内容。

这里可以查看es6中文详细教程[http://es6.ruanyifeng.com/#docs/intro](http://es6.ruanyifeng.com/#docs/intro)

这可以查看主流浏览器和自己当前浏览器的兼容性 [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

一般在开发时,都使用 babel 来把 es6 的代码编译成 es5。它支持绝大部分的特性。

而且查看编译后的代码很容易理解这些特性。


## let & const

可以通过 let 和 const 来声明块级作用于的变量（通过 var 声明的是函数级作用域）。而且 const 声明的是不可变变量。

```js
{
    let x=1;
    console.log(x);
}
console.log(x);
const y=2;
```

### 解构(destructuring)

可以用一个对象来给一个对象（或者数组）的每一个属性赋值。

```js
var [a,b,c]=[1,2,3];    //通过数组给多个变量赋值
var {name, age} = {name: "Tom", age:12} //通过一个对象来给多个变量赋值

//用对象来定义参数
function g({name: x}) {
    console.log(x);
}
g({name: 5})
```

## 箭头函数(arrow function)

箭头函数很像 lambda 表达式，而且还会自动绑定this为当前上下文。

```js
[1,2,3,4].map(d=>d*d); //单行

等同于

[1,2,3,4].map(function(d) {
    return d*d;
});

//也可以写多行
[1,2,3,4].map(d=>{
    console.log(this);
    return d*d;
});

等同于

[1,2,3,4].map(function(d) {
    console.log(this);
    return d*d;
});
```

### 函数默认变量和延展属性

可以在函数声明的时候指定一个默认值，还有用三个点号来表示延展属性

```js
function say(name="Tom") {
    return name;
}

function a(x, ...y) {//延展属性
  console.log(x,y)
}
a(1,2,3,4);
```

## modules

对模块的语法支持

```js
module.exports = {
    sum: function() {return 2}
}

export default function() {
    return 1;
}

export function sum(x, y) {
  return x + y;
}

import sum from "math"

sum(1,2);
```

## 类(class)

es6原生支持class 关键字来声明一个类了，当然最终还是会内部转换成基于原型继承实现的。但是毕竟可以很方便的实现创建和继承一个类了

```js
class People {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(sayName);
    }
}
```

## 对象字面量的增强(improve object literal)

现在可以这样写了：

```js
var people = {
      name: "Tom",
      sayName() {    //更方便定义函数
        console.log(this.name);
      },
      [ 'prop_' + (() => 42)() ]: 42    //甚至可以计算属性名
}
```

### 字符串模板(string template)

现在终于不用引用模板库了, 原生有语法支持了，并且用反引号支持多行字符串

```js
var people = {name: "Tom", age: 12};
var html = `<ul>
<li>name: ${people.name}</li>
<li>age: ${people.age}</li>
</ul>`;
```

## Iterators + For..Of

Iterator 用来实现一个可以用 for 关键字遍历的对象：

```js
let students = {
  [Symbol.iterator]() {
    let current = 1;
    return {
      next() {
        return {done: current > 100, value: current++};
        }
    }
  }
}

for(s of students) {
  console.log(s);
}
//输出 0 - 100
```

## yield

JS终于支持大名顶顶的 yield 了，就是在一个函数内部可以返回多次 return 一个变量。如果用 yield 来实现上面的代码，应该是这样的

```js
let students = {
  [Symbol.iterator]: function*() {
    for(var i=0;i<=100;i++) {
      yield i;
    }
  }
}

for(var s of students) {
  console.log(s);
}
```

## unicode

原生支持unicode api


## Map + Set + WeakMap + WeakSet

map 和 set 在其他语言中很常用。 WeakMap 和 WeakSet 用来防止内存泄露

```js
#map
var m = new Map();
m.set("a", 1);
m.get("a")

#set
var s = new Set();
s.add("a");
s.add("b");
s.add("a"); //不变，因为 a 已经存在了
```

## proxy

这里的proxy和 jQuery.proxy 可是两码事，不是用来绑定this的。它和 java 的annotation，Python 的 decorator 类似。就是它可以代理一个对象的所有行为，比如你取一个对象的属性，正常是直接取，但是加了 proxy之后，“取”的这个操作会先传个proxy，他来决定到底怎么取。

```js
var target = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';
```
当然他不止可以代理 get，还有 set, has 等一堆操作可以被代理。

## Symbol

Sybmol 用来创建唯一不可变字符串

## 继承内置类

现在内置的 Array, Date 和 Element 都可以被继承了

## Math + Number + String + Array + Object API 增强

增加了一大推新的API：

```js
"abcd".include("bc");
```

## promise

现在原生支持了

## 反射

类似java的反射，可以通过反射机制去操作运行时的对象。

## 尾递归调用优化

关于尾递归的说明可以参考这里 [http://www.zhihu.com/question/20761771](http://www.zhihu.com/question/20761771)

ES6规定了解释器必须对尾递归进行优化，无论你的尾递归有多少次调用再也不会造成栈溢出了。

```js
function factorial(n, acc = 1) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

factorial(100000)
```
上面这个是计算阶乘的，现在在任何浏览器中运行都会造成栈溢出。