document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
document.getElementsByClassName("navigation").style.backgroundcolor = "red";

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "red";
});

