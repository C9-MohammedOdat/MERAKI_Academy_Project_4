const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const user = new mongoose.Schema({
    firstName:{type:String, required:true},
lastName: {type:String} ,
phoneNumber:{type:Number, required:true},
location:[{type:Number, required:true}], // [longitude, latitude]
email:{ type:String, unique:true, required:true},
password: {type:String, required:true},
category:{ type: mongoose.Schema.Types.ObjectId, ref: "Category"},
image:{type:String},
role :{type :mongoose.Schema.Types.ObjectId,ref:"Role"}
})
userSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  });
module.exports=mongoose.model("User",user)