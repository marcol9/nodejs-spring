// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
  message: "Hello, earthling! I bring peace.",
};
console.log(alienMessage.message);

// Log the message

// --------------------------------------
// Exercise 2 - Defining an object.
const marco = {
  name: "Marco",
  age: 880,
};
console.log(marco);

// Create an object that has your name and age.

// --------------------------------------
// Exercise 3 - Add a property

const stackOverflow = {};
stackOverflow.isAllowed = true;
console.log(stackOverflow);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = {
  description: "The best song in the world.",
};
delete thisSong.description;
thisSong.about = "Just a tribute.";
console.log(thisSong);
// remove the property "description" and add a property called "about" that should say "Just a tribute."

// --------------------------------------
