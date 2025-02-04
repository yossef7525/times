const db = require('./db')

module.exports = {
    addCategory:  (req, res, next) => {
        const { user, name } = req.body;
        const query = `INSERT INTO category (user, name) VALUES ('${user.email}', '${name ? name : ''}')`;
        console.log(query);
        db.query(query, (err, results) => {
            if (err) {
                return next(err);
            }
            res.status(201).json({
                status: 'success',
                data: {
                    category: results.insertId,
                    user: user,
                    name: name
                }
            });
        });
    },
    deleteCategory: (req, res, next) => {
        const { user, id } = req.body;
        const query = `DELETE FROM category WHERE id = ? AND user = ?`;
        db.query(query, [id, user.email], (err, results) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({
                status: 'success',
                data: null
            });
        });
    },
    getCategories: (req, res, next) => {
        const { user } = req.body;
        const query = `SELECT * FROM category WHERE user = ?`;
        db.query(query, [user.email], (err, results) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({
                status: 'success',
                data: results
            });
        });
    }
};  


