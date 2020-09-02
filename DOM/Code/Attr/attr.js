var ele = document.getElementById('ele');
var attr = document.createAttribute('align');
attr.value = 'left';
ele.setAttributeNode(attr);

console.log(ele.getAttribute('align'));// 建议
console.log(ele.attributes['align'].value);// 不建议直接访问特性节点
console.log(ele.getAttributeNode('align'.value));// 不建议直接访问特性节点