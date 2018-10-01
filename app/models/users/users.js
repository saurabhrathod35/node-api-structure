var mongoose = require('mongoose');

const USER= mongoose.Schema({
    username:String,
    email:String,
    password:String,
    fullname:String
},{
    timestamps:true
});

module.exports=mongoose.model('users',USER);