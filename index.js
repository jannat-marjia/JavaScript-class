 

  //1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.


 function calculateSum(argument1, argument2) {
  return argument1 + argument2;
}

// Example usage:
const total = calculateSum(5, 10);
console.log(total); // Output: 15

 //2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(number) {
  return number % 2 === 0;
}

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.



function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior for empty arrays
  }

  let max = numbers[0]; // Assume the first element is the largest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Update max if a larger number is found
    }
  }

  return max;
}

// Example usage:
const myNumbers = [5, 12, 3, 8, 15, 1];
const largestNumber = findMax(myNumbers);
console.log(largestNumber); // Output: 15

const emptyArray = [];
console.log(findMax(emptyArray)); // Output: undefined

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
  // Split the string into an array of characters
  const charArray = str.split('');

  // Reverse the order of elements in the array
  const reversedArray = charArray.reverse();

  // Join the characters back into a string
  const reversedStr = reversedArray.join('');

  return reversedStr;
}

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.


 function filterOddNumbers(numbers) {
  return numbers.filter(number => number % 2 !== 0);
}
   

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(arr) {
  // Use the spread operator (...) to create a shallow copy of the array
  // This prevents modifying the original array
  const newArr = [...arr]; 

  // Use the built-in sort method with a compare function for numeric sorting
  newArr.sort((a, b) => a - b); 

  return newArr;
}

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"


function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Return as is if not a string or empty
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));  // Output: "Hello"
console.log(capitalizeFirstLetter("world"));  // Output: "World"
console.log(capitalizeFirstLetter("javascript")); // Output: "Javascript"
console.log(capitalizeFirstLetter(""));      // Output: ""
console.log(capitalizeFirstLetter(123));     // Output: 123





