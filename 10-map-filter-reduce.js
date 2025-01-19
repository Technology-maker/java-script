// map in array


// let array = [1, 2, 3, 4, 5];
// let arr = array.map((value, index, array) => {   // map is used to create the new  array
//     console.log(value, index, array);
// })


// filter()     in array



// let array2 = [1, 2, 3, 4, 5, 2, 5, 75, 35, 88, 43, 123];
// let store = array2.filter((a => {
//     return a < 10;
// }))
// console.log(store);




// reduce()    in array

let reduce_fun = (a, b) => {
    return a + b;
};

let arr3 = [2, 4, 5, 7, 9, 9, 7, 5];
let store2 = arr3.reduce(reduce_fun);
console.log(store2);










