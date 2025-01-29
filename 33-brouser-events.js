// events lisners 

let x = ('click', function (event) {
    console.log(event.target);
    console.log(event.type ,event.clintX,event.clintY);
    alert("hello world 1 !");
})

let y = ('click', function (e) {
    alert("hello world 2 !");
})

let store = prompt("enter the number. ");

btn.addEventListener('click', x);
btn.addEventListener('click', y);


if (store == '2') {
    removeEventListener('click', x);
};