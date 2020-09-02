# Document 类型

JavaScript 通过 Document 类型表示文档。

在浏览器中，**document 对象**是 HTMLDocument（继承自 Document 类型）的一个实例，表示整个 HTML 页面。

Document 节点特征：

* nodeType = 9
* nodeName = '#document'
* nodeValue = null
* parentNode = null
* ownerDocument = null

> ownerDocument 是每个节点都有的一个属性，指向表示整个文档的文档节点。

## 文档的子节点

Document 节点的子节点可以是 DocumentType、Element、ProcessingInstruction 或 Comment。

* document.documentElement 始终指向 <html\> 元素
* document.body 直接指向 <body\> 元素
* document.doctype 指向 <! DOCTYPE> 标签

## 文档信息

作为 HTMLDocument 的一个实例，**document 对象**还有一些标准的 Document 对象所没有的属性：

* document.title = <title\> 元素中的文本
* document. URL = 地址栏的 URL
* document.domain = 页面的域名
* document.referrer = 链接到当前页面的源地址 URL

domain 可以设置，但不能设置成 URL 中不包含的域。

## 查找元素

* document.getElementById()
* document.getElementsByTagName()

## 特殊集合

## DOM 一致性检测

## 文档写入

* write()
* writeln()
* open()
* close()
