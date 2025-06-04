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

// console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(findFirstAndLast([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]

// Find Majority Element
function findMajorityElement(arr) {
  let count = 0,
    candidate = null;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Verify candidate
  let occurrence = arr.filter((num) => num === candidate).length;
  return occurrence > arr.length / 2 ? candidate : null;
}

// console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
// console.log(findMajorityElement([3, 3, 4, 2, 4, 4])); // Output: null

// Find All Subarrays with a Given Sum
function findSubarraysWithSum(arr, target) {
  let result = [];
  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];
      if (sum === target) {
        result.push(arr.slice(start, end + 1));
      }
    }
  }
  return result;
}

// console.log(findSubarraysWithSum([1, 2, 3, 4, 5], 5)); // Output: [[2, 3], [5]]

// Find the Maximum Product of Two Numbers
function maxProduct(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] * arr[1];
}

// console.log(maxProduct([1, 10, 2, 6, 5, 3])); // Output: 60
// console.log(maxProduct([-10, -20, 5, 3, 2])); // Output: 200

// Move All Zeros to End
function moveZerosToEnd(arr) {
  let result = arr.filter((num) => num !== 0);
  let zeroCount = arr.length - result.length;
  return result.concat(Array(zeroCount).fill(0));
}

// console.log(moveZerosToEnd([0, 1, 2, 0, 3, 0, 5])); // Output: [1, 2, 3, 5, 0, 0, 0]

// Rotate Array
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// Find the Second Smallest Element
function secondSmallest(arr) {
  let uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
  return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

// console.log(secondSmallest([4, 1, 2, 5, 3])); // Output: 2
// console.log(secondSmallest([7, 7, 7])); // Output: null

// Find All Pairs with a Given Sum
function findPairsWithSum(arr, target) {
  let seen = new Set();
  let pairs = [];

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

// console.log(findPairsWithSum([1, 2, 3, 4, 5], 6)); // Output: [[2, 4], [1, 5]]

// Find the Index of a Target Element
function findIndex(arr, target) {
  return arr.indexOf(target);
}

// console.log(findIndex([10, 20, 30, 40, 50], 30)); // Output: 2
// console.log(findIndex([10, 20, 30, 40, 50], 60)); // Output: -1

// Reverse an Array
function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// Check for Duplicates
function containsDuplicates(arr) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

// console.log(containsDuplicates([1, 2, 3, 4, 5])); // Output: false
// console.log(containsDuplicates([1, 2, 3, 2, 4])); // Output: true

// Find the Missing Number
function findMissingNumber(arr) {
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arrSum;
}

// console.log(findMissingNumber([3, 0, 1])); // Output: 2
// console.log(findMissingNumber([0, 1, 2, 4, 5])); // Output: 3

// Find the Majority Element
function findMajorityElement(arr) {
  let count = 0,
    candidate = null;

  for (let num of arr) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  count = arr.filter((num) => num === candidate).length;
  return count > arr.length / 2 ? candidate : null;
}

// console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3])); // Output: 3
// console.log(findMajorityElement([1, 2, 3, 4])); // Output: null

// Partition Array into Even and Odd
function partitionArray(arr) {
  let even = arr.filter((num) => num % 2 === 0);
  let odd = arr.filter((num) => num % 2 !== 0);
  return { even, odd };
}

console.log(partitionArray([1, 2, 3, 4, 5, 6]));
// Output: { even: [2, 4, 6], odd: [1, 3, 5] }
