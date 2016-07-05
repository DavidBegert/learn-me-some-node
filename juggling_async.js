var bl = require('bl');
const http = require('http');


function getRequest(i) {
  var url = process.argv[i];
  if (url == undefined){
    return;
  }
  http.get(url, function(response) {
    response.pipe(bl(function(err, data){
      console.log(data.toString());
      getRequest(getRequest(i + 1))
    }));
  });
}
getRequest(2);
// var promise1 = http.get(url1, function(response) {
//   // response.pipe(bl(function(err, data){
//   //   if (err) {
//   //     console.log("error!!!");
//   //     return;
//   //   }
//   //   // console.log(data.toString());
//   // }));
// });

// var promise2 = http.get(url2, function(response) {
//   // response.pipe(bl(function(err, data){
//   //   if (err) {
//   //     console.log("error!!!");
//   //     return;
//   //   }
//   //   // console.log(data.toString());
//   // }));
// });

// var promise3 = http.get(url3, function(response) {
//   // response.pipe(bl(function(err, data){
//   //   if (err) {
//   //     console.log("error!!!");
//   //     return;
//   //   }
//   //   // console.log(data.toString());
//   // }));
// });

// Promise.all([promise1, promise2, promise3]).then(function(responses) {
//   for(var i = 0; i < 3; i++) {
//     responses[i].pipe(bl(function(err,data){
//       console.log("bam")
//       console.log(data.toString());
//     }));
//   }

// });