
module.exports = function (directoryName, extension, callbackFunction) {
  var fs = require('fs');
  fs.readdir(directoryName, (err, filenames) => {
    if (err) {
      callbackFunction(err);
      return;
    }
    var regString = "." + extension + "$";
    var reg = new RegExp(regString);

    var validFiles = filenames.filter( (filename) => {
      return reg.test(filename);
    });

    callbackFunction(null, validFiles);
  });
};