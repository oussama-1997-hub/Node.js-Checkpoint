const fs = require('fs');

// Write data to the file
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read data from the file and console.log
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
