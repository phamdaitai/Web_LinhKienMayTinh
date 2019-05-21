var md5 = require('md5');

var User = require('../models/user.model');

module.exports.login = function(req,res){
    res.render('auth/login');
};


module.exports.portLogin = function(req,res){
    var phone = req.body.phone;
    var password = req.body.password;
    password=md5(password);

    User.findOne({phone:phone, password:password}, function(err,user){
        if(err){
            console.log(err);
            res.render('auth/login');
            return;
        }
        if(!user){
            console.log(err);
            res.render('auth/login');
            return;
        }
        res.cookie('userId', user._id);
        res.redirect('/users');
    });
}
