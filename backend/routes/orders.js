const express=require("express")
const{createNewOrder,getAllClientsOrders}=require("../controllers/orders")
const ordersRouter=express.Router()
ordersRouter.post("/",createNewOrder)
ordersRouter.get("/:id",getAllClientsOrders)
module.exports=ordersRouter