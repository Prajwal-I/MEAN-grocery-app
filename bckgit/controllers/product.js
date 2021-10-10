mongoose = require('mongoose');
productModel = require('../models/products');

productController = {};

productController.create_product = [
    function(req,res,next) {
        //check if product with same name exists already
        productModel.find({"product_name":req.body.product_name},(err,product)=>{
            if(err) return res.status(500).send(err + 'checking product exists error');
            if(product.length > 0) {
                console.log(product);
                return res.send('product exists');
            }
            next();
        })
    },
    function(req,res,next){
         //get the latest added product and create the new product_id as prev_product_id +1, if first entry, then product_id =1
         productModel.findOne({},{},{ sort: { 'created_at' : -1 } },(err,product_recent)=>{
            console.log(product_recent);
            if(err) res.status(500).send(err + 'finding last added error');
            if(product_recent == null) req.body.product_id = 1;
            else req.body.product_id = product_recent.product_id + 1;
            next();
        })
    },
    function(req,res,next){
        productModel.create(req.body, (err,product)=>{
            if(err) res.status(500).send(err);
            res.send(product);
        })
    }
]

productController.get_all_products = [
    function(req,res,next){
        productModel.find({},(err,products)=>{
            if(err) res.status(500).send(err);
            res.send(products);
        })
    }
]

productController.get_product_by_name = [
    function(req,res,next){
        let name = req.body.product_name;
        console.log(name);
        productModel.find({"product_name":name},(err,product)=>{
            if(err) return res.status(500).send(err);
            console.log(product);
            console.log(name);
            res.send(product);
        })
    },
]

productController.update_product = [
    function(req,res,next){
        productModel.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err,product_updated)=>{
            if(err) return res.status(500).send(err);
            res.send(product_updated);
        })
    }
]

productController.delete_product = [
    function(req,res,next){
        productModel.findByIdAndRemove(req.body._id,(err,product)=>{
            if(err) return res.status(500).send(err);
            res.send(`product with ID ${product.product_id} deleted`);
        })
    }
]

module.exports = productController;