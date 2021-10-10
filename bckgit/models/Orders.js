var mongoose = require('mongoose');
var schema = mongoose.Schema;

var orderSchema = new schema({
    order_id:Number,
    user_email:String,
    order_items:[Number], // store all product ids of this order
    order_expected_delivery_date:Date,
    order_delivered_date:Date,
    order_addres:String,
    order_status:String, // placed, accepted, rejected,
    order_price:Number,
    order_comment:String
});

module.exports = mongoose.model('order', orderSchema);