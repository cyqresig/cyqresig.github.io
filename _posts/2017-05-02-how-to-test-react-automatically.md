---
layout:     post
title:      "React自动化测试"
subtitle:   ""
author:     "绯雨闲丸"
header-img: ""
tags:
    - front-end
    - react
    - component
    - test
    - case
    - mocha
    - karma
    - enzyme
---

> 

## 为什么要写测试用例

软件测试的重要性是毋庸置疑的。但如何以最少的人力、资源投入，在最短的时间内完成测试，发现软件系统的缺陷，持续保证软件的优良品质呢？

试想，如果写一个react组件，这个组件有10个需要用户交互的功能点，开发者为保证质量，每次修改代码都需要打开浏览器，运行组件代码，执行10次不同的用户交互操作，并查看与之对应的10个功能点是否运行正常。

这种方式费时费力，还不能保证不会出错。 而有了测试用例，无论是谁来测试，参照测试用例实施，都能保障测试的质量。测试用例自动化更是可以把人为因素的影响减少到最小。即便最初的测试用例考虑不周全，随着测试的进行和软件版本更新，也将日趋完善。

## 如何为React组件写测试用例

目前适用于React的测试框架很多，例如：facebook的[jest][2], airbnb的[enzyme][0]等。

这里我们使用airbnb的[enzyme][0], 并使用[ava][1]来配合编写测试用例。

### 安装测试依赖

* 安装测试框架，`npm install --dev ava enzyme`

* 安装配套的代理包，`npm install --dev sinon`

* 如果使用的react版本在15.5以下，则需要指定安装react测试套件，`npm install --dev react-addons-test-utils`

* 如果使用的react版本在15.5及以上，则需要指定安装react测试套件 `npm install --dev react-test-renderer`

* 如需使用[enzyme][0]的`mount`api，则需要安装[jsdom][3]，`npm install --dev jsdom@9.12` (由于版本10有break change，为方便兼容旧代码先安装版本9)

### 配置测试环境

* 创建一个用于测试的组件类`Bar`，代码如下：

    ```js
    import React, { PropTypes, PureComponent, } from 'react'
    import noop from './util/noop'
    
    const renderClickCountLabel = (clickCount) => {
        let clickCountLabelView = null
    
        if (clickCount > 0) {
            clickCountLabelView = (
                <span click-count-label>{clickCount}</span>
            )
        }
    
        return clickCountLabelView
    }
    
    class Bar extends PureComponent {
    
        static defaultProps = {
            title: 'bar',
            value: '',
            data: noop.obj,
            deepData: noop.obj,
            onClick: noop.func,
            onChange: noop.func,
        }
    
        static propTypes = {
            title: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            onChange: PropTypes.func.isRequired,
            value: PropTypes.string.isRequired,
            data: PropTypes.object.isRequired,
            deepData: PropTypes.object.isRequired,
        }
    
        constructor(props) {
            super(props)
            const {
                value,
                data,
                deepData,
            } = props
    
            this.state = {
                clickCount: 0,
                value,
                data: {...data,},
                deepData: {...deepData,}
            }
        }
    
        handleOnClick = () => {
            const {
                onClick,
            } = this.props
            const {
                clickCount,
            } = this.state
    
            const newClickCount = clickCount + 1
    
            this.setState({
                clickCount: newClickCount,
            }, () => {
                onClick(newClickCount)
            })
        }
    
        handleOnChange = (e) => {
            const {
                onChange,
            } = this.props
    
            const {
                value,
            } = e.target
    
            this.setState({
                value,
            }, () => {
                onChange(value)
            })
        }
    
        render() {
            const {
                title,
            } = this.props
            const {
                value,
                clickCount,
            } = this.state
    
            return (
                <div
                    title={title}
                    className="bar"
                    onClick={this.handleOnClick}>
                    <input type="text" value={value} onChange={this.handleOnChange}/>
                    {renderClickCountLabel(clickCount)}
                </div>
            )
        }
    }
    
    export default Bar
    ```

* 在根目录下创建`test`目录

