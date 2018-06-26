// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const frequency = {};
	let mostFrequent = 0;
	let mostFreqChar;

	for (let char of str) {
		// if (!frequency[char]) frequency[char] = 1;
		// else {
		// 	frequency[char]++
		// }

		//a more eloquent way:

		frequency[char] = frequency[char]++ || 1;
	}

	for (let char in frequency) {
		if (frequency[char] > mostFrequent) {
			mostFrequent = frequency[char];
			mostFreqChar = char;
		}
	}

	return mostFreqChar;
}

module.exports = maxChar;
