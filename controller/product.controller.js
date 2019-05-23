var Product = require('../models/productmanager.model');

module.exports.search = async function(req,res){
    var p = req.query.p;
    Product.find({}, function(err,product){
        var products = product.filter(function(pro){
                return pro.name.toLowerCase().indexOf(p.toLowerCase()) != -1;
            });
            for(var i = 0; i < products.length; i++){
                products[i].image = "../"+products[i].image;
            }

        res.render('server',{
            products:products
        });
    });
};