const mongoose = require("mongoose");
const categorySchema =new mongoose.Schema({
    title:{type : String, required:true},
price: {type :Number ,required:true},
provider:{type :mongoose.Schema.Types.ObjectId,ref:"User"},
})
module.exports=mongoose.model("Category",categorySchema)