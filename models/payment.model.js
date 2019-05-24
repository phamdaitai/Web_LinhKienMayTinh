var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var paymentSchema = new mongoose.Schema({
    username: String,
    userphone: String,
    productname: String,
    money: Number,
});

var Payment = mongoose.model('Payment', paymentSchema, 'payment');

module.exports = Payment;