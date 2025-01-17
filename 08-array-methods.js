// 1 integer value convert into a string 

let arr = [36, 75, 433, 5, 776, 33, "satender yadav", "hii"];

let b = arr.toString();

console.log(b, typeof b);



//  2 it is a join method 

let num = [34, 35, 33, 24, 53];

// output = 34+35+33+24+53

let jon = num.join("-");
console.log(jon);
console.log(jon, typeof jon);  // output = 34+35+33+24+53


//
//
//
//
//
//
//
//
//
//
//
//
//
//

//    3 pop()               (it is update the orignal array).

let popelement = [4, 6, 4, 3, 2, 4, 5, 6, 5, 2, 3, 5,]
popelement.pop();
console.log(popelement);

output = [4, 6, 4, 3, 2, 4, 5, 6, 5, 2, 3, 5,]   // last element missing


//
//
//
//
//
//
//
//
//
//
//
//










// 4 push()                  (push) is used to add the element in an array in last.

let elements = [3, 5, 776, 5, 5, 455, 56, 52];
console.log(elements,);
elements.push(49);
console.log(elements,);


// 5 shift()

let sift = elements.shift();          //   remove first element and return it .
console.log(sift, elements);


// 6 unshift()


let unsift = elements.unshift(45); //             unshift return new array length
console.log(unsift, elements);


// 7 delete();


let d = [34, 3, 5, 3];
delete d[2];                   //   delete the array element from array
console.log(d);



// 8 concat();
let e = [1, 2, 3, 4, 5, 6];
let f = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let g = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let newarray = e.concat(f);
let comboarray = e.concat(f, g)   // concation on an array    ( means combining the array OR merging the array )  they don not change (e,f) arrays.

console.log(newarray)
console.log(comboarray);


// 9 sort 

function compare(a, b) {
    return a - b
}
let unorderarray = [27, 8, 7, 6, 4, 34, 6, 77, 54, 34, 556, 7, 8, 6, 677, 653, 23, 5564];

let sortarr = unorderarray.sort(compare);
console.log(sortarr);



// 10 reverse 

let revstore = unorderarray.reverse();

console.log(revstore);







// 11 slice ans splice 


// use of splice 
let newarr = [2, 3, 5, 6, 7, 8, 9, 6, 4, 3];
let deletedvalues = newarr.splice(2, 3, 1035, 1035, 1046);           //   2 is pointing the index   / 3 is how many element to be added in an array  / 1035, 1035, 1046 are values

console.log(newarr);
console.log(deletedvalues);



// use of slice 

let Newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];     // it cannot change 
let slicearr = Newarr.slice(3);               // it cannot change ( newarr ) it make a new seprate array.
let Slicearr = Newarr.slice(3, 6);            // slice with two argument 
console.log(slicearr);

console.log(Slicearr);



