var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    andress: String,
    password: String,
    avatar: String,
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;