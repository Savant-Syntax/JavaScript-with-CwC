//? Basic Function

//Questions
// 1. Write a function greetUser that takes a user's name as input and prints a greeting message. If no name is provided, it should print "Hello, Guest!"

function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

//greetUser("Astrak");
//greetUser();


//2. Create a function subtractNumbers that takes two numbers as arguments and returns their difference. Handle cases where the arguments are not numbers.

function subtractNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Both arguments must be numbers.";
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
        console.log("*".repeat(i));
    }
}

// printPattern(5);


//? Parameter and Return values

// Modify the function addTwoNumbers to check if both parameters are numbers before adding them. If not, return an error message.

function addTwoNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Both arguments must be numbers.";
    }
    return a + b;
}

// console.log(addTwoNumbers(5, 10));
// console.log(addTwoNumbers(5, "10"));
// console.log(addTwoNumbers(5));


// Write a function multiplyNumbers that multiplies all the numbers passed as arguments using the rest operator.

function multiplyNumbers(...numbers) {
    if (numbers.some(num => typeof num !== "number")) {
        return "All arguments must be numbers.";
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
    if (typeof person !== 'object' || !person.name || typeof person.age !== 'number') {
        return "Invalid input";
    }

    return person.age >= 18 ? `${person.name} is Eligible to vote` : `${person.name} is Not eligible to vote`;
}

const person1 = { name: "Astrak", age: 20 };
const person2 = { name: "Alice", age: 16 };

// console.log(checkEligibility(person1));
// console.log(checkEligibility(person2));


//? Object and Array Manipulation

// Write a function calculateTotalPrice that takes an array of prices as input and returns the total price.

function calculateTotalPrice(prices) {
    if (!Array.isArray(prices) || prices.some(price => typeof price !== 'number' || price < 0)) {
        return "Invalid input: Provide an array of non-negative numbers.";
    }

    return prices.reduce((total, price) => total + price, 0);
}

const prices = [19.99, 25.50, 3.75, 10];
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
        console.log("Invalid input: Provide an object with name (string), age (number), and city (string).");
        return;
    }

    console.log(`${user.name} is ${user.age} years old and lives in ${user.city}.`);
}

// Example usage
const user1 = { name: "Astrak", age: 25, city: "New York" };
const user2 = { name: "Alice", age: 30, city: "London" };

// userDetails(user1);
// userDetails(user2);


// Write a function getEvenNumbers that takes an array of numbers and returns an array of even numbers.

function getEvenNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
        return "Invalid input: Provide an array of numbers.";
    }

    return numbers.filter(num => num % 2 === 0);
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
        return "Invalid input: Provide two arrays.";
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
    return products.filter(product => product.price > minPrice);
}

const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 6000 },
    { name: "Tablet", price: 30000 },
    { name: "Monitor", price: 20000 }
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
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
}

const cart = [
    { name: "Laptop", quantity: 1, price: 80000 },
    { name: "Phone", quantity: 2, price: 6000 },
    { name: "Tablet", quantity: 3, price: 30000 }
];

const totalCost = cartSummary(cart);
// console.log(totalCost);


// Write a function parseURL that accepts a URL string and returns an object with keys like protocol, hostname, and path.

function parseURL(url) {
    const urlObject = new URL(url);
    return {
        protocol: urlObject.protocol.replace(':', ''),
        hostname: urlObject.hostname,
        path: urlObject.pathname
    };
}

const url = "https://www.example.com/path/to/page";
const parsedURL = parseURL(url);
// console.log(parsedURL);


// Write a function countVowels that takes a string as input and returns the number of vowels in the string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;
}

const inputString = "Hello, World!";
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

const text = "A man, a plan, a canal, Panama"; 
const isTextPalindrome = isPalindrome(text); 
console.log(isTextPalindrome);

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
