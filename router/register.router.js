const express = require("express");
const {authRegister, loginAuth, logOut} = require("../controller/register.ctr")
const verifyToken = require("../middleware/auth.middleware")

let registerRouter =  express.Router();

registerRouter.post("/createRegister", authRegister);
registerRouter.post("/login", loginAuth);
registerRouter.post("/logout", verifyToken, logOut);



module.exports = {
  registerRouter
}