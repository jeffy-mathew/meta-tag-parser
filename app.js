var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
//Routes
app.use(require('./router'));
 
var server = app.listen(8000, function () {
  console.log("Server Listening on port 8000");
})