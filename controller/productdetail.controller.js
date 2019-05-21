var Product = require('../models/productmanager.model');

module.exports.product = function(req,res){
    var id = req.params.id;

    Product.find({_id:id}).then(function(products){
        res.render('productdetail/view',{
                products: products[0]
        });
    });
};