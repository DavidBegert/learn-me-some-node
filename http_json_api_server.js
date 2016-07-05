const http = require('http');
const url = require('url');

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var url_obj = url.parse(req.url, true);
  var date = new Date(url_obj.query.iso);
  if (url_obj.pathname == '/api/parsetime') {
    // console.log(date.toISOString());
    res.end(JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
      })
    );
  }
  if (url_obj.pathname == '/api/unixtime'){
    res.end(JSON.stringify({
      "unixtime": date.getTime()
    }));
  }

});

server.listen(process.argv[2]);

// //Add second endpoint for the path '/api/unixtime' which accepts the same  
//   query string but returns UNIX epoch time in milliseconds (the number of  
//   milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
//   For example:  
   
//      { "unixtime": 1376136615474 }  