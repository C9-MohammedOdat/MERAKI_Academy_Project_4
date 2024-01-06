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
    const getAllClientsOrders=(req,res)=>{
    orderModel.find({client:req.params.id}).populate("client","firstName -_id").populate("provider","firstName -_id").then((result)=>{
        if(result.length){
            res.status(200).json({
                success:true,
                message:`All ${req.params.id} Services `,
                services:result
            })
          }else{
            res.status(200).json({
                success:false,
                message:"No Orders",
            })
          }
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                message:"Server Error",
                error:err
            })
        })
    }
    const getAllProvidersOrders=(req,res)=>{
        orderModel.find({provider:req.params.id}).populate("client","firstName phoneNumber -_id").populate("provider","firstName -_id").then((result)=>{
            if(result.length){
                res.status(200).json({
                    success:true,
                    message:`All ${req.params.id} Services `,
                    services:result
                })
              }else{
                res.status(200).json({
                    success:false,
                    message:"No Orders",
                })
              }
            }).catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"Server Error",
                    error:err
                })
            })
        }
    module.exports={createNewOrder,getAllClientsOrders,getAllProvidersOrders}