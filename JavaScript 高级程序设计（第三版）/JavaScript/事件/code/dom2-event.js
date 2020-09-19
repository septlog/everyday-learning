var btn = document.querySelector('#myBtn');
btn.addEventListener('click', function () {
    console.log('hello world click');
}, false);
btn.addEventListener('click', function () {
    console.log(this.id);
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.eventPhase);
    console.log(event.target);
}, false);
