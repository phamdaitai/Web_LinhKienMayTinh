var User = require('../models/user.model');

module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.userId){
        res.redirect('/users/login');
        return;
    }
    //Kiem tra dang nhap admin
    User.find({_id: req.cookies.userId},function(err,user){
        if(err){
            console.log(err);
            res.render('users/login');
            return;
        }

        if(!user){
            res.redirect('/users/login');
            return;
        }
        res.locals.user = user;

        next();

    });
    
};