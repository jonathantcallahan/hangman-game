// psuedocode plan
// 



document.onkeyup = function(event) {

	
	var wordList = ["nachos","pizza","pasta","tacos","thai","tots"];

	var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

	var word = document.getElementById("hidden-word");
      
    word.innerHTML = randomWord.split('');



    document.onkeyup = function(event) {	



    		var alreadyGuessed = document.getElementById("guessed-letters");
    		alreadyGuessed.innerHTML += event.key.split();

    		var remainingGuesses = document.getElementById("remaining-guesses");

    		remainingGuesses.textContent -= 1;
    	}

    	
    }

	
    var winCount = 0;

	var wins = document.getElementById("wins");

	wins.textContent = winCount;


	console.log("bananas")

	


