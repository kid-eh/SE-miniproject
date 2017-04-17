var express = require("express");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var studentSchema = new Schema ({
	username : {
		type: String,
		unique: true
	}, 
	password : {
		type: String,
	},
})

var student = mongoose.model("student", studentSchema);
module.exports = student;