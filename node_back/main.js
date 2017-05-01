// Dependency
var express = require('express');
var bodyParser = require('body-parser');

// Initialize App
var app = express();
var port = 8080;

// Formating Data
app.use(bodyParser.json());

// Including Routers
var users = require('./routes/user_manupulation/users');
var bill = require('./routes/bill/bill');

// Making Routes
app.use('/users',users);
app.use('/bill',bill);

app.get('/',function(req,res) {
  res.send("Happy to be here!");
}).post ('/',function(req,res) {
  res.send("Happy to be here!");
});

app.listen(port, function() {
  console.log("Server is running on port "+port);
});
