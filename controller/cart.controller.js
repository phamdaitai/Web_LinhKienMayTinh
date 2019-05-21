var Cart = require('../models/cart.model');
var User = require('../models/user.model');
var Product = require('../models/productmanager.model');

module.exports.getCart = function(req,res){
    res.render('cart/cart');
};