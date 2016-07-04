const fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  if (err) {
    console.log("error");
    return;
  }
  var content = data.toString();
  var lines = content.split("\n");
  console.log(lines.length - 1);
});