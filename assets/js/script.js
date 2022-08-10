import notesObjectArray from "./noteData.js";

const noteButtonDivEl = document.querySelector(".note-buttons");
const noteLetters = ["A", "B", "C", "D", "E", "F", "G"];

noteLetters.forEach((note) => {
	// create a button
	const buttonEl = document.createElement("button");
	buttonEl.className = "note-button";
	buttonEl.setAttribute("data-note", note);
	buttonEl.innerText = note;
	noteButtonDivEl.appendChild(buttonEl);
	// make button text content equal to a note from noteArray
});

//

// TIMER
const timerEl = document.querySelector(".timerEl");
const timerId = document.getElementById("timer");

let startingTime = 2;
timerId.innerText = startingTime;

const countdown = setInterval(decrementTimer, 1000);

function decrementTimer() {
	startingTime -= 1;
	timerId.innerText = startingTime;
	// console.log(startingTime);

	if (startingTime < 1) {
		clearInterval(countdown);
	}
}

// START GAME LOGIC
