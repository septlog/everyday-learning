# XMLHttpRequest 对象

``` js
var xhr = new XMLHttpRequest();
```

## XHR 的用法

在使用 XHR 对象时，要调用的第一个方法是 open()，他接收 3 个函数：要发送的请求的类型（“get”、“post” 等）、请求的 URL 和表示是否异步发送的布尔值。

``` js
xhr.open("get", "example.php", false);
```

以上代码：需要注意两点：一是 URL 相对于执行代码的当前页面（当然也可以使用绝对路径）；二是调用 open() 函数并不会真正发送请求，而只是启动一个请求以备发送。

> 只能向同一个域中使用相同端口和协议的 URL 发送请求，如果 URL 与启动请求的页面有任何差别，都会引发安全错误。
