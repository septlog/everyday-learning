# Text 类型

* nodeType = 3
* nodeName = "#text"
* nodeValue = data = 节点包含的文本
* parentNode 是一个元素节点（Element）

## 创建文本节点

``` js
document.createTextNode('Some Text');
```

参数中的文本将按照 HTML 或 XML 的格式进行编码。

在创建新文本的同时，也会为其设置 ownerDocument 属性。

一个元素节点可以有多个文本节点，多个文本节点的文字会连起来显示，中间不会有空格。

## 规范化文本节点

Node 类型中有一个 normalize() 方法，能够将相邻文本节点合并成一个节点。

## 分割文本节点

Text 类型提供了一个与 normalize() 方法相反的方法：spiltText()。原来的文本节点将包含从开始到指定位置之前的内容，新文本节点将包含剩下的文本。方法返回新的文本节点。
