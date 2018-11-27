var words = ['flaming', 'tired', 'respect', 'level', 'tree', 'unicorn'];
var wins = 0;
var numberOfGuesses = 20;
var lettersGuessed = [];
var random = words[Math.floor(Math.random() * words.length)];
var numberOfLetters = random.length;
var wordSpan = document.getElementById("word");
var letter;
var blankstr = [];
var hasStarted = false;

console.log(random);

function numberOfBlanks() {
    for (i = 0; i < numberOfLetters; i++) {
        blankstr += "-";
    }
    return blankstr;
}


function dealWithKeyboard(e) {
    var userGuess = e.key;
    if (!hasStarted) {
    start(userGuess);
    hasStarted = true;
    return;
    }
    enterLetter(userGuess);
}

function start(userGuess) {
    document.getElementById("blink").style.visibility = 'hidden';
    wordSpan.append(numberOfBlanks());
    enterLetter(userGuess);
}

// I have been trying to figure out how to push letters on to both the blankstr[]
// and the lettersGuessed[]. When attempt to push the users guess onto the lettersGuessed[]
//  it adds double the amount of characters everytime I enter a new user guess.

function enterLetter(userGuess) {
    console.log(userGuess);
    for (var i = 0; i <= numberOfLetters; i++) {
        if (userGuess === random[i]) {
            blankstr[i] = userGuess;
            lettersGuessed.push(userGuess);
            console.log(lettersGuessed);
            numberOfGuesses--;
            wordSpan.append(blankstr);
        } else {
            lettersGuessed.push(letter);
            numberOfGuesses--;
        }
    }
    numberOfGuesses--;
}




document.onkeyup = dealWithKeyboard;

document.getElementById("lettersGuessed").append(lettersGuessed);
document.getElementById("guessesLeft").append(numberOfGuesses);