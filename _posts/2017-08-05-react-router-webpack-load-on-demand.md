---
layout:     post
title:      "react-router + webpack 如何实现按需加载"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - react
    - router
    - component
    - load-on-demand
---

> 

## 按需加载

无论是在单页应用，还是传统的多页应用中，按需加载模块都是一个很常见的优化页面加载的手段。

按需加载可以有效的减少页面初始化时加载文件的大小，特别是在单页应用中。

## react-router + webpack 实现按需加载

webpack都需要配置 `commonchunk`

router直接加载时是这样的：

```js
import UserList from '../containers/UserList'
...
<Route path="/userlist" component={UserList}>
...       
```

router按需加载时需要把 `component` 参数改成 `getComponent`，并且使用 webpack 的 `require.ensure` api

```js
const getComponent => (location, cb) {
  require.ensure([], (require) => {
    cb(null, require('../containers/UserList'))
  }, 'userlist')
},
...
<Route path="/list" getComponent={getComponent}>
...       
```

这样 webpack 在打包时，`../containers/UserList`模块会被单独打成一个文件，并且会将这个模块从入口模块中移除。

在 跳转 router `/userlist` 时，会异步下载`../containers/UserList`模块文件，以达到按需加载的效果。

要注意按需加载时，不要直接 `import UserList from '../containers/UserList'`， 否则模块会直接被 webpack 打包，而不会打包成单独的异步加载的模块文件。

## react component 实现按需加载

那这种按需加载有没可能应用在普通的 react component 中呢？当然可以，但需要利用 state 做一层处理

普通方式

```js
import Todo from '../component/Todo'
...
render() {
    return (
        <Todo />
    )
}
```

按需加载

```js
...
constructor(props) {
  super(props);
  this.state = {
      TodoClass: null,
  };
}
...
componentWillMount() {
     require.ensure([], (require) => {
        const TodoClass = require('../component/Todo').default
        this.setState({
            TodoClass,
        })
    })
}
...
render() {
    return (
        <this.state.TodoClass />
    )
}
```

## 参考示例

[react-router-load-on-demand][1]

[1]: https://github.com/cyqresig/react-router-load-on-demand-demo











