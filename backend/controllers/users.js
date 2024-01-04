const userModel = require("../models/userSchema");

const register = (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    category,
    role,
  } = req.body;
  const user=new userModel({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    category,
    role, 
  })
  .save()
  .then((result)=>{
    res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        author: result,
      });
  }).catch((err)=>{
    if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = {
    register,
  };
  