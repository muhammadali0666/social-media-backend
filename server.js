const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { registerRouter } = require("./router/register.router")
const { imgRouter } = require("./router/upload.router")
const {getDataRouter} = require("./router/get_data_router")
const {likeRouter} = require("./router/likes.router")

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();


app.use(cors());
app.use(express.json());

// router 
app.use("/auth", registerRouter)
app.use(imgRouter)
app.use("/upload", getDataRouter)
app.use(likeRouter)


app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});