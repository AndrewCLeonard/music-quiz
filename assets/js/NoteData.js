import Note from "./Note.js";

const E3 = new Note(
	"E", //
	3,
	"../assets/images/E3_treble_clef.svg",
	"treble"
);
const F3 = new Note(
	"F", //
	3,
	"../assets/images/F3_treble_clef.svg",
	"treble"
);
const G3 = new Note(
	"G", //
	3,
	"../assets/images/G3_treble_clef.svg",
	"treble"
);
const A3 = new Note(
	"A", //
	3,
	"../assets/images/A3_treble_clef.svg",
	"treble"
);
const B3 = new Note(
	"B", //
	3,
	"../assets/images/B3_treble_clef.svg",
	"treble"
);
const C4 = new Note(
	"C", //
	4,
	"../assets/images/C4_treble_clef.svg",
	"treble"
);
const D4 = new Note(
	"D", //
	4,
	"../assets/images/D4_treble_clef.svg",
	"treble"
);
const E4 = new Note(
	"E", //
	4,
	"../assets/images/E4_treble_clef.svg",
	"treble"
);
const F4 = new Note(
	"F", //
	4,
	"../assets/images/F4_treble_clef.svg",
	"treble"
);
const G4 = new Note(
	"G", //
	4,
	"../assets/images/G4_treble_clef.svg",
	"treble"
);
const A4 = new Note(
	"A", //
	4,
	"../assets/images/A4_treble_clef.svg",
	"treble"
);
const B4 = new Note(
	"B", //
	4,
	"../assets/images/B4_treble_clef.svg",
	"treble"
);
const C5 = new Note(
	"C", //
	5,
	"../assets/images/C5_treble_clef.svg",
	"treble"
);
const D5 = new Note(
	"D", //
	5,
	"../assets/images/D5_treble_clef.svg",
	"treble"
);
const E5 = new Note(
	"E", //
	5,
	"../assets/images/E5_treble_clef.svg",
	"treble"
);
const F5 = new Note(
	"F", //
	5,
	"../assets/images/F5_treble_clef.svg",
	"treble"
);
const G5 = new Note(
	"G", //
	5,
	"../assets/images/G5_treble_clef.svg",
	"treble"
);

const notesObject = {
	allNotes: [E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5, G5],
	staffNotes: [E4, F4, G4, A4, B4, C5, D5, E5, F5],
	belowStaffNotes: [C4, D4],
};

notesObject.allNotes.forEach((note) => {
	notesObject.allNotes.fullNoteName = note.name + note.octave;
});

export default notesObject;

/**
 * QUESTIONS
 * 
 * Why do these console.log statements differ?  
 notesObject.staffNotes.forEach((noteObject) => {
	 console.log(noteObject);
	});
	
	for (const noteObject in notesObject.staffNotes) {
		console.log(noteObject);
	}
	
	*/
