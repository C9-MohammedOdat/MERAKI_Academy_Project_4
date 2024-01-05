const mongoose = require("mongoose");
const order = new mongoose.Schema({
    client:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    state:{type:String},
    provider:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})
module.exports=mongoose.model(order,"Order")