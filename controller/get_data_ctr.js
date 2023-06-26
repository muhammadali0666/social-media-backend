const pool = require("../db/db_config")
const jwt = require("jsonwebtoken")

const getUploadImg = async (req, res) => {
  try {
    let img_list = await pool.query(`select * from upload`);
    res.send(img_list.rows);
  } catch {
    res.send("error");
  }
};

const getUploadImgOne = async (req, res) => {
  try {
    let foundEmail = req.email.id

    let img_list = await pool.query(`select * from upload where user_id = $1`, [
      foundEmail
    ]);
    res.send(img_list.rows);
  } catch {
    res.send("error");
  }
};

const getUser = async (req, res) => {
  try {
    let user_list = await pool.query(`select * from register`);
    res.send(user_list.rows);
  } catch {
    res.send("error");
  }
};

const getName = async (req, res) => {
  try {
    let foundEmail = req.email.id

    let img_list = await pool.query(`select * from register where id = $1`, [
      foundEmail
    ]);
    res.send(img_list.rows);
  } catch {
    res.send("error");
  }
}


const getOnline = async (req, res) => {
  try {
    let img_list = await pool.query(`select * from register`);
    res.send(img_list.rows);
  } catch(error) {
    res.send({
      msg: error.message
    });
  }
};


const getSidebar = async (req, res) => {
  try {
    // let foundEmail = req.email.id

    let img_list = await pool.query(`select * from register`);

    res.send(img_list.rows);
  } catch {
    res.send("error");
  }
};

module.exports = {
  getUploadImg,
  getUploadImgOne,
  getUser,
  getName,
  getOnline,
  getSidebar
}