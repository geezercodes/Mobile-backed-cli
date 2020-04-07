//Define the data schema for the fields to be included in the database.

const mongoose = require('mongoose');

const CurrencySchema = mongoose.Schema({
    country: String,
    Currency: String,
    code: String
});

module.exports = mongoose.model('currencies', CurrencySchema);