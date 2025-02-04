const express = require('express');
const router = express.Router();
const sql = require('mssql')

//login module
const {getlist, addrow} = require('./login')

router.post('/getlist',getlist)
router.post('/add',addrow) 

//timeron module
const {addtimeruser, gettimeron, deletetimeron} = require('./timeron')

router.post('/addtimeruser', addtimeruser)
router.post('/gettimeron', gettimeron)
router.post('/deletetimeron', deletetimeron)

//times module
const {addtimeforuser, getlisttimesforuser, updatetimesid, deletetimesid} = require('./times')

router.post('/addtimeforuser', addtimeforuser)
router.post('/getlisttimesforuser', getlisttimesforuser)
router.post('/updatetimesid', updatetimesid)
router.post('/deletetimesid', deletetimesid)

// Category module
const {addCategory, deleteCategory, getCategories} = require('./category')
router.post('/addcategory', addCategory)
router.post('/deletecategory', deleteCategory)
router.post('/getcategories', getCategories)


//admin module

const {admingettimes} = require('./id')

router.post('/admingettimes', admingettimes)

module.exports = router;