
var words = ['flaming', 'tired', 'respect', 'level', 'tree', 'unicorn'];
var wins = 0;
var loses = 0;
var numberOfGuesses = 8;
var lettersGuessed = [];
var random = Math.floor((Math.random() * 6) + 1);
var word = words[random];
document.onkeyup = dealWithKeyboard;
var numberOfLetters = word.length;
var wordSpan = document.getElementById("word");


function numberOfBlanks() {
    var blankstr = "<p>";

    for (i = 0; i <= numberOfLetters - 1; i++) {
        blankstr += "_ ";
    }

    blankstr += "</p>";

    return blankstr;
}

// 1) key gets pressed
function dealWithKeyboard(e) {
    document.getElementById("blink").style.visibility = 'hidden';
    // gets called when any of the keyboard events are overheard
    for (numberOfGuesses = 8; numberOfGuesses >= 0; numberOfGuesses--) {
        // 2) random number chooses which word to use in array
        wordSpan.innerHTML = numberOfBlanks();
        
    }
    
}

// !) document writes the correct number of blanks depending on which word is chosen


// 3) user inputs letter guess
// document.getElementsByTagName("main").addEventListener("keyup", whatLetter, false);

function whatLetter(e) {
    for (var i = 0; i <= 0; i--)
    if (e === word.charAt(i)) {
        lettersGuessed.push(e);
        addToWord(e);
    } else {
        numberOfGuesses--;
        
    }
}
// 4) if/else statement decides if it is true or not
// 5) if it is not true numberOfGuesses-- and add letter guessed to array
// 6) if it is true numberOfGuesses-- and add letter to letterGuessed array and have letter appear in word
function addToWord (letter) {
    for (var i = 0; i > 0; i++)
    if (letter === word.charAt(i)) {
        lettersGuessed.push(e);
        ;
    } else {
        numberOfGuesses--;
        
    }
}



// 7) if word is finished wins++

// 8) produce new word