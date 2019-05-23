var Product = require('../models/productmanager.model');
var Cart = require('../models/cart.model');

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

module.exports.postCreate = async function(req,res){

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

    if(!req.body.describe){
        errors.push('Hãng không hợp lệ');
    };

    if(!req.body.quantity){
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
   

    const newProduct = new Product({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        supplier: req.body.supplier,
        describe: req.body.describe,
        image: req.body.image,
        quantity: req.body.quantity,
    });

    const newProductSaved = await newProduct.save();

    if(newProductSaved === newProduct){
        res.redirect("/productmanager");
    }
    else{
        setTimeout(() => {
            alert("Lỗi tạo sản phẩm !");
            res.redirect("/users");
        }, 3000);
    }
};

module.exports.getDelete = function(req,res){
    Product.remove({_id:req.params.id}, function(err){
        if(err) res.json(err);
        //else res.redirect('/productmanager');
    });

    Cart.remove({product_id: req.params.id}, function(err){
        if(err) res.json(err);
        //else res.redirect('/productmanager');
    });

    res.redirect('/productmanager');
};

//chinh sua du lieu hang hoa
module.exports.getUpdate = async function(req,res){
    const product = await Product.find({_id:req.params.id});
    res.render('productmanager/update',{
        products: product[0],
    });
}

module.exports.postUpdate = function(req,res){
    req.body.image = req.file.path.split('\\').slice(1).join('/');
    Product.update({_id:req.params.id},{
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        supplier: req.body.supplier,
        describe: req.body.describe,
        quantity: req.body.quantity,
        image: req.body.image,
    },function(err){
        if(err) res.json(err);
        else res.redirect('/productmanager');
    });
}
