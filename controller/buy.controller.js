var Cart = require('../models/cart.model');
var User = require('../models/user.model');
var Product = require('../models/productmanager.model');
var Payment = require('../models/payment.model');


module.exports.buy = function(req,res){
    var userId = req.cookies.userId;
    Cart.find({user_id: userId}, async function(err,carts){
        const productCart =[];  //ghi gio hang
        var quantity = [];      //ghi so luong con co trong kho
        var money = 0;          //so tien phai tra
        var productInfo = "";

        // Lay san pham 
        for(var i=0; i < carts.length; i++){
            const temp = await Product.find({_id: carts[i].product_id});//lay mang cua 1 phan tu
            productCart[i] = temp[0];//lay phan tu dau tien cua mang ghi vao mang product
            quantity[i] = temp[0].quantity;//ghi lai so luong trong kho
            productCart[i].quantity = carts[i].quantity;//lấy số lượng sản phẩm được đặt.
            money = money + productCart[i].price*productCart[i].quantity;
            productInfo = productInfo+productCart[i].name+": "+productCart[i].quantity+",  \n";
        }
        var errors = [];
        
        // Kiem tra xem co du san pham trong kho va bao loi
        for(var i=0; i < carts.length; i++){
            const temp =await Product.find({_id: carts[i].product_id});//lay mang cua 1 phan tu
            if(temp[0].quantity < productCart[i].quantity){
                errors.push(productCart[i].name+" không đủ số lượng hàng trong kho!");
            };
        }

        if(errors.length){
            res.render('cart/cart',{
                errors: errors,
                products: productCart,
                money: money
            });
            return;
        }
    
        //cap nhat lai kho hang
        for(var i=0; i<productCart.length; i++){
            Product.update({_id: productCart[i]._id},{
                quantity: quantity[i]-productCart[i].quantity,
            },function(err){
                if(err) res.json(err);
            });

            Cart.remove({product_id: productCart[i]._id}, function(err){
                if(err) res.json(err);
            });
        }

        //Lay thong tin nguoi dung

        const userInfo = await User.find({_id: req.cookies.userId});

        //Them vao thanh toan
        if(money > 0){ // Kiểm tra giỏ hàng có bị trống hay k
            const newPayment = new Payment({
                username: userInfo[0].name,
                userphone: userInfo[0].phone,
                userandress: userInfo[0].andress,
                productname: productInfo,
                money: money,
            });
        
            const newPaymentSaved = await newPayment.save();
        
            if(newPaymentSaved === newPayment){
                console.log("Thanh toan thanh cong");
            }
            else{
                setTimeout(() => {
                    alert("Lỗi tạo sản phẩm !");
                }, 3000);
            }
        }


        res.redirect('/cart/cart');
         
    })
    
};


//Thong tin thanh toan
module.exports.payment = function(req,res){
    Payment.find().then(function(payments){
        res.render('payment/payment',{
                payments: payments
        });
    });
};

//xac nhan don hang
module.exports.verify = async function(req,res){
    var id = req.params.id;

    Payment.remove({_id: id}, function(err){
        if(err) res.json(err);
    });

    Payment.find().then(function(payments){
        res.render('payment/payment',{
                payments: payments
        });
    });

};