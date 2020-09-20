var btn = document.querySelector('#myBtn');
btn.onclick = function () {
    console.log('Clicked');
    console.log(this.id);
}