const express=require("express")
const{createNewService,getServiceByTilte}=require("../controllers/services")
const servicesRouter=express.Router()
servicesRouter.post("/",createNewService)
servicesRouter.get("/:title",getServiceByTilte)
module.exports=servicesRouter