//? Basic Function

//Questions
// 1. Write a function greetUser that takes a user's name as input and prints a greeting message. If no name is provided, it should print "Hello, Guest!"

function greetUser(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

//greetUser("Astrak");
//greetUser();

//2. Create a function subtractNumbers that takes two numbers as arguments and returns their difference. Handle cases where the arguments are not numbers.

function subtractNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Both arguments must be numbers.';
  }
  return a - b;
}

// console.log(subtractNumbers(10, 5));
// console.log(subtractNumbers(7, "3"));
// console.log(subtractNumbers(20));

//3. Write a function printPattern that prints a pattern like:
// *
// **
// ***
// ****
// *****

function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log('*'.repeat(i));
  }
}

// printPattern(5);

//? Parameter and Return values

// Modify the function addTwoNumbers to check if both parameters are numbers before adding them. If not, return an error message.

function addTwoNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Both arguments must be numbers.';
  }
  return a + b;
}

// console.log(addTwoNumbers(5, 10));
// console.log(addTwoNumbers(5, "10"));
// console.log(addTwoNumbers(5));

// Write a function multiplyNumbers that multiplies all the numbers passed as arguments using the rest operator.

function multiplyNumbers(...numbers) {
  if (numbers.some((num) => typeof num !== 'number')) {
    return 'All arguments must be numbers.';
  }
  return numbers.reduce((product, num) => product * num, 1);
}

// Example usage:
// console.log(multiplyNumbers(2, 3, 4));
// console.log(multiplyNumbers(5, 10));
// console.log(multiplyNumbers(2, "3"));
// console.log(multiplyNumbers());

// Create a function checkEligibility that accepts an object with name and age properties. If the age is greater than or equal to 18, it should return "Eligible to vote"; otherwise, "Not eligible."

function checkEligibility(person) {
  if (
    typeof person !== 'object' ||
    !person.name ||
    typeof person.age !== 'number'
  ) {
    return 'Invalid input';
  }

  return person.age >= 18
    ? `${person.name} is Eligible to vote`
    : `${person.name} is Not eligible to vote`;
}

const person1 = { name: 'Astrak', age: 20 };
const person2 = { name: 'Alice', age: 16 };

// console.log(checkEligibility(person1));
// console.log(checkEligibility(person2));

//? Object and Array Manipulation

// Write a function calculateTotalPrice that takes an array of prices as input and returns the total price.

function calculateTotalPrice(prices) {
  if (
    !Array.isArray(prices) ||
    prices.some((price) => typeof price !== 'number' || price < 0)
  ) {
    return 'Invalid input: Provide an array of non-negative numbers.';
  }

  return prices.reduce((total, price) => total + price, 0);
}

const prices = [19.99, 25.5, 3.75, 10];
// console.log(calculateTotalPrice(prices));
// console.log(calculateTotalPrice([10, 20, 30]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice([15, -5, 10]));

// Create a function userDetails that accepts an object with name, age, and city properties and logs a sentence describing the user.

function userDetails(user) {
  if (
    typeof user !== 'object' ||
    typeof user.name !== 'string' ||
    typeof user.age !== 'number' ||
    typeof user.city !== 'string'
  ) {
    console.log(
      'Invalid input: Provide an object with name (string), age (number), and city (string).'
    );
    return;
  }

  console.log(
    `${user.name} is ${user.age} years old and lives in ${user.city}.`
  );
}

// Example usage
const user1 = { name: 'Astrak', age: 25, city: 'New York' };
const user2 = { name: 'Alice', age: 30, city: 'London' };

// userDetails(user1);
// userDetails(user2);

// Write a function getEvenNumbers that takes an array of numbers and returns an array of even numbers.

function getEvenNumbers(numbers) {
  if (
    !Array.isArray(numbers) ||
    numbers.some((num) => typeof num !== 'number')
  ) {
    return 'Invalid input: Provide an array of numbers.';
  }

  return numbers.filter((num) => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getEvenNumbers(numbers));
// console.log(getEvenNumbers([10, 15, 20, 25]));
// console.log(getEvenNumbers([1, 3, 5]));
// console.log(getEvenNumbers([]));
// console.log(getEvenNumbers(["10", 20, 30]));

//? Advanced

// Write a function mergeArrays that takes two arrays as arguments and returns a new array that merges them without duplicates.

function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Invalid input: Provide two arrays.';
  }
  return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

