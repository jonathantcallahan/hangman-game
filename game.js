

document.onkeyup = function(event) {
	
var winCount = 0;

var remainingGuessesTracker = 12;

var wins = document.getElementById("wins");

wins.textContent = winCount;


function randomWord(event.key) {
	var wordList = ["nachos","pizza","pasta","tacos","thai","tots"];

	var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

	var word = document.getElementById("hidden-word");
      
    word.innerHTML = randomWord.split('');
}

function letterGuess(event.key) {
	var remainingGuesses = document.getElementById("remaining-guesses");
	remainingGuesses.textContent -= remainingGuessesTracker;

	var alreadyGuessed = document.getElementById("guessed-letters");
	alreadyGuessed.innerHTML += event.key.split();
} 


 
