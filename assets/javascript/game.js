var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 0;
var left = 8;

//person guesses by typing letter
document.onkeyup = function(event) {
    var guess = event.key;
    console.log(guess);

//computer chooses letter after letter typed
    var letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
    console.log(letter);

    if (guess===letter) {
        console.log("you win");
    }

    else {
        console.log("you lose");
        //add one to guess
        //subtract 1 from guesses left
    }

}