// console.log(mergeArrays(array1, array2));
// console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
// console.log(mergeArrays([10, 20], [20, 30]));
// console.log(mergeArrays([], [1, 2, 3]));
// console.log(mergeArrays([1, 2], "not an array"));

// Create a function filterProducts that accepts an array of product objects (each with name and price) and a minimum price, and returns a list of products costing more than the minimum price.

function filterProducts(products, minPrice) {
  return products.filter((product) => product.price > minPrice);
}

const products = [
  { name: 'Laptop', price: 80000 },
  { name: 'Phone', price: 6000 },
  { name: 'Tablet', price: 30000 },
  { name: 'Monitor', price: 20000 },
];

const filteredProducts = filterProducts(products, 50000);
// console.log(filteredProducts);

// Write a function getMaxValue that takes an array of numbers and returns the largest number in the array.

function getMaxValue(numbers) {
  return Math.max(...numbers);
}

const numberss = [10, 20, 5, 8, 30];
const maxValue = getMaxValue(numberss);
// console.log(maxValue);

//? Challenge

// Create a function cartSummary that accepts an array of cart items, where each item is an object with name, quantity, and price properties. The function should return the total cost of the cart.

function cartSummary(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
}

const cart = [
  { name: 'Laptop', quantity: 1, price: 80000 },
  { name: 'Phone', quantity: 2, price: 6000 },
  { name: 'Tablet', quantity: 3, price: 30000 },
];

const totalCost = cartSummary(cart);
// console.log(totalCost);

// Write a function parseURL that accepts a URL string and returns an object with keys like protocol, hostname, and path.

function parseURL(url) {
  const urlObject = new URL(url);
  return {
    protocol: urlObject.protocol.replace(':', ''),
    hostname: urlObject.hostname,
    path: urlObject.pathname,
  };
}

const url = 'https://www.example.com/path/to/page';
const parsedURL = parseURL(url);
// console.log(parsedURL);

// Write a function countVowels that takes a string as input and returns the number of vowels in the string.

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return Array.from(str).filter((char) => vowels.includes(char)).length;
}

const inputString = 'Hello, World!';
const vowelCount = countVowels(inputString);
// console.log(vowelCount);

// Flatten Nested Arrays
// Write a function flattenArray that takes a nested array of any depth as input and returns a flattened array.

function flattenArray(nestedArray) {
  return nestedArray.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flattenArray(item));
    } else {
      return acc.concat(item);
    }
  }, []);
}
const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
const flattened = flattenArray(nestedArray);
// console.log(flattened);

// Find Most Frequent Element
// Create a function mostFrequent that accepts an array and returns the element that appears the most times. If there is a tie, return any one of them.

