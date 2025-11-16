// string utils

let myString = "This is a string";
let anotherString = "   Another String";
let hello = "Hello there!";
let myName = "Jeff";

// concat hello string and myName string
let helloName = hello.concat(" ", myName);

// trim to remove spaces from anotherString
let trimmedAnother = anotherString.trim();

// replacing "is a" with an empty space in myString
let replacedMyString = myString.replace("is a", "");

// breaking the string with split method
let splitMyString = myString.split(" ");


console.log("\nQ3.5 Results =");
console.log("concat =",helloName);
console.log("trim =",trimmedAnother);
console.log("replace =",replacedMyString);
console.log("split =",splitMyString);