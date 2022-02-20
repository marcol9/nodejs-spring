const name = "johnny";
const age = 4;
console.log(`Hello world ${3 + 7}`); //string templating , we can put other things into {}
console.log("Age: " + age); //donn't do like that
console.log("Age: ", age); //do like that. Type coercion, javascript in 1st example changes age type
// to the string. In the 2nd example, type of 2 variables remains same

console.log(2 == "2"); //type coerance happens here
console.log(2 === "2"); // we dont coerce types. We should always use 3 equal signs
console.log(2 !== "2"); 
