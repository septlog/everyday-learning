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
