// chapter 5

// Q1

// let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
// let a = prompt("enter a number. ");
// a = Number.parseInt(a);
// arr1.push(a);
// console.log(arr1);







// Q2

// let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
// let a;
// do {
//     a = prompt("enter a number. ");
//     a = Number.parseInt(a);
//     arr2.push(a);
// } while (a != 0);







// Q3

// let devidefun = (a) => {
//     return a % 10 == 0;
// }
// let arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 340, 3240, 230];
// let solution = arr3.filter(devidefun);
// console.log(solution);







// Q4 

// let arr4 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 340, 3240, 230];
// let store = arr4.map((value) => {
//     return value * value;
// })
// console.log(store);
// console.log(arr4);







// Q5


let factfun = function fact(x) {
    return x * x;
}

let arr5 = [2, 4, 6, 8, 4];
let factorial = arr5.reduce(factfun);


console.log(factorial);
console.log(arr5);