const express = require("express");
const { register,login,getAllUser,getUserByRole,DeleteUserById} = require("../controllers/users");
const cors =require("cors")
const usersRouter = express.Router();
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/",getAllUser)
usersRouter.get("/:id",getUserByRole)
usersRouter.delete("/:id",DeleteUserById)
module.exports = usersRouter;