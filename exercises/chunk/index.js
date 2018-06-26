// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const outer = [];
	let count = 0;
	while (count < array.length) {
		outer.push(array.slice(count, count + size));
		count+= size;
	} 
	return outer;
}

module.exports = chunk;

// function chunk(array, size) {
// 	let outer = [];
// 	for (let element of array) {
// 		//if last element in last chunk doesn't exist or the size of the chunk is to capacity, then create a new chunk
// 		//const last = outer[outer.length - 1]
// 		if (!outer[outer.length - 1] || outer[outer.length - 1].length === size) {
// 			outer.push([element]);
// 		}
// 		//otherwise if it's not at capacity, we can just add a new element
// 		else {
// 			outer[outer.length - 1].push(element);
// 		}
// 	}
// 	return outer;
// }