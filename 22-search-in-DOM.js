
// to get any element by its class 

// let a = document.getElementsByClassName("card-title")[0];
// a.style.color = "grey";


// to get element by its id 


// let b = document.getElementById("c-title");
// b.style.color = "rgb(201, 240, 7)";
// b.style.color = "#f04107";




// too select items with the help of css selectors 

let c = document.querySelectorAll(".card-title");
c[0].style.color = "blue";
c[1].style.color = "green";
c[2].style.color = "yellow";


// too select one items only the help of css selectors 


document.querySelector(".this").style.color = "blue";
document.querySelector(".this").style.background = "red";



// too select items with the help of tags

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector("card").document.getElementsByTagName("a"));

console.log(document.getElementsByTagName("firstimg"))


