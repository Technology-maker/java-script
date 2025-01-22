
// they can give true or false 
console.log(console);
console.assert(34 > 3);
console.assert(34 < 2);                  // this give an error 



// for clear consol in the brouser
console.clear();



// give the obj date in tabuler form 
const obj = {
    1: "satender",
    2: "sahil",
    3: "himesh",
    4: "mohit"
}
console.table(obj)




// to give warning
console.warn(" Do mot drink and  drive ");



// console.log("log");
// console.info("info");
// console.warn("warning !");
// console.error("error !");
// console.assert("asert " != false);
// console.assert("asert " == false);






// we can cherk this loop is execute in which time 

console.time("for loop time");
for (let i = 0; i < 200000; i++) {
}
console.timeEnd("for loop time");




console.time("while loop time");
let i = 0;
while (i != 200000) {
    i++;
}
console.timeEnd("while loop time");






