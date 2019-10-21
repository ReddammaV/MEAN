var http = require('http');
var express = require('express'); // express npm install
var port = process.env.PORT || 8080; // port running in 8080
var app = express(); // pass app in createServer
var appRoutes = require('./routes/appRoutes'); // we're importing approutes to here
var mongoose = require('mongoose'); // Here we're calling mongoose
var bodyParser = require('body-parser'); //we're calling body-parser
var cors = require('cors'); //npm i cors here we're calling cors

// mongoose.connect('mongodb://localhost/meanDb', { useMongoClient: true });
mongoose.connect('mongodb://localhost/meanDb', { useUnifiedTopology: true, useNewUrlParser: true }); // we're connecting mongoose

app.use(cors()); //here we're calling
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes); // Here we're calling appRoutes to use that

http.createServer(app).listen(port);
console.log("Backend running on port:", port);