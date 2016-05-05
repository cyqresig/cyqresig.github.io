---
layout:     post
title:      "es6-destructing-spread的用法"
subtitle:   " \"\""
author:     "绯雨闲丸"
header-img: "img/post-bg-2016.jpg"
tags:
    - 生活
---

> “”

## 解构

简单来说就是通过析构表达式的右边值来同时对左边的多个值进行赋值, 可以看下示例进行理解:

```js
var [a,b,c]=[1,2,3];    //通过数组给多个变量赋值
var {name, age} = {name: "Tom", age:12} //通过一个对象来给多个变量赋值
```

上面两个例子分别用一个数组和一个对象对多个变量进行赋值。而且并用严格一一对应，可以在赋值的时候省略掉一些属性：

```js
var [a, ,c]=[1,2,3];    //忽略数组中的第二个
var {name, age} = {name: "Tom", age:12, gender: "male"} //通过一个对象来给多个变量赋值
```

如果你用babel编译，会发现上面的代码编译出来是这样的：

```js
var _ref = [1, 2, 3];
var a = _ref[0];
var c = _ref[2];
var _name$age$gender = { name: "Tom", age: 12, gender: "male" };
var name = _name$age$gender.name;
var age = _name$age$gender.age;
```

结合 spread 语法，可以实现更灵活的赋值：

```js
var [a, b, ...others]=[1,2,3,4,5,6];
```

上面的代码把 数组的第一个元素赋值给 a，第二个元素赋值给 b，剩余的全部给 others，注意 others 前面的三个点。其实用babel编译出来最好理解:

```js
var a = 1;
var b = 2;
var others = [3, 4, 5, 6];
```

而且这个destructing不止能取扁平的对象属性，其实只要结构对应 都能取到：

```js
var {name, child: {age}} = {name: "Bob", child: {age: 12}}     //取出age
```

还可以在for循环中通过destructing语法直接取出遍历对象中的属性：

```js
var students = [
  {name: "Bob"},
  {name: "Lily"}
  ]

for(var {name} of students) {     //直接取出name属性
  console.log(name);
}
```

同理在函数形参中也可以用来直接取实参的某些属性：

```js
function sayName({name}) {
  console.log(name);
}

sayName({name: "Bob"});
```





