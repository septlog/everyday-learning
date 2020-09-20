var div = document.getElementById('ele');
console.log('ownerDocument = ' + div.ownerDocument);
console.log('nodeType = ' + div.nodeType);
console.log('nodeName = ' + div.nodeName);
console.log('tagName = ' + div.tagName);
console.log('nodeValue = ' + div.nodeValue);
console.log('parentNode = ' + div.parentNode);

console.log('=================================');
console.log('id = ' + div.id);
console.log('title = ' + div.title);
console.log('className = ' + div.className);
div.title = 'book';
console.log('new title = ' + div.title);
console.log('onclick = ' + div.onclick);

console.log('=================================');
// get attributes
console.log('attribute id = ' + div.getAttribute('id'));
console.log('attribute class = ' + div.getAttribute('class'));
console.log('attribute title = ' + div.getAttribute('title'));
console.log('attribute lang = ' + div.getAttribute('lang'));
console.log('attribute onclick = ' + div.getAttribute('onclick'));
console.log('=================================');

//set attribute
function setTitle() {
    div.setAttribute('title', 'cat');
    alert('new title = ' + div.title)
}
//get attributes
console.log('attributes = ' + div.attributes);
console.log(div.attributes.getNamedItem('id'));
console.log(div.attributes.getNamedItem('class'));
console.log('removeNamedItem(\'onclick\')');
div.attributes.removeNamedItem('onclick');
console.log(div.attributes[2]);