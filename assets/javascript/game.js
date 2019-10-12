var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 10;
var guess = []

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("direction-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var guessText = document.getElementById("guess-text");

// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {                
        var userGuess = event.key.toLowerCase();
        guess.push(userGuess);
        var computerGuess = [Math.floor(Math.random() * alphabet.length)];
 
            if (computerGuess === userGuess) {
                wins += 1;
                guessLeft = 10;
            } else if (guessLeft < 10) {
                losses += 1;
                guessLeft -= 1;
            }
           
        console.log(userGuess);
        console.log(alphabet [computerGuess]);
        console.log(wins);
        console.log(losses);
    // Hide the directions
    //   directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessLeftText.textContent = "Guesses left: " + guessLeft;
        guessText.textContent = "Your Guesses: " + guess.join(", ");
};
