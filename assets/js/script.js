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

const 

let time = 60;
