// Import file system module
let fs = require('fs');

// Read text file i.e. output.txt
let fileData = fs.readFileSync("output.txt", "utf8");

// Display contents on screen
console.log("contents of output.txt");
console.log(fileData);

