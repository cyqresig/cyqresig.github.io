---
layout:     post
title:      "����ܲ�����Ҫʹ��jQuery��"
subtitle:   " \"ʹ��ԭ��api����jQuery\""
author:     "�������"
header-img: "img/post-bg-2016-03-08.jpg"
tags:
    - javascript���
---

> ������IE10+�������

## ����ܲ�����Ҫʹ��jQuery��

�ִ������ԭ�� API �Ѿ�Խ��Խ�����ˡ�
�ںܶ�����£������Ѿ���������jQuery������DOM�����¼���
ͬʱ���� React��Angular �ȿ�ܵ����У�ֱ�Ӳ��� DOM �����Ǻõ�ģʽ��jQuery ʹ�ó��������١�
�����ܽ��˴󲿷� jQuery API ����ķ�����֧�� IE10+ �����������

## Ŀ¼

1. [Query Selector](#query-selector)
1. [CSS & Style](#css--style)
1. [DOM Manipulation](#dom-manipulation)
1. [Ajax](#ajax)
1. [Events](#events)
1. [Utilities](#utilities)
1. [Alternatives](#alternatives)
1. [Browser Support](#browser-support)

## Query Selector

���õ� class��id������ ѡ����������ʹ�� `document.querySelector` �� `document.querySelectorAll` �����������
* `document.querySelector` ���ص�һ��ƥ��� Element
* `document.querySelectorAll` ��������ƥ��� Element ��ɵ� NodeList��������ͨ�� `[].slice.call()` ����ת�� Array
* ���ƥ�䲻���κ� Element��jQuery ���ؿ����� `[]`���� `document.querySelector` ���� `null`��ע���ָ���쳣�����Ҳ���ʱ��Ҳ����ʹ�� `||` ����Ĭ�ϵ�ֵ���� `document.querySelectorAll(selector) || []`

> ע�⣺`document.querySelector` �� `document.querySelectorAll` ���ܺ�**��**�������������ܣ�����ʹ�� `document.getElementById`��`document.getElementsByClassName` �� `document.getElementsByTagName`��

- [1.0](#1.0) <a name='1.0'></a> Query by selector

  ```js
  // jQuery
  $('selector');

  // Native
  document.querySelectorAll('selector');
  ```

- [1.1](#1.1) <a name='1.1'></a> Query by class

  ```js
  // jQuery
  $('.css');

  // Native
  document.querySelectorAll('.css');

  // or
  document.getElementsByClassName('css');
  ```

- [1.2](#1.2) <a name='1.2'></a> Query by id

  ```js
  // jQuery
  $('#id');

  // Native
  document.querySelector('#id');

  // or
  document.getElementById('id');
  ```

- [1.3](#1.3) <a name='1.3'></a> Query by attribute

  ```js
  // jQuery
  $('a[target=_blank]');

  // Native
  document.querySelectorAll('a[target=_blank]');
  ```

- [1.4](#1.4) <a name='1.4'></a> Find sth.

  + Find nodes

    ```js
    // jQuery
    $el.find('li');

    // Native
    el.querySelectorAll('li');
    ```

  + Find body

    ```js
    // jQuery
    $('body');

    // Native
    document.body;
    ```

  + Find Attribute

    ```js
    // jQuery
    $el.attr('foo');

    // Native
    e.getAttribute('foo');
    ```

  + Find data attribute

    ```js
    // jQuery
    $el.data('foo');

    // Native
    // using getAttribute
    el.getAttribute('data-foo');
    // you can also use `dataset` if only need to support IE 11+
    el.dataset['foo'];
    ```

- [1.5](#1.5) <a name='1.5'></a> Sibling/Previous/Next Elements

  + Sibling elements

    ```js
    // jQuery
    $el.siblings();

    // Native
    [].filter.call(el.parentNode.children, function(child) {
      return child !== el;
    });
    ```

  + Previous elements

    ```js
    // jQuery
    $el.prev();

    // Native
    el.previousElementSibling;

    ```

  + Next elements

    ```js
    // next
    $el.next();
    el.nextElementSibling;
    ```

- [1.6](#1.6) <a name='1.6'></a> Closest

  Closest ���ƥ��ѡ�����ĵ�һ������Ԫ�أ��ӵ�ǰԪ�ؿ�ʼ�� DOM �����ϡ�

  ```js
  // jQuery
  $el.closest(queryString);

  // Native
  function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      } else {
        el = el.parentElement;
      }
    }
    return null;
  }
  ```

- [1.7](#1.7) <a name='1.7'></a> Parents Until

  ��ȡ��ǰÿһ��ƥ��Ԫ�ؼ������ȣ�������ƥ��Ԫ�صı���

  ```js
  // jQuery
  $el.parentsUntil(selector, filter);

  // Native
  function parentsUntil(el, selector, filter) {
    const result = [];
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    // match start from parent
    el = el.parentElement;
    while (el && !matchesSelector.call(el, selector)) {
      if (!filter) {
        result.push(el);
      } else {
        if (matchesSelector.call(el, filter)) {
          result.push(el);
        }
      }
      el = el.parentElement;
    }
    return result;
  }
  ```

- [1.8](#1.8) <a name='1.8'></a> Form

  + Input/Textarea

    ```js
    // jQuery
    $('#my-input').val();

    // Native
    document.querySelector('#my-input').value;
    ```

  + Get index of e.currentTarget between `.radio`

    ```js
    // jQuery
    $(e.currentTarget).index('.radio');

    // Native
    [].indexOf.call(document.querySelectorAll('.radio'), e.currentTarget);
    ```

- [1.9](#1.9) <a name='1.9'></a> Iframe Contents

  jQuery ����� iframe `contents()` ���ص��� iframe �ڵ� `document`

  + Iframe contents

    ```js
    // jQuery
    $iframe.contents();

    // Native
    iframe.contentDocument;
    ```

  + Iframe Query

    ```js
    // jQuery
    $iframe.contents().find('.css');

    // Native
    iframe.contentDocument.querySelectorAll('.css');
    ```

**[? �ص�����](#Ŀ¼)**

## CSS & Style

- [2.1](#2.1) <a name='2.1'></a> CSS

  + Get style

    ```js
    // jQuery
    $el.css("color");

    // Native
    // ע�⣺�˴�Ϊ�˽���� style ֵΪ auto ʱ������ auto ������
    const win = el.ownerDocument.defaultView;
    // null ����˼�ǲ�����α��Ԫ��
    win.getComputedStyle(el, null).color;
    ```

  + Set style

    ```js
    // jQuery
    $el.css({ color: "#ff0011" });

    // Native
    el.style.color = '#ff0011';
    ```

  + Get/Set Styles

    ע�⣬�����һ�����ö�� style�����Բο� oui-dom-utils �� [setStyles](https://github.com/oneuijs/oui-dom-utils/blob/master/src/index.js#L194) ����

  + Add class

    ```js
    // jQuery
    $el.addClass(className);

    // Native
    el.classList.add(className);
    ```

  + Remove class

    ```js
    // jQuery
    $el.removeClass(className);

    // Native
    el.classList.remove(className);
    ```

  + has class

    ```js
    // jQuery
    $el.hasClass(className);

    // Native
    el.classList.contains(className);
    ```

  + Toggle class

    ```js
    // jQuery
    $el.toggleClass(className);

    // Native
    el.classList.toggle(className);
    ```

- [2.2](#2.2) <a name='2.2'></a> Width & Height

  Width �� Height ��ȡ������ͬ�������� Height Ϊ����

  + Window height

    ```js
    // jQuery
    $(window).height();

    // Native
    // ���� scrollbar���� jQuery ��Ϊһ��
    window.document.documentElement.clientHeight;
    // �� scrollbar
    window.innerHeight;
    ```

  + Document height

    ```js
    // jQuery
    $(document).height();

    // Native
    document.documentElement.scrollHeight;
    ```

  + Element height

    ```js
    // jQuery
    $el.height();

    // Native
    // �� jQuery һ�£�һֱΪ content ����ĸ߶ȣ�
    function getHeight(el) {
      const styles = this.getComputedStyles(el);
      const height = el.offsetHeight;
      const borderTopWidth = parseFloat(styles.borderTopWidth);
      const borderBottomWidth = parseFloat(styles.borderBottomWidth);
      const paddingTop = parseFloat(styles.paddingTop);
      const paddingBottom = parseFloat(styles.paddingBottom);
      return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
    }
    // ��ȷ��������border-box ʱΪ height ֵ��content-box ʱΪ height + padding + border ֵ��
    el.clientHeight;
    // ��ȷ��С����border-box ʱΪ height ֵ��content-box ʱΪ height + padding + border ֵ��
    el.getBoundingClientRect().height;
    ```

  + Iframe height

    $iframe .contents() �������� iframe �� contentDocument

    ```js
    // jQuery
    $('iframe').contents().height();

    // Native
    iframe.contentDocument.documentElement.scrollHeight;
    ```

- [2.3](#2.3) <a name='2.3'></a> Position & Offset

  + Position

    ```js
    // jQuery
    $el.position();

    // Native
    { left: el.offsetLeft, top: el.offsetTop }
    ```

  + Offset

    ```js
    // jQuery
    $el.offset();

    // Native
    function getOffset (el) {
      const box = el.getBoundingClientRect();

      return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
      }
    }
    ```

- [2.4](#2.4) <a name='2.4'></a> Scroll Top

  ```js
  // jQuery
  $(window).scrollTop();

  // Native
  (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  ```

**[? �ص�����](#Ŀ¼)**

## DOM Manipulation

- [3.1](#3.1) <a name='3.1'></a> Remove
  ```js
  // jQuery
  $el.remove();

  // Native
  el.parentNode.removeChild(el);
  ```

- [3.2](#3.2) <a name='3.2'></a> Text

  + Get text

    ```js
    // jQuery
    $el.text();

    // Native
    el.textContent;
    ```

  + Set text

    ```js
    // jQuery
    $el.text(string);

    // Native
    el.textContent = string;
    ```

- [3.3](#3.3) <a name='3.3'></a> HTML

  + Get HTML

    ```js
    // jQuery
    $el.html();

    // Native
    el.innerHTML;
    ```

  + Set HTML

    ```js
    // jQuery
    $el.html(htmlString);

    // Native
    el.innerHTML = htmlString;
    ```

- [3.4](#3.4) <a name='3.4'></a> Append

  Append ���뵽�ӽڵ��ĩβ

  ```js
  // jQuery
  $el.append("<div id='container'>hello</div>");

  // Native
  let newEl = document.createElement('div');
  newEl.setAttribute('id', 'container');
  newEl.innerHTML = 'hello';
  el.appendChild(newEl);
  ```

- [3.5](#3.5) <a name='3.5'></a> Prepend

  ```js
  // jQuery
  $el.prepend("<div id='container'>hello</div>");

  // Native
  let newEl = document.createElement('div');
  newEl.setAttribute('id', 'container');
  newEl.innerHTML = 'hello';
  el.insertBefore(newEl, el.firstChild);
  ```

- [3.6](#3.6) <a name='3.6'></a> insertBefore

  ��ѡ��Ԫ��ǰ�����½ڵ�

  ```js
  // jQuery
  $newEl.insertBefore(queryString);

  // Native
  const target = document.querySelector(queryString);
  target.parentNode.insertBefore(newEl, target);
  ```

- [3.7](#3.7) <a name='3.7'></a> insertAfter

  ��ѡ��Ԫ�غ�����½ڵ�

  ```js
  // jQuery
  $newEl.insertAfter(queryString);

  // Native
  const target = document.querySelector(queryString);
  target.parentNode.insertBefore(newEl, target.nextSibling);
  ```

**[? �ص�����](#Ŀ¼)**

## Ajax

�� [fetch](https://github.com/camsong/fetch-ie8) �� [fetch-jsonp](https://github.com/camsong/fetch-jsonp) ���

**[? �ص�����](#Ŀ¼)**

## Events

��������������ռ���¼��������ӵ� https://github.com/oneuijs/oui-dom-events

- [5.1](#5.1) <a name='5.1'></a> Bind an event with on

  ```js
  // jQuery
  $el.on(eventName, eventHandler);

  // Native
  el.addEventListener(eventName, eventHandler);
  ```

- [5.2](#5.2) <a name='5.2'></a> Unbind an event with off

  ```js
  // jQuery
  $el.off(eventName, eventHandler);

  // Native
  el.removeEventListener(eventName, eventHandler);
  ```

- [5.3](#5.3) <a name='5.3'></a> Trigger

  ```js
  // jQuery
  $(el).trigger('custom-event', {key1: 'data'});

  // Native
  if (window.CustomEvent) {
    const event = new CustomEvent('custom-event', {detail: {key1: 'data'}});
  } else {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent('custom-event', true, true, {key1: 'data'});
  }

  el.dispatchEvent(event);
  ```

**[? �ص�����](#Ŀ¼)**

## Utilities

- [6.1](#6.1) <a name='6.1'></a> isArray

  ```js
  // jQuery
  $.isArray(range);

  // Native
  Array.isArray(range);
  ```

- [6.2](#6.2) <a name='6.2'></a> Trim

  ```js
  // jQuery
  $.trim(string);

  // Native
  string.trim();
  ```

- [6.3](#6.3) <a name='6.3'></a> Object Assign

  �̳У�ʹ�� object.assign polyfill https://github.com/ljharb/object.assign

  ```js
  // jQuery
  $.extend({}, defaultOpts, opts);

  // Native
  Object.assign({}, defaultOpts, opts);
  ```

- [6.4](#6.4) <a name='6.4'></a> Contains

  ```js
  // jQuery
  $.contains(el, child);

  // Native
  el !== child && el.contains(child);
  ```

**[? �ص�����](#Ŀ¼)**

## Alternatives

* [����ܲ���Ҫ jQuery (You Might Not Need jQuery)](http://youmightnotneedjquery.com/) - ���ʹ��ԭ�� JavaScript ʵ��ͨ���¼���Ԫ�أ�ajax ���÷���
* [npm-dom](http://github.com/npm-dom) �Լ� [webmodules](http://github.com/webmodules) - �� NPM ���ṩ���� DOM ģ�����֯

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ? | Latest ? | 10+ ? | Latest ? | 6.1+ ? |

# License

MIT
