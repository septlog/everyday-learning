# apply 和 call 方法

每个函数都包含两个非继承的方法：apply() 和 call()。两个方法的用途都是在特定的作用域调用函数。

## apply 用法

``` js
function sum(num1, num2) {
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10)); //20
console.log(callSum2(10, 10)); //20
```

## call 用法

``` js
function sum(num1, num2) {
    return num1 + num2;
}

function callSum(num1, num2) {
    return sum.call(this, num1, num2);
}

console.log(callSum(10, 10)); //20
```

## apply 和 call 的强大的地方是它可以扩充函数赖以运行的作用域

``` js
global.color = 'red';
var o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}

sayColor(); //red，全局作用域
sayColor(this); //red，全局作用域
sayColor(global); //red，全局作用域
sayColor.call(o); //blue，函数内的 this 对象指向 o
```

## 使用 apply 和 call 来扩充作用域的好处

使对象与方法不需要有任何耦合关系。

## es5 bind 方法

这个方法会创建一个函数的实例，其 this 值会被绑定到传给 bind 函数的值。

``` js
global.color = 'red';
var o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}
var objSayColor = sayColor.bind(o);
objSayColor(); //blue
```
