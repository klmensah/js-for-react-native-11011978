// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let strings = ["Learning", "Mobile", "Application", "Development", "in", "Javascript", "is", "great"]
;
let processedNumbers = processArray(numbers);
console.log(formatArrayStrings(strings, processedNumbers)); // ["Learning", "Mobile", "Application", "Development", "in", "Javascript", "is", "great"]
