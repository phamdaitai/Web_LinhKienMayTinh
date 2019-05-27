var Product = require('../models/productmanager.model');
var User = require('../models/user.model');

module.exports.search = async function(req,res){
    var p = req.query.p;
    var cookie = req.cookies.userId;
    const user = await User.find({_id: cookie});

    Product.find({}, function(err,product){
        var products = product.filter(function(pro){
                return pro.name.toLowerCase().indexOf(p.toLowerCase()) != -1;
            });
            for(var i = 0; i < products.length; i++){
                products[i].image = "../"+products[i].image;
            }

        res.render('server',{
            products: products,
            user: user[0],
            cookie: cookie
        });
    });
};