function mostFrequent(arr) {
  const frequencyMap = arr.reduce((map, item) => {
    map[item] = (map[item] || 0) + 1;
    return map;
  }, {});

  let maxCount = 0;
  let mostFrequentItem = null;
  for (const [item, count] of Object.entries(frequencyMap)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem;
}
const array = [1, 3, 2, 3, 4, 1, 3, 1, 1];
const result = mostFrequent(array);
// console.log(result);

// Check Palindrome
// Write a function isPalindrome that takes a string and returns true if it is a palindrome (ignoring case, spaces, and punctuation), and false otherwise.

const text = 'A man, a plan, a canal, Panama';
const isTextPalindrome = isPalindrome(text);
//console.log(isTextPalindrome);

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Group by Property
// Write a function groupBy that takes an array of objects and a property name, and groups the objects by that property.

function groupBy(array, property) {
  return array.reduce((result, item) => {
    const key = item[property];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
}

const items = [
  { name: 'Alice', role: 'developer' },
  { name: 'Bob', role: 'designer' },
  { name: 'Charlie', role: 'developer' },
  { name: 'Daisy', role: 'manager' },
];

const groupedByRole = groupBy(items, 'role');
// console.log(groupedByRole);

// Sum of Digits
// Write a function sumDigits that takes a positive integer and returns the sum of its digits.

function sumDigits(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
}

const number = 12345;
const sum = sumDigits(number);
// console.log(sum);

// Generate Fibonacci Sequence
// Write a function generateFibonacci that takes a number n and returns the first n numbers in the Fibonacci sequence.

function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

const n = 10;
const fibonacciSequence = generateFibonacci(n);
// console.log(fibonacciSequence);

// Anagram Checker
// Create a function isAnagram that takes two strings and returns true if they are anagrams of each other, and false otherwise.

function isAnagram(str1, str2) {
  // Clean and sort both strings
  const cleanString = (str) =>
    str
      .replace(/[^a-zA-Z0-9]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  return cleanString(str1) === cleanString(str2);
}

const string1 = 'listen';
const string2 = 'silent';
const resultTwo = isAnagram(string1, string2);
// console.log(resultTwo);

// Find Missing Number in Array
// Write a function findMissingNumber that takes an array of consecutive numbers (with one number missing) and returns the missing number.

function findMissingNumber(arr) {
  const n = arr.length + 1; // Total numbers including the missing one
  const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of the array
  return expectedSum - actualSum; // The difference is the missing number
}

const num = [1, 2, 3, 4, 6]; // 5 is missing
const missingNumber = findMissingNumber(num);
// console.log(missingNumber); // Output: 5

// Longest Word in Sentence
// Create a function findLongestWord that takes a sentence as input and returns the longest word.

function findLongestWord(sentence) {
  // Split the sentence into words and remove punctuation
  const words = sentence.match(/\b\w+\b/g);
  // Find the longest word
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

const sentence = 'The quick brown fox jumped over the lazy dog!';
const longestWord = findLongestWord(sentence);
// console.log(longestWord);

// Array Rotation
// Write a function rotateArray that rotates the elements of an array to the right by k steps.

function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0 || k % n === 0) return arr; // Handle edge cases

  k = k % n; // Adjust k for rotations greater than array length
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// Example usage:
const arrayOne = [1, 2, 3, 4, 5];
const k = 1;
const rotatedArray = rotateArray(arrayOne, k);
// console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]

// Deep Clone Object
// Write a function deepClone that creates a deep clone of a given object. It should handle nested objects and arrays.

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Return primitives and null as is
  }

  if (Array.isArray(obj)) {
    // Handle arrays
    return obj.map(deepClone);
  }

  // Handle objects
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]); // Recursively clone each property
    }
  }
  return clonedObj;
}

// Example usage
const original = {
  name: 'Astrak',
  age: 30,
  hobbies: ['reading', 'gaming'],
  address: {
    city: 'Delhi',
    zip: '10001',
  },
};

const clone = deepClone(original);
clone.address.city = 'Kolkata';
clone.hobbies.push('coding');

// console.log(original);
// console.log(clone);

// Debounce Function
// Implement a debounce function that delays the execution of a given function until after a specified delay has elapsed since the last time it was invoked.

function debounce(func, delay) {
  let timer; // Holds the timeout ID

  return function (...args) {
    const context = this; // Preserve the context (`this`)

    // Clear the previous timer
    clearTimeout(timer);

    // Set a new timer
    timer = setTimeout(() => {
      func.apply(context, args); // Execute the function
    }, delay);
  };
}

// Example usage:
const logMessage = debounce((message) => {
  console.log(`Debounced message: ${message}`);
}, 1000);

// Simulate rapid calls
// logMessage("Call 1");
// logMessage("Call 2");
// logMessage("Call 3");

// Only "Call 3" will be logged after 1 second

// Custom Promise.all Implementation
// Create a function customPromiseAll that replicates the behavior of Promise.all. It should take an array of promises and return a single promise that resolves when all promises resolve or rejects if any promise rejects.

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Input must be an array'));
    }

    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise) // Ensure the input is treated as a promise
        .then((value) => {
          results[index] = value; // Store the resolved value at the correct index
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results); // Resolve only when all promises have resolved
          }
        })
        .catch((error) => {
          reject(error); // Reject as soon as one promise fails
        });
    });

    // Handle the case where the array is empty
    if (promises.length === 0) {
      resolve([]);
    }
  });
}

// Example usage:
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

customPromiseAll([promise1, promise2, promise3])
  .then((results) => {
    //console.log("All promises resolved:", results);
  })
  .catch((error) => {
    //console.error("One of the promises rejected:", error);
  });

// Example with a rejected promise
const failingPromise = Promise.reject('Error occurred');

customPromiseAll([promise1, failingPromise, promise3])
  .then((results) => {
    //console.log("All promises resolved:", results);
  })
  .catch((error) => {
    //console.error("One of the promises rejected:", error);
  });