* 预加载jsdom配置，代码如下：

    ```js
    /* eslint-env browser */
    global.document = require('jsdom').jsdom('<body></body>')
    global.window = document.defaultView
    global.navigator = window.navigator      
    ```
* 在`package.json`中配置[ava][1]，代码如下：
    
    ```js
    "ava": {
        "files": [
            "test/**/*-test.js",                  // 指定测试哪些文件
            "!test/**/{empty,not}-test.js"        // 指定排除哪些文件
        ],
        "require": [
            "babel-register",                     // 预加载babel转码
            "./test/helpers/setup-browser-env.js" // 预加载jsdom模拟浏览器配置
        ],
        "concurrency": 5,                         // 最多并发执行5个测试用例
        "verbose": true,                          // 日志模式
        "failFast": true,                         // 遇到测试用例报错时，停止执行后续的用例
        "failWithoutAssertions": false,           // 报错时显示断言
        "babel": "inherit"                        // 使用.babelrc中的babel配置进行转码
    }
    ```
    
* 在`package.json`中配置测试脚本命令

    ```js
    "scripts": {
        "test": "ava"
    }
    ```

### 编写测试用例

我们使用[ava][1]来编写测试用例，使用[enzyme][0]的`shallow`以及`mount`方法来模拟测试容器，使用`sinon`来模拟事件，代码如下：

```js
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import Bar from '../src/Bar'
import noop from '../src/util/noop'

// 测试用例集标题
test.todo('Bar-test');

// 测试组件是否触发render
test('组件是否触发render', (t) => {
    sinon.spy(Bar.prototype, 'render')
    const wrapper = mount(<Bar />)
    t.true(Bar.prototype.render.calledOnce)
})
```

#### 属性与状态

我们需要在测试属性与状态在组件初始化时，以及组件交互时，是否符合预期，代码如下：

##### 组件初始化

```js
// 测试块标题
test.todo('测试组件初始化，属性赋值后，组件的属性与状态是否符合预期');

// 测试组件初始属性赋值后，初始状态的值是否符合预期
test('检查默认值是否生效', (t) => {
    const defaultProps = {
        title: 'bar',
        value: '',
        data: noop.obj,
        deepData: noop.obj,
        onClick: noop.func,
        onChange: noop.func
    }
    const wrapper = shallow(
        <Bar/>
    )
    const instance = wrapper.instance()

    t.deepEqual(instance.props, defaultProps)
})

test('初始props -> value赋值是否成功', (t) => {
    const wrapper = shallow(
        <Bar value={'0'}/>
    )
    const instance = wrapper.instance()

    t.is(instance.props.value, '0')
})

// 测试组件初始属性赋值后，初始状态的值是否符合预期
test('初始props -> value赋"0"，初始state -> value值应为"0"', (t) => {
    const wrapper = shallow(
        <Bar value={'0'}/>
    )

    t.is(wrapper.state().value, '0')
})

// 测试组件初始属性赋值后，初始状态的值是否符合预期
test('初始props -> data赋值，初始state -> data值与赋的值相等', (t) => {
    const data = {
        key: 'data',
        value: 8
    };
    const wrapper = shallow(
        <Bar
            data={data}/>
    )

    t.deepEqual(wrapper.state().data, data)
})

// 测试组件初始属性赋值后，初始状态的值是否符合预期
test('初始props -> deepData赋值，初始state -> deepData值与赋的值相等', (t) => {
    const deepData = {
        key: 'data',
        value: 8,
        children: [{
            key: 'child',
            value: 88
        }]
    };
    const wrapper = shallow(
        <Bar
            deepData={deepData}/>
    )

    t.deepEqual(wrapper.state().deepData, deepData)
})
```

##### 组件交互

