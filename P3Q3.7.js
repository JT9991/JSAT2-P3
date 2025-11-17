//  import file system module
let fs = require('fs');

// Create string to save text file
let myText = "This is my text that I am saving into output.txt";

// Write the string to output.txt
fs.writeFileSync("output.txt", myText);

// confirm to the console
console.log("output.txt has been created and written successfully.");
