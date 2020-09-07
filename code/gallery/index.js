function show(pic) {
    var source = pic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    var text = pic.getAttribute('title');
    var des = document.querySelector('#description');
    des.firstChild.nodeValue = text;
}

var as = document.getElementsByTagName('a');
for (var i = 0; i < as.length; i++) {
    as[i].addEventListener('click', function (event) {
        show(this);
        event.preventDefault();
    }, false);
}