```js
// 测试块标题
test.todo('测试组件交互后，组件的属性与状态是否符合预期');

test('测试组件交互click点击后，组件的clickCount状态值+1（从0变更到1）', (t) => {
    let wrapper = null
    wrapper = shallow(
        <Bar />,
    )
    wrapper.find('div').simulate('click')
    t.is(wrapper.state('clickCount'), 1)
})

test('测试组件交互click点击后，回调函数onClick返回的clickCount值等于组件的clickCount状态值+1（从0变更到1）', (t) => {
    let wrapper = null
    const onClick = (clickCount) => {
        t.is(clickCount, 1)
    }
    wrapper = shallow(
        <Bar onClick={onClick}/>,
    )
    wrapper.find('div').simulate('click')
})

test('测试组件交互文本内容change改变为888后，组件的value状态值也同步变更为888', (t) => {
    let wrapper = null
    wrapper = shallow(
        <Bar />,
    )
    const fakeEvent = {
        target: {
            value: 888
        }
    }
    wrapper.find('input[type="text"]').simulate('change', fakeEvent)
    t.is(wrapper.state('value'), 888)
})

test('测试组件交互文本内容change改变为888，回调函数onChange返回的value值等于组件的value状态值888', (t) => {
    let wrapper = null
    const onChange = (value) => {
        t.is(value, 888)
    }
    wrapper = shallow(
        <Bar onChange={onChange}/>,
    )
    const fakeEvent = {
        target: {
            value: 888
        }
    }
    wrapper.find('input[type="text"]').simulate('change', fakeEvent)
})
```

#### 界面渲染

我们还需要在测试界面的渲染在组件初始化时，以及组件交互时，是否符合预期，代码如下：

##### 组件初始化

```js
// 测试块标题
test.todo('测试组件初始化，属性赋值后，组件的界面渲染是否符合预期');

test('组件初始化后，根节点应是一个class为"bar"的div', (t) => {
    const wrapper = shallow(
        <Bar/>
    )

    t.true(wrapper.is('div.bar'))
})

test('组件初始化后，应包含一个input', (t) => {
    const wrapper = shallow(
        <Bar/>
    )

    t.is(wrapper.find('input').length, 1)
})

test('组件初始化后，应渲染一个class为"bar"的div, 并且div内还包含一个value值为"1"的input:text', (t) => {
    const wrapper = shallow(
        <Bar value="1"/>
    )

    let flag = true
    const divWrapper = wrapper.find('div')
    if (divWrapper.length !== 1) {
        flag = false
    }
    if (flag) {
        const inputWrapper = divWrapper.find('input[type="text"]')
        if (inputWrapper.length !== 1) {
            flag = false
        } else {
            if (inputWrapper.props().value !== '1') {
                flag = false
            }
        }
    }

    if (flag) {
        t.pass()
    } else {
        t.fail()
    }

})
```

##### 组件交互

```js
// 测试块标题
test.todo('测试组件交互后，组件的界面渲染是否符合预期');

test('测试组件交互click点击一次后，组件包含一个带click-count-label属性的span节点，并且节点内的文本为1', (t) => {
    let wrapper = null
    let divWrapper = null
    wrapper = shallow(
        <Bar />,
    )
    wrapper.find('div').simulate('click')
    const findSpan = wrapper.find('span[click-count-label]')
    if (findSpan.length === 1 && findSpan.text() === '1') {
        t.pass()
    } else {
        t.fail()
    }
    // t.true(wrapper.find('div').contains(spanView))
})

test('测试组件交互文本内容change改变为888，input的value显示888', (t) => {
    let wrapper = null
    wrapper = shallow(
        <Bar />,
    )
    const fakeEvent = {
        target: {
            value: 888
        }
    }
    wrapper.find('input[type="text"]').simulate('change', fakeEvent)
    t.is(wrapper.find('input[type="text"]').props().value, 888)
})
```

## 执行

通过`npm run test`即可执行测试用例

## 自动化

可以选择在编译，提交或部署代码前，通过嵌入自定义脚本的方式在特定的操作前执行测试，测试不通过会抛出异常，并中断当前操作

例如可以在使用[pre-commit][5]，将会在git commit时自动执行`package.json`中scripts脚本里的test命令。

## 参考示例

[react-test-case-demo][4]

[0]: http://airbnb.io/enzyme/
[1]: https://github.com/avajs/ava
[2]: http://facebook.github.io/jest/
[3]: https://github.com/tmpvar/jsdom
[4]: https://github.com/cyqresig/react-test-case-demo
[5]: https://github.com/observing/pre-commit











