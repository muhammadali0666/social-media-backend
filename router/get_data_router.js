const express = require("express");
const {getUploadImg, getUploadImgOne, getUser, getName, getOnline, getSidebar} = require("../controller/get_data_ctr")
const verifyToken = require("../middleware/auth.middleware")

let getDataRouter =  express.Router();

getDataRouter.get("/getUpload", verifyToken,  getUploadImg);
getDataRouter.get("/getUploadOne", verifyToken,  getUploadImgOne);
getDataRouter.get("/get_user", verifyToken, getUser)
getDataRouter.get("/get_name", verifyToken, getName)
getDataRouter.get("/get_online", verifyToken, getOnline)
getDataRouter.get("/get_sidebar", verifyToken, getSidebar)

module.exports = {
  getDataRouter
}