import notesObject from "./noteData.js";
// `getRndInteger(min, max)` returns random number between min and max (both included)
import getRndInteger from "./utilities.js";

const noteLetters = ["A", "B", "C", "D", "E", "F", "G"];

/**
 * HEADER ELEMENTS
 */

// "view high scores" element
const highScoreEl = document.querySelector(".view-high-scores");

const startGameBtn = document.getElementById("start-game-btn");
const staffImagesDivEl = document.getElementById("staff-images");

/**
 * CREATE BUTTONS
 * - using `noteLetters` array, create the buttons A through G
 * - At bottom of this file, an event listener added to ".note-buttons"
 * - when any part of this element is clicked, if it has a data attribute,
 */

// global container for note buttons
const noteButtonDivEl = document.querySelector(".note-buttons");

noteLetters.forEach((note) => {
	// create a button
	const buttonEl = document.createElement("button");
	buttonEl.className = "note-button";
	buttonEl.setAttribute("data-note", note);
	buttonEl.innerText = note;
	noteButtonDivEl.appendChild(buttonEl);
	// const noteId = buttonEl.getAttribute("data-note");
});

/**
 * TIMER ELEMENTS
 */

// class for the div containing the entire timer
const timerEl = document.querySelector(".timerEl");

// span containing only the number for the timer
const timerId = document.getElementById("timer");

/**
 * TIMER CODE
 */

let startingTime = 50000;
let amountOfTimeToAddForCorrectResponse = 2;
let amountOfTimeToSubtractForIncorrectResponse = 2;
timerId.innerText = startingTime;

// variable to store countdownID, necessary for `clearInterval()`
let countdown;

function startGame() {
	console.log("======================== startGame ===================================");
	console.table("selectedNotesArray:");
	console.table(selectedNotesArray);
	countdown = setInterval(timer, 1000);
	startGameBtn.remove();
	selectRandomObjectFromArray(selectedNotesArray);
}

function timer() {
	if (startingTime >= 1) {
		// // console.log(startingTime);
		startingTime -= 1;
		timerId.innerText = startingTime;
	} else if (startingTime === 0) {
		timerId.innerText = startingTime;
		clearInterval(countdown);
		concludeGame();
	}
}

// hardcoding this for now...
// ??? spread operator not necessary here?
let selectedNotesArray = [...notesObject.belowStaffNotes];

// declaring global variables
let selectedObject;
let selectedImage;
let selectedNoteName;
let randomNum;
let newImg;
let incorrectAnswersArray = [];
let noteName;
let buttonClick;
let gameWillContinue = true;
// let currentArray;

// select random object from chosen array (hardcoded for now as `notesObject.belowStaffNotes`)
function selectRandomObjectFromArray(currentArray) {
	console.log("======================== selectRandomObjectFromArray START ===================================");
	// selcet a random number to choose random object from currentArray & also get its properties
	randomNum = getRndInteger(0, currentArray.length);
	selectedObject = currentArray[randomNum];
	selectedImage = currentArray[randomNum].image;
	selectedNoteName = currentArray[randomNum].name;

	// append selected image to DOM
	newImg = document.createElement("img");
	newImg.setAttribute("src", selectedImage);
	newImg.classList.add("staff-images");
	staffImagesDivEl.appendChild(newImg);

	// splice out the randomly chosen object
	currentArray.splice(randomNum, 1);
	console.log("selectedNotesArray should now be one shorter");
	console.table(selectedNotesArray);
	console.log("======================== selectRandomObjectFromArray END ===================================");
}

/**
 * INCORRECT RESPONSES
 */

function incorrectResponseHandler(object) {
	console.log("======================== incorrectResponseHandler START ===================================");
	incorrectAnswersArray.push(selectedObject);
	newImg.remove();
	selectRandomObjectFromArray(selectedNotesArray);
	console.log("======================== incorrectResponseHandler END ===================================");
}

/**
 * CORRECT RESPONSES
 */

function answerResponseHandler(chosenArray) {
	console.log("======================== answerResponseHandler START ===================================");

	if (buttonClick && selectedNoteName === noteName) {
		console.log("correct response");
		console.log("selectedNotesArray:");
		console.table(selectedNotesArray);
		// add time
		startingTime += amountOfTimeToAddForCorrectResponse;

		newImg.remove();
		if (selectedNotesArray.length) {
			selectRandomObjectFromArray(selectedNotesArray);
		} else {
			gameWillContinue = false;
			console.log("out of objects");
			console.log(`gameWillContinue = ${gameWillContinue}`);
		}

		// wrong answers
	} else if (buttonClick && selectedNoteName !== noteName) {
		console.log("YOU CLICKED A BUTTON BUT YOU'RE WRONG");
		incorrectResponseHandler(selectedObject);
	}
	console.log(selectedNotesArray.length);
	console.log("======================== answerResponseHandler END ===================================");
}

function userSelectedAnswer(e) {
	// if originally chosen array has length > 0, use that. Otherwise select randomly from the incorrect response array
	console.log("======================== userSelectedAnswer START===================================");
	noteName = e.target.getAttribute("data-note");
	e.target.matches(".note-button") ? (buttonClick = true) : (buttonClick = false);

	// if one of the cases evaluates to "true", it will execute
	switch (true) {
		case selectedNotesArray.length > 0:
			console.log(selectedNotesArray.length);
			answerResponseHandler(selectedNotesArray);

			console.log("======================== switch statement correct response END ===================================");
			break;
		case incorrectAnswersArray.length > 0:
			console.log("TOO CLOSE FOR 'selectedNotesArray, SWITCHING TO `incorrectAnswersArray`");
			answerResponseHandler(incorrectAnswersArray);
			break;
		case !gameWillContinue: // making it "false" so that it uses this case when it's false
			console.log("gameWillContinue registered as false in switch statement.");
			concludeGame();
			break;
		default:
			incorrectAnswersArray.length > 0 ? console.log(true) : console.log(false);
			console.log("switch statement default");
	}
	console.log("======================== userSelectedAnswer END ===================================");
}
/**
 * END LOGIC
 */

function saveScore() {
	localStorage.setItem("score", JSON.stringify(score));
}

function concludeGame() {
	// remove picture of staff
	newImg.remove();

	// get time remaining for score
	const timeElapsed = startingTime;
	clearInterval(countdown);
	console.log(`timeElapsed = ${timeElapsed}`);

	// put the button back
	const buttonHTML = `<button id="start-game-btn" class="start-game-btn"><i class="fa-solid fa-play fa-xl"></i></button>`;
	document.getElementById("staff-images").innerHTML = buttonHTML;

	/**
	 * 	const buttonEl = document.createElement("button");
	buttonEl.className = "note-button";
	buttonEl.setAttribute("data-note", note);
	buttonEl.innerText = note;
	noteButtonDivEl.appendChild(buttonEl);

	 * <div class="start-game" id="staff-images">
					<button id="start-game-btn" class="start-game-btn"><i class="fa-solid fa-play fa-xl"></i></button>
				
	 */
}

// reset arrays
// reset `noteLetters`

// reset button

/**
 * EVENT LISTENERS
 */

startGameBtn.addEventListener("click", startGame, false);
noteButtonDivEl.addEventListener("click", userSelectedAnswer);
