// QuickSort Algorithm from Java Interview Exposed rewritten in JavaScript

function quickSort(nums) {

	if (nums.length < 2) {
		return nums;
	} 

	var pivot = nums[0];
	var lower = [];
	var higher = [];

	for (var i = 1; i < nums.length; i++) {
		if (nums[i] < pivot) {
			lower.push(nums[i]);
		} else {
			higher.push(nums[i]);
		}
	}

	var sorted = quickSort(lower);

	sorted.push(pivot);

	sorted = sorted.concat(quickSort(higher));

	return sorted;

}

var array = [1, 8, 7, 5, 9];

var sortedArray = quickSort(array);

console.log(sortedArray);