const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    client:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    state:{type:String},//pendding ,proccessing,complited
    provider:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    notes:{type:String},
location:{type:String}, // [longitude, latitude]
price: {type :Number },
unites:{type:Number}

})
module.exports=mongoose.model("Order",orderSchema)