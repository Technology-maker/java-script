let Name;


// this will work only one time in 5 second

let a = setTimeout(function () {
    Name = prompt("enter yout name !");
    document.write(Name)
}, 5000);
clearTimeout(a);
console.log(a);



const sum = (a, b) => {
    console.log("set time is working. " + (a + b));
}

// to setTimeout

setTimeout(sum, 6000, 10, 30);




//    This will work in every 4 second it work multiple times

let setid = setInterval(function () {
    alert("hello");
}, 4000);


// to clearInterval

clearInterval(setid);






















