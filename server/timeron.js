
const sql = require("./db.js");




module.exports = {
   addtimeruser: async function (req, res) {
      const {user, data} = req.body
      
      sql.query(`INSERT INTO timeron (user, dataon) VALUES ("${user.email}", "${data}")`,async function (error, results, fields) {
       if (error) throw error;
       console.log(results)
     });
    
       
   },

gettimeron: async function (req, res) {
  const {user} = req.body
  sql.query(`select * from timeron where user = "${user.email}"`, async function (error, results, fields){
    if (error) throw error;
    res.status(200).json(results)
  })
  
},

deletetimeron: async function (req, res) {
  const {user} = req.body
  sql.query(`delete from timeron where user = "${user.email}"`, async function (error, results, fields){
    if (error) throw error;
    res.status(200).json(results)
  })
  
}

 }