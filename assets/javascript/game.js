
var words = ['flaming', 'tired', 'respect', 'level', 'tree', 'unicorn'];
var wins = 0;
var loses = 0;
var numberOfGuesses = 8;
var lettersGuessed = [];
var random = Math.floor((Math.random() * 6) + 1);


// 1) key gets pressed
function dealWithKeyboard(e) {
    var wordSpan = document.getElementById("word");
    // var wordSpan = document.getElementById("word").innerHTML;
    wordSpan.write("hello");
    // gets called when any of the keyboard events are overheard
    for (numberOfGuesses = 8; numberOfGuesses >= 0; numberOfGuesses--) {
        // 2) random number chooses which word to use in array
        var word = words[random];
        
        var numberOfLetters = word.length;
        // !) document writes the correct number of blanks depending on which word is chosen
        function numberOfBlanks(numberOfLetters) {
            for (numberOfLetters; numberOfLetters >= 0; numberOfLetters--) {
                document.getElementById("word").write("_ ");
            }
        }
        
        
    }

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



    }

    document.onkeyup = dealWithKeyboard();
    // 7) if word is finished wins++
    
    // 8) produce new word