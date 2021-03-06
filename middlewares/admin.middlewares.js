var User = require('../models/user.model');

module.exports.requireAuth = function(req,res,next){
    if(!req.cookies.adminId){
        res.redirect('/admin/login');
        return;
    }
    //Kiem tra dang nhap admin
    User.find({_id: req.cookies.adminId},function(err,user){
        if(err){
            console.log(err);
            res.render('admin/login');
            return;
        }

        if(!user){
            res.redirect('/admin/login');
            return;
        }
        res.locals.user = user;

        next();

    });
    
};