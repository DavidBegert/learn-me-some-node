const http = require('http');

var url = process.argv[2];
http.get(url, function(response) {
  response.on('data', function(data) {
    console.log(data.toString());
  });
  response.on('err', function(err){
    console.log("ERROR", err);

  });


});