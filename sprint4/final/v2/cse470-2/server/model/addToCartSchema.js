const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    
    
});

const AddToCart = mongoose.model('AddToCart', addToCartSchema);
module.exports = AddToCart;
