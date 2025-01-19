

let attempts = 0;
let randomNumber;
let userGuess;

do {
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    userGuess = parseInt(prompt("Guess the random number between 1 and 10: "), 10); 

    console.log(`Your guess (${userGuess}) random number is (${randomNumber}).`);
    
    attempts++;
} while (randomNumber !== userGuess);

console.log(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
