var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var Search = require("../models/studentmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/allportfolios', function(req, res) {
    Search.find({}, function(err, search) {
        if (err) {
            res.send(err.message);
        } else if (search) {
            res.render('studentportfolio', { x: search });
        }
    });
});

router.post('/allportfolios', (function(req, res) {
    Search.findOne({Username : req.body.Name}, function(err, search) {
        if (err) {
            res.send(err.message);
        }
       else if (search) {
            res.render('studentportfolio', { x: search });
        } 
    })
}));

module.exports = router;