var Product = require('../models/productmanager.model');
var User = require('../models/user.model');
var Ad = require('../models/advertisement.model');


//Tim kiem san pham
module.exports.search = async function(req,res){
    var p = req.query.p;
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
    for(var i=0; i<3; i++){
        ads[i].image = '../'+ ads[i].image;
    };

    Product.find({}, function(err,product){
        var products = product.filter(function(pro){
                return pro.name.toLowerCase().indexOf(p.toLowerCase()) != -1;
            });
            for(var i = 0; i < products.length; i++){
                products[i].image = "../"+products[i].image;
            }

            //phân trang
            var page = parseInt(req.query.page) || 1;
            var perPage = 9;

            var start = (page-1)*perPage;
            var end = page * perPage;

            var numberPage = products.length;
            numberPage = Math.ceil(numberPage/perPage);

        res.render('server',{
            products: products.slice(start,end),
            user: user[0],
            cookie: cookie,
            ads: ads,
            page: page,
            numberPage: numberPage,
        });
    });
};

//supplier
module.exports.supplier = async function(req,res){
    var supplier = req.query.sup;//lay ra tieu muc
    const products = await Product.find({supplier: supplier});
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
    for(var i=0; i<3; i++){
        ads[i].image = '../../'+ ads[i].image;
    };
    
    for(var i=0; i<products.length; i++){
        products[i].image = "../../"+products[i].image;
    }

    //phân trang
    var page = parseInt(req.query.page) || 1;
    var perPage = 9;

    var start = (page-1)*perPage;
    var end = page * perPage;

    var numberPage = products.length;
    numberPage = Math.ceil(numberPage/perPage);

    res.render('server',{
                products: products.slice(start,end),
                cookie: cookie,
                user: user[0],
                ads: ads,
                page: page,
                numberPage: numberPage,
    });
};
