// const multer = require('multer');
const { Router } = require("express");
const { uploadReq, uploadMini, uploadCover } = require('../controller/upload.ctr');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'img')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

// const upload = multer({ storage: storage })

const imgRouter = Router();


imgRouter.post('/upload', uploadReq)
imgRouter.put('/uploadMini', uploadMini)
imgRouter.put("/uploadCover", uploadCover)


  module.exports = {
    imgRouter
  } 