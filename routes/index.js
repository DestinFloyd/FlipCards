const express = require('express')
const router = express.Router()
const setController = require('../controllers/setController')

router.get('/', setController.index)


module.exports = router