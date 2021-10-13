const express = require('express')
const router = express.Router()
const kitapgirController = require('../controllers/kitapgirController')


router.get('/', kitapgirController.kitapgir_index)

router.post('/', kitapgirController.kitapgir_add)


module.exports = router