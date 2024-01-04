const mongoose = require("mongoose");
const category =new mongoose.Schema({
    title:{type : String, required:true},
price: {type :Number ,required:true},
provider:{type :mongoose.Schema.Types.ObjectId,ref:"User"},
})
module.exports=mongoose.model(category,"Category")