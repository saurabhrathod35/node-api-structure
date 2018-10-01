var mongoose = require('mongoose');

const PRODUCT = mongoose.Schema({
    category: String,
    productname: String,
    price: Number,
}, {
        timestamps: true
    });

module.exports = mongoose.model('product', PRODUCT);