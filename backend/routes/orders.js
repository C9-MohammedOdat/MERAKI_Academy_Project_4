const express=require("express")
const{createNewOrder,getAllClientsOrders,getAllProvidersOrders,deleteOrderById,updateOrderById}=require("../controllers/orders")
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
const ordersRouter=express.Router()
ordersRouter.post("/",createNewOrder)
ordersRouter.get("/client/:id",getAllClientsOrders)
ordersRouter.get("/provider/:id",authentication,getAllProvidersOrders)
ordersRouter.delete("/:id",deleteOrderById)
ordersRouter.put("/:id",updateOrderById)
module.exports=ordersRouter