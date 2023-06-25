const pool = require("../db/db_config")
const jwt = require("jsonwebtoken")

const uploadLike = async (req, res) => {
  try {

    const findToken = req.headers.token
    const { img_id } = req.body

    console.log(img_id);

    let result = jwt.verify(findToken, process.env.SEKRET_KEY)

    let foundedId = result.id
    const like_control = true

    await pool.query(
      `insert into likes(user_id, img_id, like_control) values($1, $2, $3)`,
      [foundedId, img_id, like_control]
    );

    res.json(`like sent`);
  } catch (error) {
    console.log(error),
      res.send({
        msg: error,
      });
  }
};

const getLikes = async (req, res) => {
try{
  let likes = await pool.query(`select * from likes`);
  res.send(likes.rows);
  } catch (error) {
    console.log(error),
      res.send({
        msg: error,
      });
  }
}

module.exports = {
  uploadLike,
  getLikes
}