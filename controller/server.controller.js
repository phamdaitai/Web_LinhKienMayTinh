var Product = require('../models/productmanager.model');
var User = require('../models/user.model');
var Ad = require('../models/advertisement.model');

module.exports.server = async function(req,res){
    var cookie = req.cookies.userId;
    const user = await User.find({_id: cookie});
    const ad = await Ad.find();        //lay cac quang cao
    
    //Lay ra 3 quang cao
    var x,y,z;
    var x = Math.floor((Math.random() * ad.length)+0);
    do{
        var y = Math.floor((Math.random() * ad.length)+0);
    }while(y===x);
    do{
        var z = Math.floor((Math.random() * ad.length)+0);
    }while(z===x || z===y);
    
    var ads = [];
    ads[0] = ad[x];
    ads[1] = ad[y];
    ads[2] = ad[z];

    Product.find().then(function(products){
        res.render('server',{
                products: products,
                cookie: cookie,
                user: user[0],
                ads: ads,
        });
    });
};