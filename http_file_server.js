const http = require('http');
const fs = require('fs');

var fileToServe = process.argv[3];

var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(fileToServe);
  readStream.on('open', () => {
    res.writeHead(200, { 'content-type': 'text/plain' }); 
    readStream.pipe(res);
  });
});

server.listen(process.argv[2]);

