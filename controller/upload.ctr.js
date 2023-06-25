const pool = require("../db/db_config")
const jwt = require("jsonwebtoken")

const uploadReq = async (req, res) => {
  try {

    const file = req.body.filename;
    const findToken = req.headers.token

    let result = jwt.verify(findToken, process.env.SEKRET_KEY)

    let found = result.username
    let foundedId = result.id

    await pool.query(
      `insert into upload(img, username, user_id) values($1, $2, $3)`,
      [file, found, foundedId]
    );

    res.json(`file uploaded`);
  } catch (error) {
    console.log(error),
      res.send({
        msg: error,
      });
  }
};

const uploadMini = async (req, res) => {
  try {
    let file = req.body.filename;
    const findToken = req.headers.token

    let result = jwt.verify(findToken, process.env.SEKRET_KEY)

    let foundedId = result.id;

    let getOne = await pool.query("select * from register where id = $1", [foundedId]);
    if (!getOne.rows[0]) return res.send("User not found!");

    file = file ? file : getOne.rows[0].file;

    await pool.query(
      `update register set user_img_mini = $1 where id = $2`,
      [file, foundedId]
    );

    res.json(`file uploaded`);
  } catch (error) {
    console.log(error),
      res.send({
        msg: error,
      });
  }
};


const uploadCover = async (req, res) => {
  try {
    let file = req.body.filename;
    const findToken = req.headers.token

    let result = jwt.verify(findToken, process.env.SEKRET_KEY)

    let foundedId = result.id;

    let getOne = await pool.query("select * from register where id = $1", [foundedId]);
    if (!getOne.rows[0]) return res.send("User not found!");

    file = file ? file : getOne.rows[0].file;

    await pool.query(
      `update register set user_cover = $1 where id = $2`,
      [file, foundedId]
    );

    res.json(`file uploaded`);
  } catch (error) {
    console.log(error),
      res.send({
        msg: error,
      });
  }
};


module.exports = {
  uploadReq,
  uploadMini,
  uploadCover
}
