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

要发送特定的请求，必须像下面这样调用 send() 方法。

``` js
xhr.open("get", "example.txt", false);
xhr.open(null);
```

这里的 send() 方法接收一个参数，即要作为请求主体发送的数据。如果不需要通过请求主体发送数据，则必须传入 null，因为这个参数对有些浏览器来说是**必须**的。调用 send() 之后，请求就会被分派到服务器。

由于这次请求是同步的，JavaScript 代码会等到服务器响应之后再继续执行。。在收到响应之后，响应的数据会自动填充 XHR 对象的属性，相关的属性简介如下。

* responseText
* responseXML
* status
* statusText

对于非 XML 数据而言，responseText 属性值将为 null。

当发送异步请求的时候，可以检测 XHR 对象的 readyState 属性，该属性表示请求 / 响应过程的当前活动阶段。

* 0：未初始化，尚未调用 open() 方法。
* 1：启动，已经调用 open() 方法，但尚未调用 send() 方法。
* 2：发送，已经调用 send() 方法，但尚未接收到响应。
* 3：接收，已经接收到部分数据。
* 4：完成，已经接收到全部响应数据，而且已经可以在客户端使用了。

只要 readyState 属性的值从一个值变成另一个值，就会触发一次 readystatechange 事件。

在接收到响应之前可以调用 abort() 方法来取消异步请求。

## HTTP 头部信息

XHR 对象提供了操作两种头部（请求头部和响应头部）的方法。

默认情况下，在发送 XHR 对象的同时，还会发送下列同步信息。

* Accept：浏览器能够处理的内容类型
* Accept-Charset：浏览器能显示的字符集
* Accept-Encoding：浏览器能够处理的压缩编码
* Accept-Language：浏览器当前设置的语言
* Connetion：浏览器与服务器之间连接的类型。
* Cookie：当前页面设置的任何 Cookie
* Host：发出请求的页面所在的域
* Referer：发出请求的页面 URI。（HTTP 规范将这个头部字段拼写错了，正确的拼法应该是 referrer，但是将错就错了）。
* User-Agent：浏览器的用户代理字符串。

使用 setRequestHeader() 方法可以设置自定义的请求头部信息。必须在调用 open() 方法之后且调用 send() 方法之前调用 setRequestHeader()。

有的浏览器允许开发人员重写默认的头部信息。

getResponseHeader() 和 getAllResponseHeader() 方法。

## GET 请求

对于 xhr 而言，位于传入 open() 方法的 URL 末尾的查询字符串必须经过正确的编码才行。

查询字符串中的每个参数的名称和值都必须使用 encodingURIComponent() 进行编码。

## POST 请求

通常用于向服务器发送应该被保存的数据。POST 请求应该把数据作为请求的主体提交，而 GET 请求传统上并不是这样。

默认情况下，服务器对 POST 请求和提交 Web 表单的请求并不会一视同仁。但是可以使用 XHR 来模仿表单提交：将 Content-Type 头部信息设置为 application/x-www-form-urlencoded，其次是以适当的格式创建一个字符串。
