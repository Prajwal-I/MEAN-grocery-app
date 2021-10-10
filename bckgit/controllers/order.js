mongoose = require('mongoose');
orderModel = require('../models/orders');

orderController = {};

orderController.create_order = [
    function(req,res,next){
         //get the latest added order and create the new order_id as prev_order_id +1, if first entry, then order_id =1
        orderModel.findOne({},{},{ sort: { 'created_at' : -1 } },(err,order_recent)=>{
            console.log(order_recent);
            if(err) res.status(500).send(err + 'finding last added error');
            if(order_recent == null) req.body.order_id = 1;
            else req.body.order_id = order_recent.order_id + 1;
            next();
        })
    },
    function(req,res,next){
        orderModel.create(req.body, (err,order)=>{
            if(err) res.status(500).send(err);
            res.send(order);
        })
    }
]

orderController.get_order_by_userId = [
    function(req,res,next){
        let userid = req.body.user_email;
        orderModel.find({"user_email":userid},(err,order)=>{
            if(err) return res.status(500).send(err);
            console.log('=========================');
            console.log(req.body.user_email);
            console.log(order);
            res.send(order);
        })
    },
]

orderController.update_order = [
    function(req,res,next){
        orderModel.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err,order_updated)=>{
            if(err) return res.status(500).send(err);
            res.send(order_updated);
        })
    }
]

orderController.delete_order = [
    function(req,res,next){
        orderModel.findByIdAndRemove(req.body._id,(err,order)=>{
            if(err) return res.status(500).send(err);
            res.send(`order with ID ${order.order_id} deleted`);
        })
    }
]

module.exports = orderController;