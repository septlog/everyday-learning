# NodeList

NodeList，NamedNodeMap，HTMLCollection 这三个集合都是**动态的**

每当文档结构发生变化时，他们都会得到更新。

应该减少 NodeList 的访问次数，可以考虑将 NodeList 取得的值缓存起来。
