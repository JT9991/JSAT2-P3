let myString = "this is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Jeff";

console.log(myString);
console.log(anotherString);
console.log(hello);
console.log(myName);


// length of myString
let lengthOfMyString = myString.length;

// First character of myString
let firstCharacter = myString.charAt(0);

// 11th Character of myString
let eleventhCharacter = myString.charAt(10);


console.log("length =", lengthOfMyString);
console.log("First character =", firstCharacter);
console.log("Eleventh Character =", eleventhCharacter);


// slicing
let sliceIsA = myString.slice(5, 9);

//substring 
let substringThe = anotherString.substring(6, 9);

console.log("Q3 Results: ");
console.log("Slice from myString =", sliceIsA);
console.log("Substring from anotherString = ", substringThe);



// change to upper case
let upperCase = myName.toUpperCase();

// change to lower case 
let lowerCase = myName.toLowerCase();

console.log("\nQ4 Results: ");
console.log("Name in Upper Case =", upperCase);
console.log("Name in Lower Case =", lowerCase);

