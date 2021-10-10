var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    user_name:String,
    user_id:Number,
    user_email:String,
    user_password:String,
    user_phone:String,
    user_role:String,
    user_address:String,
    user_orders:[Number] // order IDs off all their orders
});

module.exports = mongoose.model('user', userSchema);