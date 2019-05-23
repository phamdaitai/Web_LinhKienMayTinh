var md5 = require('md5');

var User = require('../models/user.model');
var Admin = require('../models/admin.model');

module.exports.login = function(req,res){
    res.render('admin/login');
};


module.exports.portLogin = function(req,res){
    var phone = req.body.phone;
    var password = req.body.password;
    
    password=md5(password);

    Admin.findOne({phone:phone, password:password}, function(err,admin){
        if(err){
            console.log(err);
            res.render('admin/login');
            return;
        }
        if(!admin){
            console.log(err);
            res.render('admin/login');
            return;
        }
        res.cookie('adminId', admin._id);
        res.redirect('/users');
    });
}


module.exports.getCreate = function(req,res){
    res.render('admin/create');
};

//Tao nguoi dung-ghi vao db
module.exports.postCreate = async function(req,res){
    console.log(req.body);

    var errors = [];
    if(!req.body.name){
        errors.push('Tên không hợp lệ');
    };

    if(!req.body.phone){
        errors.push('Số điện thoại không hợp lệ');
    };

    if(!req.body.email){
        errors.push('Email không hợp lệ');
    };

    if(!req.body.password){
        errors.push('Mật khẩu không hợp lệ');
    };

    if(errors.length){
        res.render('admin/create',{
            errors: errors,
            values: req.body
        });
        return;
    }

    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
   
    req.body.password = md5(req.body.password);

    const newAdmin = new Admin({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
    });

    const newAdminSaved = await newAdmin.save();

    if(newAdminSaved === newAdmin){
        res.redirect("/admin/list");
    }
    else{
        setTimeout(() => {
            alert("Lỗi tạo tài khoản admin !");
            res.redirect("/admin/list");
        }, 3000);
    }
    
 };

//Xem danh sach admin
module.exports.list = function(req,res){
    Admin.find().then(function(admins){
        res.render('admin/list',{
                admins: admins
        });
    });
};

module.exports.detail = function(req,res){
    var id = req.cookies.adminId;
    Admin.find({_id:id}).then(function(admin){
        res.render('admin/detail',{
                admin: admin[0]
        });
    });
}



//Chinh sua du lieu admin
module.exports.getUpdate = async function(req,res){
    const adminUpdated = await Admin.find({_id:req.params.id});
    res.render('admin/update',{
        admin: adminUpdated[0],
    });
}

module.exports.postUpdate = function(req,res){
    req.body.avartar = req.file.path.split('\\').slice(1).join('/');
    req.body.password = md5(req.body.password);
    Admin.update({_id:req.params.id},{
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avartar
    },function(err){
        if(err) res.json(err);
        else res.redirect('/admin/list');
    });
}