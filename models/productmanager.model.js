var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var productSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    supplier: String,
    describe: String,
    image: String,
    quantity: Number,
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;