
var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];





//var wins = 0;
//var losses = 0;
//var guessLeft = 10;
//var guess = []

// Create variables that hold references to the places in the HTML where we want to display things.
//var winsText = document.getElementById("wins-text");
//var lossesText = document.getElementById("losses-text");
//var guessLeftText = document.getElementById(guessLeft-text);
//var guessText = document.getElementById(guess-text);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = [Math.floor(Math.random() * alphabet.length)]; 





    console.log(userGuess);
    console.log(alphabet [computerGuess]);


}





//Random Letter Generator
//var computerGuess = [Math.floor(Math.random() * alphabet.length)];
//console.log(alphabet [computerGuess]);

