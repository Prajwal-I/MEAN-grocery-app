const express = require('express');
const cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//controllers for respective models
var usersController = require('./controllers/user');
var productController = require('./controllers/product');
var orderController = require('./controllers/order');

var port = process.env.port || 9000;

//mongoDB connection
mongoose.connect('mongodb://localhost/groceryDB');

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:4200'
}));
var jsonParser = bodyParser.json();

app.listen(port, ()=>{
    console.log("grocery API listning on " + port);
})


//temporary not-implemented function for the api paths not yet implemented
function notImplemented(req, res){
    id = req.param('id');
    res.writeHead(502,{"content-type": "text/json"});
    res.end('not implemented yet '+id);
}

//CRUD APIs for Users//
app.post('/users',usersController.get_user_by_email_pswd)
app.post('/users/create',usersController.create_user);
app.put('/users',usersController.update_user);
app.delete('/users',usersController.delete_user);

//CRUD APIs for Orders//
app.post('/orders',orderController.get_order_by_userId);
app.post('/orders/create',orderController.create_order);
app.put('/orders',orderController.update_order);
app.delete('/orders',orderController.delete_order);

//CRUD APIs for product//
app.get('/products/all',productController.get_all_products)
app.post('/products',productController.get_product_by_name);
app.post('/products/create',productController.create_product);
app.put('/products',productController.update_product);
app.delete('/products',productController.delete_product);