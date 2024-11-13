// arrays can hold many values under a single name.





let marks_class12 = [24, 3, 2, 4, 2, false, "not define"];
console.log(marks_class12[1]);
console.log(marks_class12[2]);
console.log(marks_class12[3]);
console.log(marks_class12[4]);
console.log(marks_class12[5]);
console.log(marks_class12[6]);
console.log(marks_class12[7]);
console.log(marks_class12[8]);

console.log("length of array is = ", marks_class12.length);

marks_class12[3] = 38; //adding new value in array.

marks_class12[4] = 38;//adding new value in array.
marks_class12[5] = 38;//adding new value in array.

console.log(marks_class12[4]);
console.log(typeof marks_class12);


const obj = {
    arr1: [2, 43, 5, 35, 6, 7, 3, 5, 7],
    arr2: [3, 5, 8, 8,],


};

console.log(obj.arr1);



// array to string 
// ( tostring ) method in Array


let str = [3, 6, 58, 96];

str = Number.toString();
console.log(typeof str);

