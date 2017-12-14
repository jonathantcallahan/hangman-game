var winCount = 0;
var remainingGuess = 12;
var underscoreArray = [];
var wordList = ["nachos","tacos","thai","pie"];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var wins = document.getElementById("wins");
var guessesDisplay = document.getElementById("remaining-guesses");
var hiddenArray = document.getElementById("hidden-word");
var guessedLetters = document.getElementById("guessed-letters");

function setWord() {
	underscoreArray = [];
	for (var i = 0; i < randomWord.length; i++) {
		underscoreArray.push("_");
	}
	hiddenArray.innerHTML = underscoreArray;
}

function loss() {
	setWord();
	remainingGuess = 12;
	guessesDisplay.textContent = remainingGuess;
	guessedLetters.textContent = "";
}

function iterateScore() {
	remainingGuess.textContent = "";
	winCount++;
	remainingGuess = 12;
	wins.textContent = winCount;
	setWord();
	guessesDisplay.textContent = remainingGuess;
}

function iterateGuess() {
	remainingGuess--;
	guessesDisplay.textContent = remainingGuess;

}

document.onkeyup = function(event) {

	setWord();

	document.onkeyup = function(event) {
		var userGuess = event.key;
		userGuessIndex = randomWord.indexOf(userGuess)

		if (userGuessIndex > -1) {
			underscoreArray[userGuessIndex] = userGuess;
			hiddenArray.innerHTML = underscoreArray;
		} else if (guessedLetters.innerHTML.indexOf(userGuess) < 0) {
			guessedLetters.innerHTML = guessedLetters.innerHTML + userGuess;
			iterateGuess();
		}

		if (remainingGuess === 0) {
			loss();
		}

		if (underscoreArray.indexOf('_') < 0) {
			iterateScore();
		}


	}
		

}