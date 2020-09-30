# JavaFX 的组件化

新建一个 custom.fxml 文件，内容如下：

``` xml
<fx:root type="javafx.scene.layout.VBox" xmlns:fx="http://javafx.com/fxml">
    <TextField fx:id="textField"/>
    <Button text="Click Me" onAction="#doSomething"/>
</fx:root>
```

新建一个 Controller 类，这里命名为 CustomController，内容如下：

``` java
public class Controller extends VBox {
    @FXML
    private TextField textField;

    public Controller() {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("sample.fxml"));
        fxmlLoader.setRoot(this);
        fxmlLoader.setController(this);
        try {
            fxmlLoader.load();
        } catch (IOException e) {
            throw new RuntimeException();
        }
    }

    public String getText() {
        return textProperty().get();
    }

    public void setText(String value) {
        textProperty().set(value);
    }

    public StringProperty textProperty() {
        return textField.textProperty();
    }

    @FXML
    protected void doSomething() {
        System.out.println("The button was clicked!");
    }
}
```

这里，CustomController 继承了 VBox 类（上面 custom.fxml 中 \<fx:root> 标签中定义的类型。并把他自己设置为 root 以及 fxml 文档的 controller。加载 fxml 文档时，将用文档的内容填充 CustomController 实例的内容。

在主类中去掉加载 fxml 的代码，并实例化 CustomController。

``` java
public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        Controller controller = new Controller();

        controller.setText("Hello!");
        primaryStage.setTitle("Hello World");
        primaryStage.setScene(new Scene(controller, 300, 200));
        primaryStage.show();

    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

当创建自定义组件之后，就可以放入其他控件中使用。
