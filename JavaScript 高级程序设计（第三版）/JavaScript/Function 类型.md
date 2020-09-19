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

[函数表达式.md](函数表达式.md)

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

``` js
/**
 * 在浏览器中执行
 */
var color = 'red';
var o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}

sayColor() //red
o.sayColor = sayColor;
o.sayColor(); //blue
```

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

ECMAScript 中的函数是对象，因此函数拥有属性和方法。每个函数都包含两个属性：length 和 prototype，length表示函数参数的个数，es5 中，prototype是不可枚举的。

### 每个函数都包含两个非继承而来的方法：apply 和 call

每个函数的 toLocaleString() 和 toString() 方法始终返回函数的代码，valueOf() 方法也只返回函数的代码。

JavaScript 提供了包装类型：Number，String，Boolean。实际上在读取一个基本类型时，后台就会创建一个相应的基本包装类型的对象。

``` js
var s = 'some text';
console.log(s.substr(2));
```

在执行第二行访问s的时候，过程处于一种读取模式，后台会自动完成一下操作：

1. 创建一个 String 类型的实例
2. 在实例上调用指定的方法
3. 销毁这个实例

使用 new 创建的实例，在执行流离开当前作用域之前一直保存在内存中。而自动创建的包装类型对象，只存在于代码的执行瞬间，然后立即被销毁。

Object 构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型

使用 new 调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。

``` js
var value = '25';
var n1 = Number(value); //转型函数
console.log(typeof n1);

var n2 = new Number(value); //构造函数
console.log(typeof n2);
```

## Boolean 类型

布尔表达式中的对象会被转成 true

``` js
var b = new Boolean(false);
console.log(b && true); //true
```

## Number 类型

与 Boolean 类型一样，Number 类型也重写了 valueOf()、toLocaleString()、toString() 方法。可以为 toString() 方法传递一个表示基数的参数，告诉它返回几进制数值的字符串形式。

toFixed() 方法会按照指定的小数位返回数值的字符串表示。toExponential() 返回以指数表示法表示的数值的字符串形式。

``` js
var num = 10;
console.log(num.toFixed(2)); //'10.00'
console.log(num.toExponential(1)); //'1.0e+1'
```

如果想得到表示某个数值的最合适的格式，就应该使用 toPrecision() 方法。

## String 类型

valueOf(), toLocaleString(), toString(), charAt(), charCodeAt(), concat(), slice(), substr(), substring(), indexOf(), lastIndexOf(), trim(), toLowerCase(), toLocaleLowerCase(), toUpperCase(), toLocaleUpperCase()
