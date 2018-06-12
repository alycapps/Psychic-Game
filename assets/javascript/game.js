var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("guesses");
var left = document.getElementById("left");

//person guesses by typing letter
document.onkeyup = function(event) {
    var guess = event.key;
    console.log(guess);

//computer chooses letter after letter typed
    var letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
    console.log(letter);

    if (guess===letter) {
        console.log("you win");
        wins++;
        console.log("wins: " + wins);
    }

    else {
        console.log("you lose");
        losses++;
        console.log("losses: " + losses);
        guesses++;
        console.log("guesses: " + guesses);
        //subtract 1 from guesses left
    }

    //update the stats in HTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("left").innerHTML = left;
}