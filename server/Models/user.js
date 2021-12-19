const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    googleId:{
        type:String,
        required:true,
    }
});

const userModel = mongoose.model('user',userSchema);

module.exports={
    userModel,
}