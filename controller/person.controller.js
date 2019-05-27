var md5 = require('md5');
var User = require('../models/user.model');
var Product = require('../models/productmanager.model');

//Thong tin ca nha
module.exports.getPerson = async function(req,res){
    var id = req.cookies.userId;
    const Person = await User.find({_id: id});
    res.render('person/person',{
        user: Person[0],
    });
}


//Chinh sua thong tin ca nhan
module.exports.getUpdate = async function(req,res){
    const personUpdate = await User.find({_id:req.params.id});
    res.render('person/update',{
        users: personUpdate[0],
    });
}

module.exports.postUpdate = function(req,res){
    req.body.avartar = req.file.path.split('\\').slice(1).join('/');
    User.update({_id:req.cookies.userId},{
        name: req.body.name,
        phone: req.body.phone,
        andress: req.body.andress,
        password: req.body.password,
        avatar: req.body.avartar
    },function(err){
        if(err) res.json(err);
        else res.redirect('/person/person');
    });
}

module.exports.logout = async function(req,res){

    res.clearCookie('userId');

    res.redirect('/');
};