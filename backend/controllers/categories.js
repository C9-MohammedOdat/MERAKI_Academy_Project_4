const categoryModel=require("../models/categories")
const createNewCategory=(req,res)=>{
const{title,price,provider}=req.body
const category =new categoryModel({
    title,
    price,
    provider,
})
.save()
.then((result)=>{
    res.status(201).json({
        success: true,
        message:"Category Created Successfully"
    })
}).catch((err)=>{
    res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
}
module.exports={createNewCategory}