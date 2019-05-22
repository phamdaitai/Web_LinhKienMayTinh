var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var cartSchema = new mongoose.Schema({
    product_id: String,
    user_id: String,
    quantity: Number
});

var Cart = mongoose.model('Cart', cartSchema, 'carts');

module.exports = Cart;