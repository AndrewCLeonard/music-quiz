// import no-tesObject from "./noteData.js";

const noteLetters = ["A", "B", "C", "D", "E", "F", "G"];

const startGameBtn = document.getElementById("start-game-btn");

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

function userSelectedAnswer(e) {
	// const isNoteButton = noteButtonDivEl.hasAttribute("note-button");
	if (e.target.matches(".note-button")) {
		const noteName = e.target.getAttribute("data-note");
		console.log(noteName);
	}
	// console.log(isNoteButton);
	// console.log(e.hasAttribute("data-note"));
	// check if the clicked area of the noteButtonDivEl has data attribute

	// if (isNoteButton) {
	// 	const noteButton = noteButtonDivEl.getAttribute("data-note");
	// 	console.log(noteButton);
	// }
}

/**
 * HEADER ELEMENTS
 */

// "view high scores" element
const highScoreEl = document.querySelector(".view-high-scores");

// timer elements

// class for the div containing the entire timer
const timerEl = document.querySelector(".timerEl");

// span containing only the number for the timer
const timerId = document.getElementById("timer");

/**
 * TIMER CODE
 */

let startingTime = 30;
timerId.innerText = startingTime;

// variable to store countdownID, necessary for `clearInterval()`
let countdown;

function decrementTimer() {
	countdown = setInterval(timer, 1000);
	removeStartButton();
}

function timer() {
	if (startingTime >= 1) {
		console.log(startingTime);
		startingTime -= 1;
		timerId.innerText = startingTime;
	} else if (startingTime === 0) {
		timerId.innerText = startingTime;
		clearInterval(countdown);
	}
}

// START GAME LOGIC

// remove start game button from DOM
function removeStartButton() {
	startGameBtn.remove();
}

// show pictures for the quiz

function startGame() {}

startGameBtn.addEventListener("click", decrementTimer, false);
noteButtonDivEl.addEventListener("click", userSelectedAnswer);
