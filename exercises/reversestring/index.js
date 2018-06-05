// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// debugger;
	return str.split('').reduce((reversed, char) => char + reversed, '')
}

// reverse('kishmish');

module.exports = reverse;

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// function reverse(str) {
// 	let result = '';
// 	for (let char of str) {
// 		result = char + result;
// 	}
// 	return result;
// }

// function reverse(str) {
// 	let result = '';
// 	//this kind of for loop can introduce a lot of room for error
// 	//better to use the for...of syntax where possible
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		result = result.concat(str[i])
// 	}
// 	return result;
// }