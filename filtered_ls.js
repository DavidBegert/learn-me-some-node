const fs = require('fs');
var filename = process.argv[2];
var suffix = process.argv[3];
fs.readdir(filename, (err, filenames) => {
  if (err) {
    console.log("error");
    return;
  }
  var regString = "." + suffix + "$";
  var reg = new RegExp(regString);

  var validFiles = filenames.filter( (filename) => {
    return reg.test(filename);
  });
  for(var i = 0; i < validFiles.length; i++) {
    console.log(validFiles[i]);
  };





});