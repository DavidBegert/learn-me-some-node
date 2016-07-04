var mymodule = require('./mymodule.js')  

function callback (err, filteredFilenames) {
  if (err) {
    console.log(err);
    return;
  }

  for(var i = 0; i < filteredFilenames.length; i++) {
    console.log(filteredFilenames[i]);
  }

};

 mymodule(process.argv[2], process.argv[3], callback);