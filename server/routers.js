const express = require('express');
const router = express.Router();
const sql = require('mssql')


const {getlist, addrow} = require('./login')

router.get('/',getlist)
router.post('/add',addrow) 


module.exports = router;