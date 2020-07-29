# Array 类型

## JavaScript 的数组大小是可以动态调整的

## 创建数组的方式有两种

### Array 构造函数

#### 可以省略 new 关键字

``` js
var colors = new Array();
var colors = new Array(20);
var colors = Array('red', 'blue', 'green');
```

### 数组字面量

``` js
var colors = ['red', 'blue', 'green'];
var names = [];
var values = [1, 2, ]; //不推荐写法，数组的大小可能是 2 或 3
```

## 数组的 length 属性不是只读的

``` js
var colors = ['red', 'blue', 'green'];
colors.length = 2;
console.log(colors[2]); //undefined
colors.length = 4;
console.log(colors[3]); //undefined
```

### 利用这个属性，可以方便的在数组末尾添加元素

``` js
var colors = ['red', 'blue', 'green'];
colors[colors.length] = 'black'; //['red', 'blue', 'green', 'black']
colors[99] = 'brown';
console.log(colors.length); //100，中间全部是undefined
```

### Array.isArray 方法

Array.isArray() 用于确定传递的值是否是一个 Array。

## toString, toLocaleString, valueOf join 方法

## 栈方法和队列方法

``` js
var colors = Array();
color.push('red', 'green', 'blue');
color.pop(); //blue
color.unshift('purple', 'pink'); //[purple, pink, red, green]
color.shift(); //[pink, red, green]
```

## 重排序方法

### reverse 方法

用于反转数组

``` js
var values = [15, 10, 5, 1, 0];
values.reverse();
console.log(values); //[ 0, 1, 5, 10, 15 ]
```

### sort 方法

sort 方法会调用每个元素的 toString() 方法，因此尽管数组中含有的是数值，sort() 方法比较的也是字符串。

``` js
var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values); //[ 0, 1, 10, 15, 5 ]
```

sort() 方法可以传入一个比较函数

``` js
var values = [0, 1, 5, 10, 15];

function compare(value1, value2) {
    return value2 - value1;
}
values.sort(compare);
console.log(values); //[ 15, 10, 5, 1, 0 ]
```

## concat

## slice

## splice

## indexOf

## lastIndexOf

## 迭代方法

### every

数组中所有元素满足返回 true，反之 false

``` js
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every(function(item, index, array) {
    return (item > 2);
});
console.log(everyResult); //false
```

### some

数组中只要有一个元素满足返回 true，反之 false

``` js
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var someResult = numbers.some(function(item) {
    return (item > 2);
});
console.log(someResult); //true
```

### filter

返回满足条件的子项

``` js
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var filterResult = numbers.filter(function(item) {
    return item > 2;
})

console.log(filterResult); //[ 3, 4, 5, 4, 3 ]
```

### map

对每个元素执行操作

``` js
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var mapResult = numbers.map(function(item) {
    return item * 100;
});
console.log(mapResult); //[ 100, 200, 300, 400, 500, 400, 300, 200, 100 ]
```

## reduce 和 reduceRight
