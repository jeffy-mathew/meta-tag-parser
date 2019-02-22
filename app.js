var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({     
  extended: true
})); 
//Routes
app.use(require('./router'));
 
var server = app.listen(8000, function () {
  console.log("Server Listening on port 8000");
})