var Product = require('../models/productmanager.model');

module.exports.product = function(req,res){
    Product.find().then(function(products){
        res.render('productmanager/productmanager',{
                products: products
        });
    })
};

module.exports.getCreate = function(req,res){
    res.render('productmanager/create');
};

module.exports.postCreate = function(req,res){

    console.log(req.body);

    var errors = [];
    if(!req.body.name){
        errors.push('Tên không hợp lệ');
    };

    if(!req.body.type){
        errors.push('Loại không hợp lệ');
    };

    if(!req.body.price){
        errors.push('Giá không hợp lệ');
    };

    if(!req.body.supplier){
        errors.push('Hãng không hợp lệ');
    };

    if(errors.length){
        res.render('productmanager/create',{
            errors: errors,
            values: req.body
        });
        return;
    }

    req.body.image = req.file.path.split('\\').slice(1).join('/');
   

    new Product({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        supplier: req.body.supplier,
        image: req.body.image,
    }).save(function(err, doc){
        if(err) res.json(err);
        else res.send('Successfully!');
    });
    res.redirect('/productmanager');
};