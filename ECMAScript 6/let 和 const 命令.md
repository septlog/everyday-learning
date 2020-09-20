# let 和 const 命令

## 基本用法

let 声明的变量只在其所在的代码块中有效。

for 循环的计数器，就很适合使用 let 变量。

for 循环还有一个特别之处，就是设置循环变量的部分是一个父作用域，而循环体内部是一个单独的子作用域。

## let 不存在变量提升

var 关键词会发生变量提升，即变量可以在声明之前使用，值为 undefined。

let 命令声明的变量一定要在声明后使用。

## 暂时性死区

``` js
if (true) {

    var tree = 'seed';
    if (true) {
        tree = 'seedling'; // ReferenceError: Cannot access 'tree' before initialization
        let tree;
        tree = 'small tree';
    }
}
console.log(tree); // seed
```

暂时性死区意味着 typeof 不是一个百分百安全的操作。

## 不允许重复声明

因此，不能在函数内部重新声明参数。
