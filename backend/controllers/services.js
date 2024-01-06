const serviceModel=require("../models/services")
const createNewService=(req,res)=>{
const{title,price,provider}=req.body
const service =new serviceModel({
    title,
    price,
    provider,
})
.save()
// .populate("user","_id")
.then((result)=>{
    res.status(201).json({
        success: true,
        message:"service Created Successfully"
    })
}).catch((err)=>{
    res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
}
module.exports={createNewService}