
//  1 it is a join method 

let num = [34, 35, 33, 24, 53];

// output = 34+35+33+24+53

let jon = num.join("+");
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

//    2 poped element in array               (it is update the orignal array).

// let popelement = [4,6,4,3,2,4,5,6,5,2,3,5,]
// popelement.pop();
// console.log(popelement);

// output = [4,6,4,3,2,4,5,6,5,2,3,5,]    last element missing


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










// 3 push ina array                   (push) is used to add the element in an array in last.

let elements = [3, 5, 776, 5, 5, 455, 56, 52];
console.log(elements,);
elements.push(49);
console.log(elements,);



let sift = elements.shift();          //   remove first element and return it .
console.log(sift, elements);



let unsift = elements.unshift(45); //             unshift return new array length
console.log(unsift, elements);




let d = [34, 3, 5, 3];
delete d[2];                   //   delete the array element from array
console.log(d)




