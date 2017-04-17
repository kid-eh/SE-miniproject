var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uploadWork = require("../models/portfolio");

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/uploadWork', function(req, res) {
    res.render("uploadWork.ejs");
});

router.post('/uploadWork', function(req, res) {
    uploadWork.create({

        portfolio: req.body.photo
    }, function(err, uploadWork) {
        if (err) {
            console.log(err);
            res.redirect("/uploadWork")
        } else {
            res.redirect("/uploadWork")
        }
    });

});

router.get("/student/:id")

module.exports = router;