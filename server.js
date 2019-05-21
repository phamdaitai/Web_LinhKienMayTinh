var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web-phu-kien');

var userRoute = require('./router/user.route');
var productManagerRoute = require('./router/productmanager.route');
var authRoute = require('./router/auth.route');
var producDetailRoute = require('./router/productdetail.route');
var cartRoute = require('./router/cart.route');

var authMiddlewares = require('./middlewares/auth.middlewares');

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


app.use('/users/', authMiddlewares.requireAuth, userRoute);
app.use('/productmanager/', authMiddlewares.requireAuth, productManagerRoute);
app.use('/auth', authRoute);
app.use('/productdetail/', producDetailRoute);
app.use('/cart/', cartRoute);

app.listen(port, function(){
    console.log('server is running:' + port);
})


app.use(express.static('public'));