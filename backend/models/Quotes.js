const Quote = require('../models/Quotes');
const mongoose = require('mongoose')
const QuotesSchema = new mongoose.Schema({
    content: String,
    author: String,
})
module.exports = mongoose.model('quote', QuotesSchema)