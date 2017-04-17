var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portfolioSchema = mongoose.Schema({
    portfolio: {
        type: String,
    }
})

module.exports = mongoose.model("portfolio", portfolioSchema);