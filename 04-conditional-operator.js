// if else condition





// alert("hey");




/*

let age = prompt("hey whats your age !");

age = Number.parseInt(age);   // converting thestring into a number 
console.log(age);
console.log("type of age is", typeof (age));

if (age < 0) {
    alert("please enter avalid age !");
}
if (age == 0) {
    alert("please give correct age !");
}

if (age <= 100 && age >= 90) {
    alert("you are to young ! in some years you are die !");
}
else if (age < 90 && age >= 70) {
    alert("you are not too old ! but you are age is for retirement !");
}
else if (age < 70 && age >= 40) {
    alert("you are just  between 70 and 40");
}
else if (age < 40 && age >= 18) {
    alert("you are elegible to vote !");
}
else if (age < 17 && age >= 9) {
    alert("you are not able to give vote !");
}
else if (age < 9 && age > 1) {
    alert("you are a small child !");
}
else {
    alert("enter the valis age !");
}

*/





    const object = {
        satender: 23,
        sahil: 35,
        mohit: 67,
        rohan: 46,
        rohit: 68,
        aarav: 46,
        himesh: 38
    }



// for in loop
for (let a in object) {
    console.log("marks of " + a + " are " + object[a]);
}



// for of loop 
for (let b of "satender") {
    console.log(b);
}