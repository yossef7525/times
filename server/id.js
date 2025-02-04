const sql = require('./db.js')

module.exports = {

    admingettimes: function (req, res, next) {
        const {email} = req.body
    var str = `select * from times where user='${email}'`
        sql.query(str,async function (error, results, fields){
            if (error) throw error;
            res.status(200).json(results)
        })
    },

}