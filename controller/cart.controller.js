var Cart = require('../models/cart.model');
var User = require('../models/user.model');
var Product = require('../models/productmanager.model');

//xem gio hang
module.exports.getCart = function(req,res){
    var userId = req.cookies.userId;
    Cart.find({user_id: userId}, function(err,cart){
        res.render('cart/cart');
    })
};


//them vao gio hang
module.exports.getIdProduct = async function(req,res){
   var productId = req.params.id;
   var userId = req.cookies.userId;
   console.log(productId+ "--" +userId);

   Cart.findOne({product_id: productId, user_id: userId}, async function(err, cart){
        if(cart){
            //console.log(cart._id);
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