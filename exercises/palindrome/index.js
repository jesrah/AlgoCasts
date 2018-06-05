// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	})
}

module.exports = palindrome;

// //Original Solution
// function palindrome(str) {
// 	return str === str.split('').reduce((reverse, char) => char + reverse, '') ? true : false

// 	//the true: false after ? is actually unnecessary bc returning the equality statement already returns true or false
// }

// //Solution using reverse()
// function palindrome(str) {
// 	return str === str.split('').reverse().join('');
// }