// Throttle Function
// Write a throttle function that ensures a given function is executed at most once every specified interval.

function throttle(func, interval) {
  let lastExecutionTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecutionTime >= interval) {
      lastExecutionTime = now;
      func.apply(this, args);
    }
  };
}

// Example usage
const LogMessage = throttle((message) => {
  console.log(`Throttled message: ${message}`);
}, 1000);

// Simulate rapid calls
//logMessage("Call 1");
//setTimeout(() => LogMessage("Call 2"), 500); // Ignored, as it's within the interval
//setTimeout(() => LogMessage("Call 3"), 1100); // Executed, as it's after the interval

// Event Emitter
// Implement an EventEmitter class that allows for subscribing to events, emitting events, and unsubscribing from events.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener); // Return an unsubscribe function
  }

  // Unsubscribe from an event
  off(event, listener) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((l) => l !== listener);
  }

  // Emit an event
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => listener(...args));
  }

  // Subscribe to an event, triggered only once
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper); // Remove the listener after it's called once
    };
    this.on(event, wrapper);
  }
}

// Example usage
const emitter = new EventEmitter();

// Listener for a "message" event
const unsubscribe = emitter.on('message', (msg) => {
  console.log(`Received message: ${msg}`);
});

// Emit the "message" event
// emitter.emit("message", "Hello, World!");
// emitter.emit("message", "Another message");

// Unsubscribe from the "message" event
unsubscribe();
emitter.emit('message', 'This will not be logged');

// Use the `once` method
emitter.once('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
// emitter.emit("greet", "Astrak");
//emitter.emit("greet", "Alice"); // Will not trigger

// Implement a Memoization Function
// Write a function memoize that takes another function as input and returns a memoized version of it. The memoized function should cache results for previously seen inputs.

function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args); // Serialize arguments to use as cache key
    if (cache.has(key)) {
      console.log('Fetching from cache for:', args);
      return cache.get(key);
    }
    console.log('Calculating result for:', args);
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage: A simple function to calculate the sum of two numbers
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

// Testing the memoized function
// console.log(memoizedAdd(1, 2)); // Calculating result for: [1,2], Output: 3
// console.log(memoizedAdd(1, 2)); // Fetching from cache

// Flatten a Nested Array
// Create a function flattenArray that takes a nested array and returns a flat array. The function should handle arrays of arbitrary depth.

function flattenArray(arr) {
  const result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flatten(item); // Recursively flatten nested arrays
      }
    } else {
      result.push(element); // Add non-array elements to the result
    }
  }

  flatten(arr);
  return result;
}

// Example usage
const nestedArrayOne = [1, [2, [3, 4], 5], 6, [7, [8, 9]]];
// console.log(flattenArray(nestedArrayOne));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Custom setTimeout Using Promise
// Implement a function customSetTimeout that mimics the behavior of setTimeout using Promise.

function customSetTimeout(callback, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, delay);
  });
}

// customSetTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000).then(() => {
//     console.log("Promise resolved");
// });

// Custom setTimeout Using Promise
// Implement a function customSetTimeout that mimics the behavior of setTimeout using Promise.

function customSetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// customSetTimeout(2000).then(() => {
//     console.log("Executed after 2 seconds");
// });

// Binary Search Implementation
// Write a function binarySearch that implements the binary search algorithm. It should take a sorted array and a target value and return the index of the target (or -1 if not found).

function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) {
      return mid; // Target found
    }

    if (sortedArray[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// const sortedArray = [1, 3, 5, 7, 9, 11];
// const target = 7;

// const resultt = binarySearch(sortedArray, target);
// console.log(resultt); // Output: 3 (index of the target in the array)

// Parse Query Parameters
// Write a function parseQueryParams that takes a URL string and extracts its query parameters into an object.

function parseQueryParams(url) {
  const queryParams = {};
  const queryStringStart = url.indexOf('?');

  if (queryStringStart === -1) {
    return queryParams; // No query parameters found
  }

  const queryString = url.slice(queryStringStart + 1);
  const pairs = queryString.split('&');

  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value || '');
  }

  return queryParams;
}

// Example usage
const urlOne = 'https://example.com/page?name=JohnDoe&age=25&city=NewYork';
const params = parseQueryParams(url);

// console.log(params);
// Output: { name: "JohnDoe", age: "25", city: "NewYork" }

