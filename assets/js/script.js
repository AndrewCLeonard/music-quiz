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

let startingTime = 2;
let amountOfTimeToAddForCorrectResponse = 2;
let amountOfTimeToSubtractForIncorrectResponse = 2;
timerId.innerText = startingTime;

// variable to store countdownID, necessary for `clearInterval()`
let countdown;

function startGame() {
	console.log("======================== startGame ===================================");
	countdown = setInterval(timer, 1000);
	startGameBtn.remove();
	selectRandomObjectFromArray(selectedNotesArray);
}

function timer() {
	if (startingTime >= 1) {
		// console.log(startingTime);
		startingTime -= 1;
		timerId.innerText = startingTime;
	} else if (startingTime === 0) {
		timerId.innerText = startingTime;
		clearInterval(countdown);
	}
}

/**
 * GAME LOGIC
 * */

// hardcoding this for now...
// ??? spread operator not necessary here?
let selectedNotesArray = [...notesObject.belowStaffNotes];
console.log("`selectedNotesArray`:");
console.table(selectedNotesArray);
// used to generate the "max" for `getRndInteger

// declaring global variables
let selectedObject;
let selectedImage;
let selectedNoteName;
let randomNum;
let newImg;
let incorrectAnswersArray = [];
let activeArray = [];
let splice;
let currentArray;

// select random object from chosen array (hardcoded for now as `notesObject.belowStaffNotes`)
function selectRandomObjectFromArray(currentArray) {
	console.log("======================== selectRandomObjectFromArray ===================================");
	console.log("currentArray:");
	console.table(currentArray);
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
	console.log("selectedObject spliced out:");
	splice = currentArray.splice(randomNum, 1);
	console.log("splice:");
	console.table(splice);
	console.log("currentArray should now be one shorter:");
	console.table(currentArray);
	console.log("selectedNotesArray should now be one shorter?");
	console.table(selectedNotesArray);
	console.log("======================== selectRandomObjectFromArray END ===================================");
}

function answerResponseHandler(chosenArray) {
	console.log("response handler");
}

function userSelectedAnswer(e) {
	// if originally chosen array has length > 0, use that. Otherwise select randomly from the incorrect response array
	console.log("======================== userSelectedAnswer ===================================");
	console.table(selectedNotesArray);

	// if a case evaluates to "true", it will execute
	switch (true) {
		case selectedNotesArray.length > 0:
			answerResponseHandler(selectedNotesArray);
			break;
		case incorrectAnswersArray.legth > 0:
			answerResponseHandler(incorrectAnswersArray);
			break;
		default:
			console.log(selectedNotesArray.length);
			console.log("This is the default in the switch statement");
	}

	// if (selectedNotesArray.length) {
	// 	console.log("selectedNotesArray has length, tables should be same:");
	// 	activeArray = [...selectedNotesArray];
	// 	console.table(selectedNotesArray);
	// 	console.table(activeArray);
	// } else if (incorrectAnswersArray.length) {
	// 	console.log("incorrectAnswersArray has length");
	// 	activeArray = [...incorrectAnswersArray];
	// } else {
	// 	console.log("arrays empty, code for ending logic needs to be written.");
	// 	console.log("selectedNotesArray:");
	// 	console.table(selectedNotesArray);
	// 	console.log("activeArray:");
	// 	console.table(activeArray);
	// }
	const noteName = e.target.getAttribute("data-note");

	// USER WAS CORRECT
	// check if selectedNoteName (from displayed image) and noteName (button's note name) match for correct response
	if (e.target.matches(".note-button") && selectedNoteName === noteName) {
		console.log("correct response:");
		// add time
		startingTime += amountOfTimeToAddForCorrectResponse;

		newImg.remove();
		if (activeArray.length) {
			console.log(`activeArray.length = ${activeArray.length}`);
			selectRandomObjectFromArray(activeArray);
		}
		console.log("out of objects");
		console.log(`activeArray.length = ${activeArray.length}`);
	}
	// user was incorrect
	else if (e.target.matches(".note-button") && selectedNoteName != noteName) {
		console.log("userSelectedAnswer user incorrect `else if`");

		console.log("wrong response");
		// remove 2 seconds from their timer
		startingTime -= amountOfTimeToSubtractForIncorrectResponse;
		// add incorrect response to incorrect answers array
		incorrectAnswersArray.push(selectedObject);
		// remove it from selected notes array
		activeArray.splice(randomNum, 1);
		// remove the SVG
		newImg.remove();
		// randomly choose the next object to display
		selectRandomObjectFromArray(activeArray);
	}
	// add the mistake to the incorrectAnswersArray
	console.log("======================== userSelectedAnswer END ===================================");
}

/**
 * END LOGIC
 */

// reset arrays
// reset `noteLetters`

// reset button

/**
 * EVENT LISTENERS
 */

startGameBtn.addEventListener("click", startGame, false);
noteButtonDivEl.addEventListener("click", userSelectedAnswer);
