let arr = [2, 6, 7, 4, 3, 2, 57,];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * arr[i]);
// }


// for each loop

// arr.forEach((Element) => {
// console.log(Element*Element);
// })



// Array.from use an example

let Name = "Satender";
let arconvert = Array.from(Name);
console.log(arconvert);

// for of loop
// inportant

for (let i of arr) {
    console.log(i);
}


// for in loop 

for (let i in arr) {
    console.log(arr[i]);
}