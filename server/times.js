const sql = require('./db.js')

module.exports = {

addtimeforuser: function (req, res, next) {
    const {user, data, start, end, seconds, sumtimer} = req.body
var str = `INSERT INTO times (user, data, start, end, seconds, sumtimer) VALUES ('${user.email}', '${data}', '${start}', '${end}', ${seconds}, '${sumtimer}')`
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        res.status(200).json(results)
    })
},

getlisttimesforuser: function (req, res, next) {
    const {user, months, your} = req.body
    var str = `select * from times where user='${user.email}' and data LIKE '%${months}/${your}%'`
    sql.query(str,async function (error, results, fields){
        if (error) throw error;
        res.status(200).json(results)
    })
}

}