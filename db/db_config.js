var pg = require("pg");

var conString = "postgres://uhbtnbpv:poBqP9AmMO1XGVCqihyIpXXQ_MpL-WrZ@arjuna.db.elephantsql.com/uhbtnbpv";
var client = new pg.Client(conString);
client.connect();


module.exports = client