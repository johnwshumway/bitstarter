var express = require('express');

var fs = require('fs');

//var buf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var buffer = fs.readFileSync'(index.html');
  var indexstring = buffer.buf.toString();
  response.send(indexstring);
  //var buffer = new buffer();
  //response.send(buffer.toString('utc 8', fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
