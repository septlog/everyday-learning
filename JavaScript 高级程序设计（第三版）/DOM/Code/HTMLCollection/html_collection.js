var divs = document.getElementsByTagName('div'), i, div;
for (i = 0; i < divs.length; i++) {
    div = document.createElement('div');
    div.innerText = 'this is generated times ' + i;
    document.body.append(div);
}