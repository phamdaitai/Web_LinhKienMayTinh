
var Ad = require('../models/advertisement.model');

//Xem thong tin quang cao
module.exports.getAd = async function(req,res){
    const listAds = await Ad.find();
    for(var i=0; i<listAds.length; i++){
        listAds[i].image='../'+listAds[i].image;
    };

    res.render('advertisement/ad',{
        ads: listAds
    });
};

//Them quang cao
module.exports.getCreate = function(req,res){
    res.render('advertisement/create');
;}

//Them vao DB
module.exports.postCreate = async function(req,res){
    console.log(req.body);

    var errors = [];
    if(!req.body.name){
        errors.push('Tên miêu tả không hợp lệ');
    };

    if(!req.body.link){
        errors.push('Đường dẫn không hợp lệ');
    };
    req.body.image = req.file.path.split('\\').slice(1).join('/');

    const newAd = new Ad({
        name: req.body.name,
        link: req.body.link,
        image: req.body.image
    });

    const newAdSaved = await newAd.save();

    if(newAdSaved === newAd){
        res.redirect("/advertisement/ad");
    }
    else{
        setTimeout(() => {
            alert("Lỗi tạo quảng cáo !");
            res.redirect("/advertisement/ad");
        }, 3000);
    }
    
 };

//Xoa quang cao
 module.exports.delete = function(req,res){
    Ad.remove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.redirect('/advertisement/ad');
    });
};