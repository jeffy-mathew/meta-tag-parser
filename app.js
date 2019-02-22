var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
// get configuration settings
var obj = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({     
  extended: true
})); 

//Routes
app.use(require('./router'));

var port = obj.port || 3000;
var server = app.listen(port, function (err) {
  console.log("Server Listening on port " + port);
});

server.on("error",(err) =>{
  // handle port in use exception
  if(err.errno === 'EADDRINUSE')
         console.log("port " + port + " already in use");
    else
         console.log(err);
  process.exit(1);
});