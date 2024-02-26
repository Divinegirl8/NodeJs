const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName :{type : String,require: true},
    lastName : {type : String},
    email : {type : String,unique: true},
    password : {type : String,require: true},
    // isLogin : {type : Boolean,default:false}
})

const User = mongoose.model("User",userSchema);
module.exports = User;