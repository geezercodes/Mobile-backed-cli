const Currencies = require('../models/currency.model.js');

//commented out code signifies areas that can be added to the product down in the development phase.

// Find a single currency with the code
exports.findOne = (req, res) => {
    Currencies.findOne({"code":req.params.code},{ country: 0, currency: 0, _id: 0, })
    .then(currency => {
        if(!currency) {
            return res.status(404).send({
                message: "The currency code " + req.params.code + "is not available" 
            });            
        }
        res.send(currency);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "The currency code " + req.params.code +   "is not available" 
            });                
        }
        return res.status(500).send({
            message: "Error retrieving currency " + req.params.code
        });
    });
};

// // Create and Save a new currency
// exports.create = (req, res) => {

// };

// // Retrieve and return all currency from the database.
// exports.findAll = (req, res) => {

// };


// // Update a currency identified by the currency in the request
// exports.update = (req, res) => {

// };

// // Delete a currency with the specified code in the request
// exports.delete = (req, res) => {

// };