// Generate Random String
// Implement a function generateRandomString that takes a length as input and returns a random alphanumeric string of that length.

function generateRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
}

// Example usage
// console.log(generateRandomString(10)); // Example Output: "a1b2c3d4e5"

// Custom Array.prototype.map
// Create a custom implementation of the map function, myMap, that works on arrays.

Array.prototype.myMap = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Ensure undefined values in sparse arrays are skipped
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

// Example usage
const arr = [1, 2, 3];
const resultOne = arr.myMap((num) => num * 2);
// console.log(resultOne); // [2, 4, 6]

// Find All Anagrams
// Write a function findAnagrams that takes a word and an array of words, and returns all the words from the array that are anagrams of the given word.

function findAnagrams(word, words) {
  // Helper function to sort the characters of a word
  const sortWord = (str) => str.split('').sort().join('');

  // Sort the target word for comparison
  const sortedWord = sortWord(word);

  // Filter words that match the sorted target word
  return words.filter((w) => sortWord(w) === sortedWord);
}

// Example usage
// console.log(findAnagrams('listen', ['enlist', 'google', 'inlets', 'banana'])); // ["enlist", "inlets"]

// Evaluate Postfix Expression
// Implement a function evaluatePostfix that evaluates a postfix (Reverse Polish) expression and returns its result.

function evaluatePostfix(expression) {
  const stack = [];

  // Helper function to perform the operation
  const performOperation = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  };

  for (const token of expression) {
    if (!isNaN(token)) {
      // If the token is a number, push it to the stack
      stack.push(Number(token));
    } else {
      // Token is an operator; pop two numbers from the stack
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) {
        throw new Error('Invalid expression');
      }
      // Perform the operation and push the result back
      stack.push(performOperation(a, b, token));
    }
  }

  // Final result should be the only value left in the stack
  if (stack.length !== 1) {
    throw new Error('Invalid postfix expression');
  }

  return stack.pop();
}

// Example usage
// console.log(evaluatePostfix(['2', '3', '+', '4', '*'])); // Output: 20
// console.log(evaluatePostfix(['5', '1', '2', '+', '4', '*', '+', '3', '-'])); // Output: 14

// Evaluate Postfix Expression
// Write a function evaluatePostfix that takes an array of strings representing a postfix expression and returns the evaluated result.

function evaluatePostfix(expression) {
  const stack = [];

  for (let token of expression) {
    if (!isNaN(token)) {
      // If token is a number, push it to the stack
      stack.push(Number(token));
    } else {
      // Token is an operator; pop two elements from the stack
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        default:
          throw new Error(`Invalid operator: ${token}`);
      }
    }
  }

  // Final result will be the only element left in the stack
  return stack.pop();
}

// console.log(evaluatePostfix(['2', '3', '+', '4', '*'])); // 20

// Convert Infix to Postfix
// Write a function infixToPostfix that converts an infix expression (e.g., "2 + 3 * 4") into a postfix expression (e.g., ["2", "3", "4", "*", "+"]).

function infixToPostfix(expression) {
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
  };

  const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);
  const isOperand = (char) => !isNaN(char);

  const stack = []; // For operators
  const result = []; // For output (postfix expression)

  for (let token of expression.split(' ')) {
    if (isOperand(token)) {
      // If it's an operand, add to result
      result.push(token);
    } else if (isOperator(token)) {
      // If it's an operator, pop from stack to result until stack is empty
      // or the operator at the top of the stack has lower precedence
      while (
        stack.length &&
        precedence[stack[stack.length - 1]] >= precedence[token]
      ) {
        result.push(stack.pop());
      }
      stack.push(token);
    } else if (token === '(') {
      // Push left parenthesis onto the stack
      stack.push(token);
    } else if (token === ')') {
      // Pop to result until left parenthesis is encountered
      while (stack.length && stack[stack.length - 1] !== '(') {
        result.push(stack.pop());
      }
      stack.pop(); // Remove the '('
    }
  }

  // Pop remaining operators in the stack
  while (stack.length) {
    result.push(stack.pop());
  }

  return result;
}

// const infixExpression = '2 + 3 * 4';
// console.log(infixToPostfix(infixExpression));

// Check Balanced Parentheses
// Write a function isBalanced that checks if a given string of parentheses, brackets, and braces is balanced. Use a stack to solve this problem.

