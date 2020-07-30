# 函数

``` js
/**
 * 函数声明
 */
function sum(num1, num2) {
    return num1 + num2;
}
```

``` js
/**
 * 函数表达式
 */
var sum = function(num1, num2) {
    return num1 + num2;
};
```

``` js
var sum = new Function('num1', 'num2', 'return num1 + num2'); //不推荐写法
```

## 没有重载

``` js
function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}

var result = addSomeNumber(100); //300
```

## 函数声明与函数表达式

``` js
/**
 * 函数声明提升，可以正确执行
 */
console.log(plusTen(10));

function plusTen(n) {
    return n + 10;
}
```

``` js
/**
 * 函数表达式没有函数声明提升
 */
console.log(plusTen(10));

plusTen = function(n) {
    return n + 10;
}
```

## 函数可以用作值使用

可以像传递参数一样把一个函数传递给另一个函数，也可以将一个函数作为另一个函数的返回值。

``` js
function createComparisonFunction(propertyName) {

    return function(object1, object2) {
        var value1 = object1[propertyName]; //方括号
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}
```

## 函数内部属性

函数内部有两个特殊的对象 this 和 arguments。arguments 中包含着传入的所有参数，还包含着一个名叫 callee 的属性，指向拥有这个 arguments 对象的函数。

``` js
/**
 * 耦合，如果 factorial 指向另一个函数，返回结果将会发生变化
 */
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
```

**this 指向的是函数的执行环境对象，在网页的全局环境中指向的是 window，在调用函数之前，this 的值并不确定。函数的名字只是一个指针。**

## caller

caller 保存着调用当前函数的函数的引用

``` js
function outer() {
    inner();
}

function inner() {
    console.log(inner.caller); //[Function: outer]
    console.log(arguments.callee.caller); //[Function: outer]，为了解耦
    console.log(arguments.caller); //undefined
}

outer();
```

ECMAScript 中的函数是对象，因此函数拥有属性和方法。每个函数都包含两个属性：length 和 prototype，length表示函数参数的个数，
