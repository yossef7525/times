const mysql = require("mysql");
const dbConfig = require("./config.js");
try {
  var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });
} catch (error) { console.log('Error:', error); }
module.exports = connection;