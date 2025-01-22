// alert("your script works !"); 

let store_value = parseInt(prompt("enter a number = ", "10"));        // 10 is by default value           
document.write(store_value);                                          // To print the number in the brouser screen





let conf = confirm("do you want to write on the brouser page !");

if (conf == true) {
    document.write("you can write now. ");
}
else if (conf == false) {
    document.write("you cannot write in the brouser page !")
}