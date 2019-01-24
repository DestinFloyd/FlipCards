const express = require('express')
const router = express.Router()
const setController = require('../controllers/setController')

router.get('/set', setController.index)
router.get('/set/:setId', setController.show)
router.post('/set', setController.create)
router.delete('/set/:setId', setController.delete)
router.put('/set/:setId', setController.update)



module.exports = router