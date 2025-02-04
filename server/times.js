const sql = require('./db.js')

module.exports = {

addtimeforuser: function (req, res, next) {
    const {user, data, start, end, seconds, sumtimer, category} = req.body
var str = `INSERT INTO times (user, data, start, end, seconds, sumtimer, category) VALUES ('${user.email}', '${data}', '${start}', '${end}', ${seconds}, '${sumtimer}', ${category ? category : null})`
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        res.status(200).json(results)
    })
},

getlisttimesforuser: function (req, res, next) {
    const {user, months, category} = req.body
    if(category > 0){
        var str = `select times.*, category.name from times left join category on times.category = category.id where times.user='${user.email}' and times.data LIKE '%${months}%' and times.category=${category} ORDER BY start`
    }else{
        var str = `select times.*, category.name from times left join category on times.category = category.id where times.user='${user.email}' and times.data LIKE '%${months}%' ORDER BY start`
    }
    // category > 0 ? category = category : category = null
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        res.status(200).json(results)
    })
},

updatetimesid: function (req, res, next) {
    const {id} = req.body
    const {user, data, start, end, seconds, sumtimer, category} = req.body
    var str = `UPDATE times SET user='${user.email}', data='${data}', start='${start}', end='${end}', seconds=${seconds}, sumtimer='${sumtimer}', category=${category ? category : null} where id=${id}`    
   console.log(str);
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        res.status(200).json(results)
    })
},
deletetimesid: async function (req, res) {
    const {user, id} = req.body
    sql.query(`delete from times where id=${id} and user = '${user.email}'`, async function (error, results, fields){
      if (error) throw error;
      res.status(200).json(results)
    })
    
  }
}