function greetings() {
  console.log("hell0");
}
greetings();

const greetingsinAVar = function () {
  console.log("Hello world in a variable");
};

const greetingsArrowFunction = () => {
  console.log("Hello world in an arrow function");
};

function doingSomething(anyFunctionReference, name) {
  anyFunctionReference(name);
}
const running = (name) => console.log(`${name} is running`);
const drinking = (name) => console.log(`${name} is drinking`);
const sleeping = (name) => console.log(`${name} is sleeping`);
doingSomething(running, "john");
doingSomething(drinking, "marco");
doingSomething(sleeping, "pepe");

const result = doingSomething((name) => name + " is studying", "Juan");
result();