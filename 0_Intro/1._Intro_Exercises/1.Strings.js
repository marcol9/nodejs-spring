// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";
const floatOne = parseFloat(numberOne);
const floatTwo = parseFloat(numberTwo);
const result = floatOne + floatTwo;
console.log(result);

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const aFloatOne = parseFloat(anotherNumberOne);
const aFloatTwo = parseFloat(anotherNumberTwo);
let aResult = aFloatOne + aFloatTwo;
aResult = aResult.toFixed(2);
console.log(aResult);
// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

let avg = (one+two+three)/3
avg = avg.toFixed(5);
console.log(avg);

// Show in the console the avg. with 5 decimals

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
console.log(letters.charAt(2));
// Get me the character "c"

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";
const result2 = fact.replace("j","J");
console.log(result2)

// capitalize the J in Javascript

// --------------------------------------
