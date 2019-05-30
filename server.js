var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web-phu-kien');

var serverRoute = require('./router/server.route');
var userRoute = require('./router/user.route');
var adminRoute = require('./router/admin.route');
var productRoute = require('./router/product.route');
var productManagerRoute = require('./router/productmanager.route');
var producDetailRoute = require('./router/productdetail.route');
var cartRoute = require('./router/cart.route');
var personRoute = require('./router/person.router');
var buyRoute = require('./router/buy.route');
var advertisementRoute = require('./router/advertisement.route');

var adminMiddlewares = require('./middlewares/admin.middlewares');
var userMiddleWares = require('./middlewares/user.middlewares');

var Product = require('./models/productmanager.model');
var User = require('./models/user.model');
var Ad = require('./models/advertisement.model');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(express.static('public'));


app.use('/',serverRoute);

app.use('/users/', userRoute);

app.use('/admin', adminRoute);

app.use('/products/', productRoute);

app.use('/productmanager/', adminMiddlewares.requireAuth, productManagerRoute);

app.use('/productdetail/', producDetailRoute);

app.use('/cart/',userMiddleWares.requireAuth, cartRoute);

app.use('/person/', personRoute);

app.use('/buy', buyRoute);

app.use('/advertisement/', adminMiddlewares.requireAuth, advertisementRoute);


app.listen(port, function(){
    console.log('server is running:' + port);
})


