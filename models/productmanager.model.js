var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var productSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: String,
    supplier: String,
    image: String,
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;