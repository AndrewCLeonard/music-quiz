import notesObject from "./noteData.js";

const noteButtonDivEl = document.querySelector(".note-buttons");
const noteLetters = ["A", "B", "C", "D", "E", "F", "G"];

// create the buttons A through G
noteLetters.forEach((note) => {
	// create a button
	const buttonEl = document.createElement("button");
	buttonEl.className = "note-button";
	buttonEl.setAttribute("data-note", note);
	buttonEl.innerText = note;
	noteButtonDivEl.appendChild(buttonEl);
	// make button text content equal to a note from noteArray
});

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

let startingTime = 2;
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
		console.log("else if");
		timerId.innerText = startingTime;
		clearInterval(countdown);
	}
}

// START GAME LOGIC

// remove start game button from DOM
const startGameBtn = document.getElementById("start-game-btn");

function removeStartButton() {
	startGameBtn.remove();
}

// show pictures for the quiz

function startGame() {}

document.getElementById("start-game-btn").addEventListener("click", decrementTimer);
