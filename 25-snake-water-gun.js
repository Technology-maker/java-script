let user = prompt("Enter alphabet (S)snake ,(W)water, (G)gun. ");
let store = Math.floor(Math.random() * 3);
let computer = ['s', 'w', 'g'][store];
console.log(computer);

function decide(computer, user) {

    if (user == computer) {
        document.write("Both are same gess !<br>");
        return 0;
    }
    else if (user == 's' && computer == 'w') {
        return user;
    }
    else if (user == 's' && computer == 'g') {
        return computer;
    }
    else if (user == 'w' && computer == 'g') {
        return user;
    }
    else if (user == 'w' && computer == 's') {
        return computer;
    }
    else if (user == 'g' && computer == 's') {
        return user;
    }
    else if (user == 'g' && computer == 'w') {
        return computer;
    }
}

let result = decide(computer, user);

document.write(`computer gess: ${computer} <br>you gess : ${user} <br><br>`);
if (result == user) {
    document.write("the winner is 'YOU'");
}
else if (result == computer) {
    document.write("the winner is 'COMPUTER'");

}



