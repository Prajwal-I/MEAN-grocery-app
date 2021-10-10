var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = new schema({
    product_name:String,
    product_id:Number,
    product_qty_available:Number,
    product_qty_sold:Number,
    product_qty_available_status:Boolean,
    product_price:Number,
    product_category:String,
    product_image:String,
});

module.exports = mongoose.model('product', productSchema);