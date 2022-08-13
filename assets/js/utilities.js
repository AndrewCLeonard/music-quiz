/**
 * returns random number between  min (included) and max (excluded)
 * min will be 0, max needs to be excluded because of zero-based array
 */
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export default getRndInteger;
