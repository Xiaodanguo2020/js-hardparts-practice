const { mergeSort, quickSort, bubbleSort } = require('./sort');
const assert = require('assert');
function testSort (sort) {
	describe(`sort: ${sort.name}`, function() {
		it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', function() {
			assert.deepEqual(sort([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});
		// test ordered case
		it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', function() {
			assert.deepEqual(sort([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});
		// test empty array
		it('should return []', function() {
			assert.deepEqual(sort([]), []);
		});
		// test array with one element
		it('should return [1]', function() {
			assert.deepEqual(sort([1]), [1]);
		});
		// test equal elements
		it('should return [1, 1, 1, 1, 1, 1, 1, 1, 1]', function() {
			assert.deepEqual(sort([1, 1, 1, 1, 1, 1, 1, 1, 1]), [1, 1, 1, 1, 1, 1, 1, 1, 1]);
		});
	});
}
testSort(bubbleSort);
testSort(mergeSort);
testSort(quickSort);
