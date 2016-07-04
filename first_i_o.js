const fs = require('fs');
var contents_of_file = fs.readFileSync(`${process.argv[2]}`).toString();
var lines = contents_of_file.split("\n");
console.log(array_of_new_lines.length - 1);

