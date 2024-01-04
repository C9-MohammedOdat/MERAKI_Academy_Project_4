import mongoose from "mongoose";
const role = new mongoose.Schema({
    role:{type:String},
    permissions:[{type:String}]
})
module.exports=mongoose.model("Role",role)