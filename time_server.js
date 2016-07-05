var net = require('net')  
var port = process.argv[2];
var server = net.createServer(function (socket) {  
  var date = new Date()
  var yearString = date.getFullYear().toString();
  var monthString = ("0" + (date.getMonth() + 1).toString()).slice(-2);
  var dayString = ("0" + date.getDate().toString()).slice(-2);
  var hourString = ("0" + date.getHours().toString()).slice(-2);
  var minuteString = ("0" + date.getMinutes().toString()).slice(-2);
  var dateString = yearString + "-" + monthString + "-" + dayString + " " + hourString + ":" + minuteString + "\n";
  socket.write(dateString);
  socket.end(); 
})  
server.listen(port);