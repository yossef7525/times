
const sql = require("./db.js");




 module.exports = {
    getlist: async function (req, res) {
        var str = 'select * from users'
       
       sql.query(str,async function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
     
        
    },



addrow: async function (req, res) {
  sql.query(`select email from users where email='${req.body.email}'`, async function (error, results, fields) {
    if (error) throw error;
   if(results.length <1){
  var str = `INSERT INTO users (id, firstname, lastname, image, email) VALUES (${results.length+1}, "${req.body.firstname}","${req.body.lastname}","${req.body.image}" "${req.body.email}")`
       console.log(str);
  sql.query(str,async function (error, results, fields) {
   if (error) throw error;
   res.send(results)
 })
}
 else {
   res.status(200).json({message:'your email is find!! please enter a new email'})
 }

   })}


  }