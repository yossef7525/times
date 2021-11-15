const express = require('express');
const router = express.Router();
const sql = require('mssql')

//login module
const {getlist, addrow} = require('./login')

router.get('/',getlist)
router.post('/add',addrow) 

//timeron module
const {addtimeruser, gettimeron, deletetimeron} = require('./timeron')

router.post('/addtimeruser', addtimeruser)
router.post('/gettimeron', gettimeron)
router.post('/deletetimeron', deletetimeron)


module.exports = router;