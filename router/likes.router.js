const { Router } = require("express");
const { uploadLike, getLikes } = require('../controller/likes.ctr');


const likeRouter = Router();


likeRouter.post('/upload_like', uploadLike)
likeRouter.get('/get_like', getLikes)


  module.exports = {
    likeRouter
  } 