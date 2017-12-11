var winCount = 0;

var remainingGuessesTracker = 12;

var wins = document.getElementById("wins");

wins.textContent = winCount;

// var losses = document.getElementById("losses");

// losses.textContent = lossesCount;

function iterateScore() {
	remainingGuessesTracker--;
}

// assigns the variable alreadyGuesses to the guessed letters
var alreadyGuessed = document.getElementById("guessed-letters");

function resetScore() {
	remainingGuessesTracker = 12;
	alreadyGuessed.textContent = ("");

	var wordList = ["nachos","pizza","pasta","tacos","thai","tots"];
	var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
	var word = document.getElementById("hidden-word"); 
    word.innerHTML = randomWord.split(''); 
}

document.onkeyup = function(event) {
//	if (event.key === )

	// Array of random words
	var wordList = ["nachos","pizza","pasta","tacos","thai","tots"];


	// chooses random word based on index number in array
	var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

	// assigns the variable word to the id "hidden-word"
	var word = document.getElementById("hidden-word");
      
    // set text for the current word field equal to the random word and turns it into a string  
    word.innerHTML = randomWord.split('');  
  

    //var guesses = [];

    //alreadyGuessed.innerHTML = guesses;

    alreadyGuessed.textContent = event.key;

    alreadyGuessed.textContent += event.key;



	document.onkeyup = function(event) {

	    if ((randomWord.indexOf(event.key) < 0) && (alreadyGuessed.textContent.indexOf(event.key) < 0)) {
		    
		    alreadyGuessed.textContent += event.key;

		    //guesses.push(event.key);
			var remainingGuesses = document.getElementById("remaining-guesses");
			remainingGuesses.textContent = remainingGuessesTracker;
			iterateScore();

			if (remainingGuessesTracker === 0) {
				resetScore();
			}

		}


	}
	

	
} 
 

 
