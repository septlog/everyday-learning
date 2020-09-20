// 添加
var element = document.createElement('div');
var text = document.createTextNode('This is Text');
element.appendChild(text);
document.body.appendChild(element);

// 合并
var anotext = document.createTextNode('This is another Text');
element.appendChild(anotext);
console.log(element.childNodes.length);
element.normalize();
console.log(element.childNodes.length);

// 分割
var split = element.firstChild.splitText(12);
// console.log(split.data);
console.log(split);
console.log(element.firstChild);