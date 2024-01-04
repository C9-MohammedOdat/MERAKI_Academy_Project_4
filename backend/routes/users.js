const express = require("express");
const { register} = require("../controllers/users");
const cors =require("cors")
const usersRouter = express.Router();
usersRouter.post("/register", register);

module.exports = usersRouter;