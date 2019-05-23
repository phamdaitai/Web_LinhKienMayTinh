var mongoose = require('mongoose');
mongoose.connect = ('mongodb://localhost/express-demo');

var adminSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    avatar: String,
});

var Admin = mongoose.model('Admin', adminSchema, 'admins');

module.exports = Admin;