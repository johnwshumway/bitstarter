var express = require('express');

var fs = require('fs');

var buffer = require('buffer');

//var buf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //var buffer = fs.readFileSync("index.html");
  //var indexstring = buf.toString(buffer, 'utf 8');
  //response.send(indexstring);
  var buf = new buffer(fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString());
  //response.send(buffer.toString('utf 8', fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
