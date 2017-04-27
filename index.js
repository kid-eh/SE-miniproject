var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/KIDminiproj");

var app = express();
app.set("view engine", "ejs");

//REQUIRE MODELS
var student = require("./models/studentmodel");
var uploadWork = require("./models/portfolio");

//APP CONFIG
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use(require("./routes/home.js"));
app.use(require("./routes/register.js"));
app.use(require("./routes/student.js"));
app.use(require("./routes/viewstudentportfolio.js"));
// /app.use(require("./routes/viewportfolio.js"));


// SERVER LISTENING
app.listen(3000, function() {
    console.log("Server is Running on Port 3000");
});