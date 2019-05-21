var db = require('../db');
var User = require('../models/user.model');

module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }
    //Kiem tra dang nhap admin
    User.find({phone:req.cookies.userId},function(err,user){
        if(err){
            console.log(err);
            res.render('auth/login');
            return;
        }

        if(!user){
            res.redirect('/auth/login');
            return;
        }
        res.locals.user = user;

        next();

    });
    
};