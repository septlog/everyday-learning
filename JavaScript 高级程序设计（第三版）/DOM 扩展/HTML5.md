# HTML5

## 与类相关的扩充

### getElementsByClassName()

### classList 属性

classList 属性是新集合类型 DOMTokenList 的实例，能够更加方便的操作元素 className 属性。

* add(value)：添加
* contains(value)：是否存在
* remove(value)：删除
* toggle(value)：如果 classList 中存在 value，删除它；如果列表中没有 value，添加它。

## 焦点管理

document.activeElement 属性会始终引用 DOM 中当前获得了焦点的元素。

元素获得焦点的方式有页面加载，用户输入（通常是通过 Tab 键）和在代码中调用 focus() 方法。

文档加载期间，document.activeElement = null，文档刚刚加载完成时，document.activeElement 保存的是 document.body 的引用。

document.hasFocus() 方法用于确定文档是否获得了焦点。用于提高 Web 的无障碍性。

## HTMLDocument 的变化

### readyState 属性

Document 的 readyState 属性有两个可能的值

* loading 正在加载文档
* complete 已经加载完文档

### 兼容模式

标准模式下，document.compatMode = "CSS1Compat"
混杂模式下，document.compatMode = "BackCompat"

### head 属性

引用文档的 <head\> 元素

## 字符集属性

默认情况下，document.charset = "UTF-16"，可以通过<meta\> 元素，响应头部或直接设置 charset 属性修改这个值。另一个属性是 defaultCharset，表示根据操作系统和浏览器的设置，文档默认的字符集，

## 自定义数据属性

HTML5 规定可以为元素添加非标准的属性，但要添加 data- 前缀，目的是为元素提供与渲染无关的信息，或者提供语义信息。

添加自定义属性之后，可以通过元素的 dataset 属性来访问自定义属性的值。dataset 属性的值是 DOMStringMap 的一个实例，是一个 键值对。

## 插入标记

使插入 HTML 字符串更简单、速度更快

### innerHTML 属性

使用 innerHTML 也有限制，在大多数浏览器中插入 <script\> 元素并不会执行其中的脚本。

大多数浏览器都支持以直观的方式通过 innerHTML 插入 \<style> 元素。

并不是所有元素都支持 innerHTML。

### outerHTML 属性

返回调用的元素以及他的所有子节点的 HTML 标签。

### insertAdjacentHTML() 方法

接受两个参数，插入位置以及要插入的 HTML 文本，第一个参数必须是下列值之一：

* beforeBegin：在当前元素之前插入一个紧邻的 sibling
* afterBegin：在当前元素之下或在第一个子元素之前插入 child
* beforeend：在当前元素之下或在最后一个子元素之后插入 child
* afterend：在当前元素之后插入一个紧邻的 sibling

### 内存与性能问题

控制使用 innerHTML，outerHTML 的次数

## scrollToView() 方法

如果传入 true 为参数或不传参，将窗口滚动到顶部与元素平齐，如果传入 false，尽可能将元素全部出现在窗口中，不过顶部不一定平齐。
