var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var adSchema = new mongoose.Schema({
    name: String,
    link: String,
    image: String,
});

var Ad = mongoose.model('Ad', adSchema, 'advertisement');

module.exports = Ad;