const pool = require("../db/db_config")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

////////////////////////////////////////// REGISTER

const authRegister = async (req, res) => {
  try {
    const { username, email, password, password_again } = req.body;

    let foundedUser = await pool.query("select * from register where email = $1", [
      email,
    ]);

    if (foundedUser.rows[0]) {
      return res.send(`you are already registred`);
    }

    if (password !== password_again) {
      return res.send("second password wrong")
    }

    let hesh = await bcrypt.hash(password, 12);

    await pool.query(
      `insert into register(username, email, password, password_again) values($1, $2, $3, $4 )`,
      [username, email, hesh, password_again]
    );

    res.json(`user added`);
  } catch (error) {
    console.log(error),
      res.send({
        msg: error.message,
      });
  }
};

//////////////////////////////////////// LOGIN

const loginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    let foundedUser = await pool.query(
      `SELECT * FROM register WHERE email = $1`,
      [email]
    );

    

    if (!foundedUser.rows.length) {
      return res.send("You are not registered");
    }

    let foundedPsw = foundedUser.rows[0].password;
    let foundedId = foundedUser.rows[0].id;
    let foundedUsername = foundedUser.rows[0].username;

    // title = title ? title : getOne.rows[0].title;

    let bool = true

    await pool.query(
      `update register set onlines = $1 where id = $2
    `,
      [bool, foundedId]
    );

    const checkhash = await bcrypt.compare(password, foundedPsw);
    if (checkhash) {
      let token = jwt.sign(
        { id: foundedId, email: email, username: foundedUsername },
        process.env.SEKRET_KEY,
        {
          expiresIn: "24h",
        }
      );
      return res.send({
        msg: "Success",
        token,
      });
    } else {
      res.send({
        msg: "Password wrong",
      });
    }
  } catch {
    res.send({
      msg: "error",
    });
  }
};

const logOut = async (req, res) => {
  try {

    let foundedId = req.email.id

    let bool = false

    await pool.query(
      `update register set onlines = $1 where id = $2
    `,
      [bool, foundedId]
    );

    res.json(`logouted`);
  } catch (error) {
    res.send({
      msg: error.message,
    });
  }
};


module.exports = {
  authRegister,
  loginAuth,
  logOut
}
