---
layout:     post
title:      "es6-iterator-yield的用法"
subtitle:   " \"\""
author:     "绯雨闲丸"
header-img: "img/post-bg-2016.jpg"
tags:
    - es6
---

> “”

只要一个对象实现了正确的 Symbol.iterator 方法，那么它就可以被 for in 所遍历

```js
var students = {}

students[Symbol.iterator] = function() {
  let index = 1;
  return {
    next() {
      return {done: index>100, value: index++}
    }
  }
}

for(var i of students) {
  console.log(i);
}
```

仔细看上面的代码就会明白迭代器是如何工作的。当执行 for(var i of students) 的时候，其实是调用了 students[Symbol.iterator]() 方法，这个方法返回了一个iterator（迭代器）。迭代器有一个next方法，for循环会不断调用这个 iterator.next方法来获取下一个值，直到返回值中的 done 属性为true的时候结束循环。

知道原理之后，我们可以自己来调用iterator.next来实现循环：

```js
var students = {}

students[Symbol.iterator] = function() {
  let index = 1;
  return {
    next() {
      return {done: index>100, value: index++}
    }
  }
}

var iterator = students[Symbol.iterator]();

var s=iterator.next();
while(!s.done) {
  console.log(s.value);
  s=iterator.next();
}
```

上例中使用 iterator.next 和 while 结合实现了 for循环。

除了使用iterator 之外，我们还可以使用 yield 语法来实现循环，yield相对简单一些，只要通过 yield 语句把值返回即可：

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





