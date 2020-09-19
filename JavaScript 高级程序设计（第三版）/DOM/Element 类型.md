# Element 类型

* nodeType = 1
* nodeName = 元素标签名
* nodeValue = null
* parentNode 可能是 Document 或 Element

在 HTML 中，标签名始终都以全部大写表示。

## HTML 元素

* id
* title
* lang（元素内容的语言代码，很少使用）
* dir（语言的方向，很少使用）
* className

## 取得特性（Attribute）

* getAttribute()

getAttribute() 方法也可以取得自定义特性（即标准 HTML 语言中没有的特性）的值。

特性的名称不区分大小写，因此：

``` js
getAttribute('id') === getAttribute('ID') //true
```

根据 HTML5 规范，自定义特性应该加上 data- 前缀以便验证。

任何元素的 Attribute，可以通过 DOM 元素本身的属性来访问：

``` js
div.getAttribute('id')
div.id
```

## 设置属性

* setAttribute()
* 直接给属性赋值

## attributes 属性

Element 属性是使用 attributes 属性的唯一的一个 DOM 节点类型。

## 创建元素

document.createElement() 方法，在使用该方法创建新元素的同时，也为新元素设置了 ownerDocument 属性。

要把新元素添加到文档树中，可以使用 appendChild()、insertBefore() 或 replaceChild() 方法。

## 元素的子节点
