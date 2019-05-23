var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web-phu-kien');

var userRoute = require('./router/user.route');
var adminRoute = require('./router/admin.route');
var productRoute = require('./router/product.route');
var productManagerRoute = require('./router/productmanager.route');
var producDetailRoute = require('./router/productdetail.route');
var cartRoute = require('./router/cart.route');

var adminMiddlewares = require('./middlewares/admin.middlewares');
var userMiddleWares = require('./middlewares/user.middlewares');

var Product = require('./models/productmanager.model');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', function(req,res){
    Product.find().then(function(products){
        res.render('server',{
                products: products
        });
    });
});


app.use('/users/', userRoute);
app.use('/admin', adminRoute);
app.use('/products', productRoute);
app.use('/productmanager/', adminMiddlewares.requireAuth, productManagerRoute);
app.use('/productdetail/', producDetailRoute);
app.use('/cart/',userMiddleWares.requireAuth, cartRoute);

app.listen(port, function(){
    console.log('server is running:' + port);
})


app.use(express.static('public'));