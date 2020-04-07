module.exports = (app) => {
    const currencies = require('../controllers/currency.controller.js');

    // Retrieve currency  with with a predefined  db param
    app.get('/currencies/:code', currencies.findOne);
}