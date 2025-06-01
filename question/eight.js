// Find the Kth Largest Element
function findKthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5

// Find Duplicates in an Array
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]

// Rotate an Array
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // Output: [5, 6, 1, 2, 3, 4]

// Find the Intersection of Two Arrays
function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  return Array.from(set1).filter((num) => set2.has(num));
}

// console.log(arrayIntersection([1, 2, 2, 1], [2, 2])); // Output: [2]

// Find the Subarray with the Maximum Sum
function maxSubArraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

// Find Missing Number
function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

// console.log(findMissingNumber([1, 2, 4, 6, 5], 6)); // Output: 3

// Check if Array is Sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
// console.log(isSorted([5, 3, 2, 1])); // Output: false

// Find First and Last Position of Element
function findFirstAndLast(arr, target) {
  let first = arr.indexOf(target);
  let last = arr.lastIndexOf(target);
  return first !== -1 ? [first, last] : [-1, -1];
}

console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
