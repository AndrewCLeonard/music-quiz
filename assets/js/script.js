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
let selectedNotesArray = notesObject.belowStaffNotes;

// used to generate the "max" for `getRndInteger

// declaring global variables
let selectedObject;
let selectedImage;
let selectedNoteName;
let randomNum;
let newImg;
let incorrectAnswersArray = [];
let activeArray = [];

// select random object from chosen array (hardcoded for now as `notesObject.belowStaffNotes`)
function selectRandomObjectFromArray(selectedNotesArray) {
	console.log(`current array length = ${activeArray.length}`);
	// ensure that there are still objects in the array
	if (selectedNotesArray.length > 0) {
		// if so, choose random index for image
		activeArray = selectedNotesArray;
		randomNum = getRndInteger(0, selectedNotesArray.length);
		// console.log(`randomNum = ${randomNum}`);
		// console.table(selectedNotesArray);
		selectedObject = selectedNotesArray[randomNum];
		selectedImage = selectedNotesArray[randomNum].image;
		selectedNoteName = selectedNotesArray[randomNum].name;

		// append selected image to DOM
		newImg = document.createElement("img");
		newImg.setAttribute("src", selectedImage);
		newImg.classList.add("staff-images");
		staffImagesDivEl.appendChild(newImg);
		// console.log(`selected note = ${selectedNoteName}`);
	} else if (incorrectAnswersArray.length > 0) {
		console.log("selectedNotesArray empty, moving to incorrectAnswersArray:");
		activeArray = incorrectAnswersArray;
		console.log(`incorrectAnswersArray:`);
		console.table(incorrectAnswersArray);
		console.log(`activeArray:`);
		console.table(activeArray);
		// console.table(incorrectAnswersArray);
		selectRandomObjectFromArray(activeArray);
	} else if ((activeArray = 0)) {
		console.log("arrays are empty");
	}
	// if array is now empty
	else console.log(activeArray);
}
JSON.st;
// for removing object from array after in/correct answers:
function isCorrectNote(element, index, array) {
	return element === selectedNoteName;
}

function userSelectedAnswer(e) {
	if (selectedNotesArray.length > 0) {
		selectedNotesArray = activeArray;
		console.log("selectedNotesArray being used");
	} else if (incorrectAnswersArray > 0) {
		incorrectAnswersArray = activeArray;
		console.log("incorrectAnswersArray being used");
	} else console.log("el fin");

	const noteName = e.target.getAttribute("data-note");
	// check if selectedNoteName (from displayed image) and noteName (button's note name) match for correct response
	if (e.target.matches(".note-button") && selectedNoteName === noteName) {
		// USER WAS CORRECT
		console.log("correct response");
		// add time
		startingTime += amountOfTimeToAddForCorrectResponse;

		// splice out correctly answered object from `selectedNotesArray
		activeArray.splice(randomNum, 1);
		newImg.remove();
		console.log(`array length from userSelectedAnswer ` + activeArray.length);
		selectRandomObjectFromArray(activeArray);
	}
	// user was incorrect
	else if (e.target.matches(".note-button") && selectedNoteName != noteName) {
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
