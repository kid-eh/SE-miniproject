var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
    res.render("home.ejs");
});

router.get("/student/:id")

module.exports = router;