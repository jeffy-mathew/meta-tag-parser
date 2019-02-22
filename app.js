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
 
var server = app.listen(obj.port, function (err) {
  console.log("Server Listening on port " + obj.port);
});

server.on("error",(err) =>{
  // handle port in use exception
  if(err.errno === 'EADDRINUSE')
         console.log("port " + obj.port + " already in use");
    else
         console.log(err);
  process.exit(1);
});