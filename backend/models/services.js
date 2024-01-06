const mongoose = require("mongoose");
const serviceSchema =new mongoose.Schema({
    title:{type : String},
price: {type :Number },
provider:{type :mongoose.Schema.Types.ObjectId,ref:"User"},
})
module.exports=mongoose.model("Service",serviceSchema)