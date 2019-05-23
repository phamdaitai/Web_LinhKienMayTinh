var Cart = require('../models/cart.model');
var User = require('../models/user.model');
var Product = require('../models/productmanager.model');

//xem gio hang
module.exports.getCart = function(req,res){
    var userId = req.cookies.userId;
    Cart.find({user_id: userId}, async function(err,carts){
        const products =[];
        var money = 0;
        for(var i=0; i < carts.length; i++){
            const temp = await Product.find({_id: carts[i].product_id});//lay mang cua 1 phan tu
            products[i] = temp[0];//lay phan tu dau tien cua mang ghi vao mang product
            products[i].quantity = carts[i].quantity;//lấy số lượng sản phẩm được đặt.
            money = money + products[i].price*products[i].quantity;
        }
        
        res.render('cart/cart',{
            products: products,
            money: money
        });
    })
};


//them vao gio hang
module.exports.getIdProduct = async function(req,res){
   var productId = req.params.id;
   var userId = req.cookies.userId;
   console.log(productId+ "--" +userId);

   Cart.findOne({product_id: productId, user_id: userId}, async function(err, cart){
        if(cart){
            await Cart.update({_id: cart._id},{
                product_id: productId,
                user_id: userId,
                quantity: cart.quantity+1 
            });
        }
        else{
            const newCart = new Cart({
                product_id: productId,
                user_id: userId,
                quantity: 1,
            });
            const newUserSaved = newCart.save();
        }

   });

res.redirect('/productdetail/'+productId);
   
};

//Xoa khoi gio hang
module.exports.getDelete = function(req,res){
    console.log('Test');
    Cart.remove({product_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.redirect('/cart/cart');
    });

};
