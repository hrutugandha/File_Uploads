const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    age: {type:Number, required:true}, 
    ip_address: {required:false},
    avatar: {type:String, required:true}
},{
    versionKey: false,
    timestamp: true,
});

module.exports = mongoose.model('user', userSchema)