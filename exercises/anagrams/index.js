// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let a = stringA.replace(/[^\w]/g, "").toLowerCase();
	let b = stringB.replace(/[^\w]/g, "").toLowerCase();
	let objA = {};
	let objB = {};
	for (let char of a) {
		objA[char] = objA[char]++ || 1;
	}
	for (let char of b) {
		objB[char] = objB[char]++ || 1;
	}
	//if both objects have same key-value pairs and also same number of keys
	for (let key in objA) {
		var equivalency = false;
		if (objA[key] === objB[key]) equivalency = true;
	}

	if (Object.keys(objA).length === Object.keys(objB).length && equivalency === true) {
		return true;
	} 
	return false;
}

module.exports = anagrams;

var word = "HI THERE!!!"
var replaced = word.replace(/[^\w]/g, "").toLowerCase();
//the carat: inside the [] it means "not the following"
//the \w: any alphanumeric character including underscore
//the g: global flag. cover all examples