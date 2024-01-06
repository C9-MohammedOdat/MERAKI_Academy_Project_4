const express=require("express")
const{createNewOrder,getAllClientsOrders,getAllProvidersOrders,DeleteOrderById}=require("../controllers/orders")
const ordersRouter=express.Router()
ordersRouter.post("/",createNewOrder)
ordersRouter.get("/client/:id",getAllClientsOrders)
ordersRouter.get("/provider/:id",getAllProvidersOrders)
ordersRouter.delete("/:id",DeleteOrderById)
module.exports=ordersRouter