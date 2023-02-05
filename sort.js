// bubble sort
function bubbleSort(arr) {
	// time complexity is O(n^2)
	// space complexity is O(1)
	// bubble sort is a stable sort
	// bubble sort is an in-place sort
	// opposite of in-place sort is out-of-place sort
	// in-place sort means the space complexity is O(1)
	// stable sort means the order of equal elements is not changed
	// stable sort is better because it is more predictable
	for (let i = 0; i < arr.length; i++) {
		// organize the array max times is arr.length
		let flag = false;
		for (let j = 0; j < arr.length - 1 - i; j++) {
			// move the bigger one to the end max times - i
			if (arr[j] > arr[j+1]) {
				flag = true;
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		if (!flag) {
			break;
		}
	}
	return arr;
}

// merge sort
function mergeSort(arr) {
	// time complexity is O(nlogn)
	// space complexity is O(n)
	// merge sort is a stable sort
	// space complexity is O(n) because it uses a new array to store the result
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	// recursion time complexity is O(logn) because it is a binary tree
	// a binary tree is a tree with two children
	// log is the number of times you can divide a number by 2
	// for example 4 is 2 level, 2 is 1 level, 1 is 0 level
	// so n numbers has a level of logn in a binary tree
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	// time complexity is O(n)
	let result = [];
	while (left.length && right.length) {
		// compare the first element of left and right
		// push the smaller one to the result
		// because both left and right are sorted
		// so smaller one is the first one of either left or right
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	while (left.length) {
		result.push(left.shift());
	}
	while (right.length) {
		result.push(right.shift());
	}
	return result;
}

// best sorting algorithm is quick sort
// quick sort is a divide and conquer algorithm
// divide and conquer algorithm is a recursive algorithm
// recursive algorithm is an algorithm that calls itself
// quick sort time complexity is O(nlogn)
// quick sort space complexity is O(logn)
// space complexity is O(logn) because it is a binary tree
// implement quick sort
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let pivot = arr[0];
	let left = [];
	let right = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}




module.exports = { bubbleSort, mergeSort, quickSort };


