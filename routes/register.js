var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var student = require("../models/studentmodel");
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", function(req, res) {
    res.render("register.ejs");
});

router.get("/registerfailed", function(req, res) {
    res.render("registerfailed.ejs");
});

router.post('/register', function(req, res) {
        student.create({
            username: req.body.username,
            password: req.body.psw,
        }, function(err, student) {
            if (err) {
                console.log(err);
                res.render("registerfailed")
            } else {
                res.redirect("/login");
            }
        });
    }),

module.exports = router;