# 使用 JavaFX 属性和绑定

## 概述

许多年来，Java 一直使用 JavaBeans 组件架构来表示对象的属性，JavaFX 将使用这个已经成熟的模式，并且包含了扩展和改进。

JavaFX 属性通常与绑定一起使用，当对象参与绑定时，对一个对象所做的更改将自动反应到另一个对象中。

这在各种应用程序中都很有用。例如，绑定可以在票据发票跟踪程序中使用，在该程序中，当单个票据发生更改时，将自动更新所有票据的总数。或者，绑定可以在图形用户界面(GUI)中使用，自动使其显示与应用程序的底层数据保持同步。

可以绑定一个或多个依赖项。binding 可以观察其依赖项，如果依赖项更改，自身也会相应更改。

## 理解属性（Properties）

## 使用高级绑定 API

高级API是在您自己的应用程序中开始使用绑定的最快速和最简单的方法。它由两部分组成: Fluent API 和绑定类。Fluent API 公开各种依赖项对象上的方法，而Bindings类提供静态工厂方法。

考虑一个简单的例子，有两个整数被绑定，它们的值总是被加在一起。

``` java
IntegerProperty num1 = new SimpleIntegerProperty(1);
IntegerProperty num2 = new SimpleIntegerPropert(2);
NumberBinding sum = num1.add(num2);
System.out.println(sum.getValue());
num1.set(2);
System.out.println(sum.getValue());
```

``` java
IntegerProperty num1 = new SimpleIntegerProperty(1);
IntegerProperty num2 = new SimpleIntegerProperty(2);
NumberBinding sum = Bindings.add(num1,num2);
System.out.println(sum.getValue());
num1.setValue(2);
System.err.println(sum.getValue());
```

## 探索 Observable、ObservableValue、InvalidationListener 和 ChangeListener

绑定 API 定义了一组接口，这些接口使对象能够在值更改或无效时得到通知。Observable 和 ObservableValue 接口触发更改通知，而InvalidationListener 和 ChangeListener 接口接收它们。两者之间的区别在于，ObservableValue 会包装一个值并将其更改发送到任何已注册的 ChangeListener，而Observable（未包装一个值）会将其更改发送到任何已注册的 InvalidationListener。

JavaFX 绑定和属性实现均支持惰性求值，这意味着发生更改时，不会立即重新计算该值。如果随后请求该值，则会在以后进行重新计算。

## 使用低级绑定 API

使用低级绑定 API 通常需要重写绑定类。
