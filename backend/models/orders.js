const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    client:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    state:{type:String},
    provider:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})
module.exports=mongoose.model("Order",orderSchema)