const express=require("express")
const{createNewOrder,getAllClientsOrders,getAllProvidersOrders,deleteOrderById,updateOrderById}=require("../controllers/orders")
const ordersRouter=express.Router()
ordersRouter.post("/",createNewOrder)
ordersRouter.get("/client/:id",getAllClientsOrders)
ordersRouter.get("/provider/:id",getAllProvidersOrders)
ordersRouter.delete("/:id",deleteOrderById)
ordersRouter.put("/:id",updateOrderById)
module.exports=ordersRouter