function isBalanced(expression) {
  const stack = [];
  const matchingPairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of expression) {
    if (['(', '[', '{'].includes(char)) {
      // Push opening brackets onto the stack
      stack.push(char);
    } else if ([')', ']', '}'].includes(char)) {
      // Check if the stack is empty or if the top of the stack doesn't match
      if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched
  return stack.length === 0;
}

// console.log(isBalanced('{[()]}'));    //true

// Reverse a Stack
// Write a function reverseStack that takes a stack (represented as an array) and returns a new stack with elements in reverse order. Do not use built-in reverse functions.

function reverseStack(stack) {
  if (stack.length === 0) {
    return [];
  }

  // Pop the top element
  const top = stack.pop();

  // Reverse the rest of the stack recursively
  const reversed = reverseStack(stack);

  // Insert the popped element at the bottom
  insertAtBottom(reversed, top);

  return reversed;
}

function insertAtBottom(stack, value) {
  if (stack.length === 0) {
    stack.push(value);
    return;
  }

  // Remove the top element
  const top = stack.pop();

  // Recursive call to insert value at the bottom
  insertAtBottom(stack, value);

  // Restore the top element
  stack.push(top);
}

const originalStack = [1, 2, 3, 4];
const reversedStack = reverseStack(originalStack);

// console.log(reversedStack); // [4, 3, 2, 1]

// Implement Stack Using Array
// Write a class Stack that implements the basic stack operations (push, pop, peek, and isEmpty) using an

class Stack {
  constructor() {
    this.stack = []; // Internal array to hold stack elements
  }

  // Push element onto the stack
  push(value) {
    this.stack.push(value);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty!');
    }
    return this.stack.pop();
  }

  // Peek the top element without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty!');
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.stack.length;
  }
}

// const myStack = new Stack();

// console.log(myStack.isEmpty()); // true

// myStack.push(10);
// myStack.push(20);
// myStack.push(30);

// console.log(myStack.peek()); // 30
// console.log(myStack.pop()); // 30
// console.log(myStack.size()); // 2
// console.log(myStack.isEmpty()); // false
// console.log(myStack.pop()); // 20
// console.log(myStack.pop()); // 10
// console.log(myStack.isEmpty()); // true

// Write a function pushToStack that takes a stack (array) and a value, pushes the value onto the stack, and returns the updated stack.

function pushToStack(stack, value) {
  stack.push(value); // Add the value to the top of the stack
  return stack; // Return the updated stack
}
let stack = [1, 2, 3];
let value = 4;

// console.log(pushToStack(stack, value)); // [1, 2, 3, 4]

// Write a function popFromStack that takes a stack (array), removes the top element, and returns it. If the stack is empty, return "Stack is empty".

function popFromStack(stack) {
  if (stack.length === 0) {
    return 'Stack is empty'; // Return a message if the stack is empty
  }
  return stack.pop(); // Remove and return the top element
}
let stackOne = [1, 2, 3];

// console.log(popFromStack(stackOne)); // 3
// console.log(stackOne); // [1, 2]
// console.log(popFromStack(stackOne)); // 2
// console.log(popFromStack(stackOne)); // 1
// console.log(popFromStack(stackOne)); // "Stack is empty"

// Write a function peekStack that takes a stack (array) and returns the top element without removing it. If the stack is empty, return "Stack is empty".

function peekStack(stack) {
  if (stack.length === 0) {
    return 'Stack is empty'; // Return a message if the stack is empty
  }
  return stack[stack.length - 1]; // Return the top element without removing it
}
let stackTwo = [1, 2, 3];

// console.log(peekStack(stackTwo)); // 3
// console.log(stackTwo); // [1, 2, 3] (Stack remains unchanged)
// console.log(peekStack([])); // "Stack is empty"

// Write a function isStackEmpty that takes a stack (array) and returns true if the stack is empty, otherwise false.

function isStackEmpty(stack) {
  return stack.length === 0; // Return true if the stack is empty, otherwise false
}
let stack1 = [1, 2, 3];
let stack2 = [];

// console.log(isStackEmpty(stack1)); // false
// console.log(isStackEmpty(stack2)); // true

// Write a function countStack that takes a stack (array) and returns the number of elements in the stack.

function countStack(stack) {
  return stack.length; // Return the number of elements in the stack
}

