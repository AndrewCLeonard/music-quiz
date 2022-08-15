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
const selectedNotesArray = notesObject.staffNotes;

// used to generate the "max" for `getRndInteger
const notesArrayLength = selectedNotesArray.length;

// declaring global variables
let selectedObject;
let selectedImage;
let selectedNoteName;
let randomNum;

// for storing (and eventually logging) correct/incorrect responses
let incorrectAnswersArray = [];
let correctAnswersArray = [];

// select random element from `notesObject.staffNotes`
function selectRandomObjectFromArray(selectedNotesArray) {
	// choose random index for image
	randomNum = getRndInteger(0, notesArrayLength);
	selectedObject = selectedNotesArray[randomNum];
	selectedImage = selectedNotesArray[randomNum].image;
	selectedNoteName = selectedNotesArray[randomNum].name;

	// append selected image to DOM
	const newImg = document.createElement("img");
	newImg.setAttribute("src", selectedImage);
	newImg.classList.add("staff-images");
	staffImagesDivEl.appendChild(newImg);
	console.log(`first image: ${selectedNoteName}, ${selectedImage}`);
	console.log(selectedObject);
}

// for removing object from array after in/correct answers:
function checkArray(object, index, array) {
	const objectToRemove = object[randomNum];
	return objectToRemove;
}

function userSelectedAnswer(e) {
	const noteName = e.target.getAttribute("data-note");
	console.log(`first image in "userSelectedAnswer": ${selectedNoteName}, ${selectedImage}`);

	// check if selectedNoteName (picture) and noteName (button's note name) match for correct response
	if (e.target.matches(".note-button") && selectedNoteName === noteName) {
		// USER WAS CORRECT
		console.log("correct response");
		// add time
		startingTime += amountOfTimeToAddForCorrectResponse;

		// get correct response element from `noteLetters` array, add it to `correctAnswersArray`.
		// 1. get index of randomly chosen element
		const correctIndexToCopy = noteLetters.indexOf(noteName);
		// 2. add the correct answer to `correctAnswersArray`
		correctAnswersArray.push(correctIndexToCopy);
		// 4. remove correct response from `selectedNotesArray`
	}
	// user was incorrect
	else console.log("wrong response");
	startingTime -= amountOfTimeToSubtractForIncorrectResponse;
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
