// collection of charactor that has terminated by null charactor that is known as (STRING).

// ways to make a string 

let str1 = "satender yadav";
let str2 = 'yadav';





// to print the strings

for (let i of str1) {
    console.log("arr", i, "is = ", str1);
}

console.log(str2.length);        // To Print The Length of a (str2);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.slice(2, 5));
console.log(str1.slice(2));
console.log(str1.replace("satender", "neeraj"));
console.log(str1.concat(" is a ", str2));
let frd = "bhai";
console, console.log(frd.trim());
console, console.log(frd);



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

// To print each charactor of a string. 


console.log(frd[0]);
console.log(frd[1]);
console.log(frd[2]);
console.log(frd[3]);
console.log("\n");

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



// To print the string with the help of a loop.


let myname = "neeraj bhai" + "satender yadav";
let len = myname.length;

for (let i = 0; i < len; i++) {
    console.log(myname[i]);
}


myname[3] = "m";             // this is not posible in c++.





// template laterals 


let boy1 = "satender";
let boy2 = "sonu";

let sentence = `${boy1} is a friend of ${boy2}`;

console.log(sentence);








// scape sequence character 

let fruit = 'papiya\'s'
console.log(fruit);
























// strings methods 

let mname = "satender yadav";


// first method 

console.log(mname.toUpperCase());

// second method 

console.log(mname.toLowerCase());

// third method 

console.log(mname.slice(2, 6));


// forth method 

console.log(mname.replace("satender", "sonu"));


// fifth method           ( concination means to merge the two strings ).


let friendname = "sonu";


console.log(mname.concat(" is friend of ", friendname, " ok "));



// sixth method  ( it is used to trim extra space )

let frname = "                   laddo            ";

console.log(frname);
console.log(frname.trim());














