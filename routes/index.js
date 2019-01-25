const express = require('express')
const router = express.Router()
const setController = require('../controllers/setController')
const qaController = require('../controllers/qaController')

router.get('/set', setController.index)
router.get('/set/:setId', setController.show)
router.post('/set', setController.create)
router.delete('/set/:setId', setController.delete)
router.put('/set/:setId', setController.update)

router.get('/set/:setId/qa', qaController.index)
router.get('/set/:setId/qa/:qaId', qaController.show)
router.post('/set/:setId/qa', qaController.create)
router.put('/set/:setId/qa/:qaId', qaController.update)
router.delete('/set/:setId/qa/:qaId', qaController.delete)


module.exports = router