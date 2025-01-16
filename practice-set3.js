const marks = {
    satender: 23,
    sahil: 35,
    mohit: 67,
    rohan: 46,
    rohit: 68,
    aarav: 46,
    himesh: 38
}

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("marks of ", Object.keys(marks)[i], " is ", marks[Object.keys(marks)[i]]);
// }




// same work for loop 
// for (let key in marks) {
//     console.log("marks of " , key , " is ", marks[key]);
// }







function averagefun(a, b, c, d) {
    return (a + b + c + d) / 4;

}
let a, b, c, d;

a = Number(prompt("enter a "));
b = Number(prompt("enter b "));
c = Number(prompt("enter c "));
d = Number(prompt("enter d "));

let result = averagefun(a, b, c, d);


// const findmean = (a, b, c, d, e) => {
//     return (a + b + c + d + e) / 5;
// }


console.log(result);


