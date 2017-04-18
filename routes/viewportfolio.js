/*var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

//REQUIRE Gym MODEL
var Search = require("../models/studentmodel")
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/viewportfolio', function(req, res) {
    Search.findOne({Username : req.body.Name}, function(err, Search) {
        if (err) {
            res.send(err.message);
        } else if (Search) {
            res.render('studentportfolio', { x: Search });
        }
    });
});
module.exports = router;*/