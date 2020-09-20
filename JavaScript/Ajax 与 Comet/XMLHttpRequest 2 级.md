# XMLHttpRequest 2 级

## FormData

XMLHttpRequest 2 级为表单数据的序列化提供了 FormData 类型。

``` js
var data = new FormData();
data.append("name", "Nicholas");
```

也可以向 FormData 构造函数中传入表单元素。

``` js
var data = new FormData(document.forms[0]);
```

使用 FormData 的方便之处体现在不必明确地在 XHR 对象上设置请求头部。XHR 对象能够识别传入的数据类型是 FormData 的实例，并配置适当的头部信息。

## 超时设定

IE8 为 XHR 对象添加了一个 timeout 属性，表示请求在等待响应多少毫秒之后就终止。在给 timeout 设置一个数值后，如果在规定的时间内浏览器还没有接收到响应，那么就会触发 timeout 事件，进而会调用 ontimeout handler。

## overrideMimeType() 方法

Firefox 最早引入了 overrideMimeType 方法，用于重写 XHR 响应的 MIME 类型。
