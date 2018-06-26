// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let reversed = n.toString().split('').reverse();
	if (reversed[reversed.length - 1] === "-") {
		reversed.splice(reversed.length - 1, 1)
		return (-1 * parseInt(reversed.join('')))
	}
	else {
		return parseInt(reversed.join(''))
	}
}

module.exports = reverseInt;
