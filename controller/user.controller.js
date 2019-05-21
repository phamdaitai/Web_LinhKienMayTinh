var md5 = require('md5');

var User = require('../models/user.model');

//trang chu nguoi dung
module.exports.index = function(req,res){
    User.find().then(function(users){
        res.render('users/index',{
                users: users
        });
    });
};

module.exports.getCreate = function(req,res){
    res.render('users/create');
};

//Tao nguoi dung-ghi vao db
module.exports.postCreate = async function(req,res){



    var errors = [];
    if(!req.body.name){
        errors.push('Tên không hợp lệ');
    };

    if(!req.body.phone){
        errors.push('Số điện thoại không hợp lệ');
    };

    if(!req.body.andress){
        errors.push('Địa chỉ không hợp lệ');
    };

    if(!req.body.password){
        errors.push('Mật khẩu không hợp lệ');
    };

    if(errors.length){
        res.render('users/create',{
            errors: errors,
            values: req.body
        });
        return;
    }

    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
   
    req.body.password = md5(req.body.password);

    const newUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        andress: req.body.andress,
        password: req.body.password,
        avatar: req.body.avatar,
    });

    const newUserSaved = await newUser.save();

    if(newUserSaved === newUser){
        res.redirect("/users");
    }
    else{
        setTimeout(() => {
            alert("Error create user !");
            res.redirect("/users");
        }, 3000);
    }
    
 };

//tim kiem nguoi dung 
 module.exports.search = function(req,res){
    var q = req.query.q;
    User.find({}, function(err,user){
        console.log(user);
        var users = user.filter(function(u){
                return u.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
            });
        res.render('users/index',{
            users:users
        });
    });
};

//dang nhap
module.exports.login = function(req, res){
    res.render('users/login',{
    });
}


//view
module.exports.userDetail = function(req,res){
    var id = req.params.id;

    User.find({_id:id}).then(function(users){
        res.render('users/view',{
                users: users
        });
    });
}

//Xoa nguoi dung
module.exports.getDelete = function(req,res){
    User.remove({_id:req.params.id}, function(err){
        if(err) res.json(err);
        else res.redirect('/users');
    });
};

//Chinh sua du lieu nguoi dung
module.exports.getUpdate = async function(req,res){
    const userUpdated = await User.find({_id:req.params.id});
    res.render('users/update',{
        users: userUpdated[0],
    });
}

module.exports.postUpdate = function(req,res){
    User.update({_id:req.params.id},{
        name: req.body.name,
        phone: req.body.phone,
        andress: req.body.andress,
        password: req.body.password,
        image: req.body.image
    },function(err){
        if(err) res.json(err);
        else res.redirect('/users/'+ req.params.id);
    });
}