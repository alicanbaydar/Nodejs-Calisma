const express = require('express')
const router = express.Router()
const kitaplarController = require('../controllers/kitaplarController')

router.get('/', kitaplarController.kitaplar_index)

router.get('/:id', kitaplarController.kitaplar_content)

router.delete('/:id', kitaplarController.kitaplar_delete)

module.exports = router