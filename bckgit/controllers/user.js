mongoose = require('mongoose');
userModel = require('../models/Users');

usersController = {};

usersController.create_user = [
    function(req,res,next) {
        //check if user with email and password exists already
        userModel.find({$and:[{"user_password":req.body.user_password},{"user_email":req.body.user_email}]},(err,user)=>{
            if(err) return res.status(500).send(err + 'checking user exists error');
            if(user.length > 0) {
                console.log(user);
                return res.send('user exists');
            }
            next();
        })
    },
    function(req,res,next){
         //get the latest added user and create the new user_id as prev_user_id +1, if first entry, then user_id =1
         userModel.findOne({},{},{ sort: { 'created_at' : -1 } },(err,user_recent)=>{
            console.log(user_recent);
            if(err) res.status(500).send(err + 'finding last added error');
            if(user_recent == null) req.body.user_id = 1;
            else req.body.user_id = user_recent.user_id + 1;
            next();
        })
    },
    function(req,res,next){
        userModel.create(req.body, (err,user)=>{
            if(err) res.status(500).send(err);
            res.send(user);
        })
    }
]

usersController.get_user_by_email_pswd = [
    function(req,res,next){
        userModel.find({$and:[{"user_password":req.body.user_password},{"user_email":req.body.user_email}]},(err,user)=>{
            if(err) return res.status(500).send(err);
            console.log(user + 'user returend');
            console.log(req.body.user_password + 'request bosyyyyy');
            res.send(user);
        })
    },
]

usersController.update_user = [
    function(req,res,next){
        userModel.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err,user_updated)=>{
            if(err) return res.status(500).send(err);
            res.send(user_updated);
        })
    }
]

usersController.delete_user = [
    function(req,res,next){
        userModel.findByIdAndRemove(req.body._id,(err,user)=>{
            if(err) return res.status(500).send(err);
            res.send(`user with ID ${user.user_id} deleted`);
        })
    }
]

module.exports = usersController;