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

/*
alter table times 
add category int
*/
/*
create table category (
id INTEGER PRIMARY KEY AUTO_INCREMENT, 
user  varchar(255),
name varchar(255)
)
*/