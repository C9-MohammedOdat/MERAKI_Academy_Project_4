const express=require("express")
const{createNewCategory}=require("../controllers/categories")
const categoriesRouter=express.Router()
categoriesRouter.post("/",createNewCategory)
module.exports=categoriesRouter