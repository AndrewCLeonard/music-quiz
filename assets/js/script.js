const noteArray = ["A", "B", "C", "D", "E", "F", "G"];

const noteButtonDivEl = document.querySelector(".note-buttons");

noteArray.forEach((note) => {
	// create a button
	const buttonEl = document.createElement("button");
	buttonEl.className = "note-button";
	buttonEl.setAttribute("data-note", note);
	buttonEl.innerText = note;
	noteButtonDivEl.appendChild(buttonEl);
	// make button text content equal to a note from noteArray
});

// TIMER
const timerEl = document.querySelector(".timerEl");
const timer = document.getElementById("timer");

let startingTime = 60;
timer.innerText = startingTime;
