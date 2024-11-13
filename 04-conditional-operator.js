// if else condition




const prompt = require("prompt-sync")();
let a = prompt("enter your age");

a = Number.parseInt(a);         //use to convert the string into number              it iis also known as (type casting)
console.log(typeof (a));

if (a <= 100) {
    console.log("you are very old its time to die. ");
}

else if (a <= 70 && a >= 50) {
    console.log("you are looking like a young. ");

}

else if(a <= 49 && a >= 30){
    console.log("you are too young .");
}

else if(a <= 29 && a >= 18){
    console.log("you are able to vote in india .");


}

else if(a<= 17 && a  >= 10){
    console.log ("tou are a kid you are not able to vote ,");

}

else if(a <= 9 && a>= 1){
    console.log("you are not able to speak proprely");

}
else{
    console,log("invalid age ");
    
}