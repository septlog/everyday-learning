var myDiv = document.getElementById('myDiv');
var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
console.log(computedStyle.backgroundColor);
console.log(computedStyle.width);
console.log(computedStyle.height);
console.log(computedStyle.border);