const express=require("express")
const{createNewService,getServiceByTilte,DeleteServiceById}=require("../controllers/services")
const servicesRouter=express.Router()
servicesRouter.post("/",createNewService)
servicesRouter.get("/:title",getServiceByTilte)
servicesRouter.delete("/:id",DeleteServiceById)
module.exports=servicesRouter