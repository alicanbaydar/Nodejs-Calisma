const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()

router.get('/', adminController.admin_index)

module.exports = router