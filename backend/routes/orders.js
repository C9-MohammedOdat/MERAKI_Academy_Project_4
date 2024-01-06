const express=require("express")
const{createNewOrder}=require("../controllers/orders")
const ordersRouter=express.Router()
ordersRouter.post("/",createNewOrder)
module.exports=ordersRouter