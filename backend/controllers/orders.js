const orderModel=require("../models/orders")
const createNewOrder=(req,res)=>{
    const{provider,state,client}=req.body
    const order =new orderModel({
        provider,
       state,
        client
    }).save()
    .then((result)=>{
        res.status(201).json({
            success: true,
            message:"Order Created Successfully",
            order:result
        })
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          });
        });
    }
    module.exports={createNewOrder}