let stack3 = [1, 2, 3];
let stack4 = [];
let stack5 = [5, 10, 15, 20];

// console.log(countStack(stack3)); // 3
// console.log(countStack(stack4)); // 0
// console.log(countStack(stack5)); // 4

// Write a function secondLargest that takes an array of numbers and returns the second largest number. If there’s no such number, return null.

function secondLargest(arr) {
  if (arr.length < 2) {
    return null; // Not enough elements for a second largest
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest; // Update second largest
      largest = num; // Update largest
    } else if (num > secondLargest && num < largest) {
      secondLargest = num; // Update second largest
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// console.log(secondLargest([10, 20, 30, 40])); // Output: 30
// console.log(secondLargest([5, 5, 5])); // Output: null
// console.log(secondLargest([1])); // Output: null
// console.log(secondLargest([])); // Output: null

// Write a function isPalindrome that checks if a given string is a palindrome (reads the same backward as forward). Ignore spaces, punctuation, and case.

function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the string is equal to its reverse
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

// console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
// console.log(isPalindrome('racecar')); // Output: true
// console.log(isPalindrome('hello')); // Output: false
// console.log(isPalindrome('')); // Output: true (Empty string is considered a palindrome)
// console.log(isPalindrome('No lemon, no melon')); // Output: true

// Write a function flattenArray that takes a nested array and returns a flat array. For example, [[1, 2], [3, [4, 5]]] should return [1, 2, 3, 4, 5].

function flattenArray(nestedArray) {
  const result = [];

  function flatten(arr) {
    for (const element of arr) {
      if (Array.isArray(element)) {
        flatten(element); // Recursively flatten nested arrays
      } else {
        result.push(element); // Add non-array elements to the result
      }
    }
  }

  flatten(nestedArray);
  return result;
}

// console.log(
//   flattenArray([
//     [1, 2],
//     [3, [4, 5]],
//   ])
// ); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []
// console.log(flattenArray([1, 2, 3])); // Output: [1, 2, 3]

// Implement a debounce function. It should take a function and a delay as arguments and ensure that the function is called only once within the delay period, no matter how many times it’s triggered.

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Call the function with the correct context and arguments
    }, delay);
  };
}

// const log_Message = (message) => console.log(message);
// const debouncedLogMessage = debounce(logMessage, 1000);

// debouncedLogMessage('Hello'); // Will execute only after 1 second, if not triggered again
// debouncedLogMessage('Hello, again!'); // Cancels the previous call and resets the timer
// setTimeout(() => debouncedLogMessage('Final Call'), 500); // Will override the earlier calls

// Output after 1 second (only "Final Call" will be logged)

// Write a function countUniqueCharacters that takes a string and returns the count of unique characters in the string. Ignore case sensitivity.

function countUniqueCharacters(str) {
  // Convert the string to lowercase and remove spaces
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');

  // Use a Set to store unique characters
  const uniqueChars = new Set(normalizedStr);

  // Return the count of unique characters
  return uniqueChars.size;
}

// console.log(countUniqueCharacters('Hello World')); // Output: 7
// console.log(countUniqueCharacters('AaBbCc')); // Output: 3
// console.log(countUniqueCharacters('123 321')); // Output: 3
// console.log(countUniqueCharacters('')); // Output: 0

// Write a function isPrime that takes a number as input and returns true if the number is prime, otherwise false.

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check divisors from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, it's not prime
    }
  }

  return true; // Number is prime
}

// console.log(isPrime(2)); // Output: true
// console.log(isPrime(4)); // Output: false
// console.log(isPrime(17)); // Output: true
// console.log(isPrime(1)); // Output: false
// console.log(isPrime(0)); // Output: false
// console.log(isPrime(25)); // Output: false

// Write a function find Intersection that takes two arrays and returns an array containing their intersection (common elements).

function findIntersection(arr1, arr2) {
  // Convert the second array into a Set for efficient lookups
  const set2 = new Set(arr2);

  // Filter elements from the first array that exist in the Set
  const intersection = arr1.filter((item) => set2.has(item));

  // Return the resulting array
  return intersection;
}

// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
// console.log(findIntersection([7, 8, 9], [10, 11, 12])); // Output: []
// console.log(findIntersection([1, 2, 2, 3], [2, 3, 3, 4])); // Output: [2, 3]
// console.log(findIntersection([], [1, 2, 3])); // Output: []

