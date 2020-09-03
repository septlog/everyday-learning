# Comment 类型

* nodeType = 8
* nodeName = "#comment"
* nodeValue = 注释的值
* parentNode 可能是 Document 或 Element
* 没有子节点

Comment 类型和 Text 类型继承自相同的基类，因此拥有除 splitText() 之外的所有字符串操作方法。

与 Text 一样，可以使用 nodeValue 或 data 来取得注释的内容。

可以使用 document.createComment() 方法来创建注释节点。

浏览器不会识别位于 <\/html> 后面的注释。
