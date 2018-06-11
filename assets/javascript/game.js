var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer chooses letter
var letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
console.log(letter);

//person guesses

if (guess===letter) {
    console.log(you win);
}

else {
    //add one to guess
    //subtract 1 from guesses left
}