// Write a function memoize that takes another function as input and returns a memoized version of it.

function memoize(fn) {
  const cache = new Map(); // Create a cache to store results
  return function (...args) {
    const key = JSON.stringify(args); // Use JSON.stringify to handle different argument combinations
    if (cache.has(key)) {
      console.log(`Fetching from cache for arguments: ${args}`);
      return cache.get(key); // Return cached result
    }
    const result = fn(...args); // Call the original function
    cache.set(key, result); // Cache the result
    console.log(`Calculating result for arguments: ${args}`);
    return result;
  };
}

// Factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Memoize the factorial function
const memoizedFactorial = memoize(factorial);

// console.log(memoizedFactorial(5)); // Output: 120 (calculated)
// console.log(memoizedFactorial(5)); // Output: 120 (cached)
// console.log(memoizedFactorial(6)); // Output: 720 (calculated, uses result from 5!)
// console.log(memoizedFactorial(6)); // Output: 720 (cached)

// Write a function sumOfDigits that takes a number as input and returns the sum of its digits.
function sumOfDigits(num) {
  if (num < 0) num = -num; // Handle negative numbers
  return num
    .toString() // Convert the number to a string
    .split('') // Split the string into individual digits
    .map(Number) // Convert each digit back to a number
    .reduce((sum, digit) => sum + digit, 0); // Sum up the digits
}

// console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3)
// console.log(sumOfDigits(-456)); // Output: 15 (4 + 5 + 6)
// console.log(sumOfDigits(0)); // Output: 0

// Write a function longestWord that takes a string as input and returns the longest word in the sentence.
function longestWorD(sentence) {
  if (!sentence || typeof sentence !== 'string') {
    return null; // Handle invalid input
  }

  const words = sentence.split(/\s+/); // Split sentence into words using spaces
  let longest = '';

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// console.log(longestWorD('JavaScript is amazing')); // Output: "JavaScript"
// console.log(longestWorD('I love coding challenges')); // Output: "challenges"
// console.log(longestWorD('')); // Output: null

// Write a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // Output: ["a", "b", "c"]
// console.log(removeDuplicates([])); // Output: []

// Write a function areArraysEqual that takes two arrays and returns true if they are identical (have the same elements in the same order), otherwise false.
function areArraysEqual(arr1, arr2) {
  // Check if the lengths are the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compare elements at each index
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true; // Arrays are identical
}

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // Output: true
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // Output: false
// console.log(areArraysEqual([1, 2, 3], [1, 2])); // Output: false
// console.log(areArraysEqual([], [])); // Output: true

// Write a function reverseWords that takes a string as input and reverses the order of the words.
function reverseWords(sentence) {
  // Split the sentence into words, reverse the array, and join back into a string
  return sentence.split(' ').reverse().join(' ');
}

// console.log(reverseWords('Hello World')); // Output: "World Hello"
// console.log(reverseWords('JavaScript is fun')); // Output: "fun is JavaScript"
// console.log(reverseWords('')); // Output: ""
// console.log(reverseWords('SingleWord')); // Output: "SingleWord"

// Write a function isPalindrome that takes a string and checks if it is a palindrome (reads the same backward as forward).

function isPalindrome(str) {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare the string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

// console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
// console.log(isPalindrome('racecar')); // Output: true
// console.log(isPalindrome('hello')); // Output: false
// console.log(isPalindrome('')); // Output: true (empty string is a palindrome)

// Write a function flattenArray that takes a nested array and returns a single flattened array.

function flattenArray(nestedArray) {
  // Use recursion to handle arrays of arbitrary depth
  return nestedArray.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenArray(item)); // Recursively flatten
    } else {
      acc.push(item); // Add non-array items directly
    }
    return acc;
  }, []);
}

// console.log(flattenArray([[1, 2], [3, [4, 5]], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []
// console.log(flattenArray([1, 2, 3])); // Output: [1, 2, 3]

// Write a function countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in it.

function countVowels(str) {
  // Convert the string to lowercase for case-insensitive comparison
  const vowels = 'aeiou';
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// console.log(countVowels('Hello World')); // Output: 3
// console.log(countVowels('JavaScript')); // Output: 3
// console.log(countVowels('AEIOU')); // Output: 5
// console.log(countVowels('xyz')); // Output: 0
