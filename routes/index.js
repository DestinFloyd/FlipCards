const express = require('express')
const router = express.Router()
const stackController = require('../controllers/stackController')
const cardController = require('../controllers/cardController')

router.get('/stack', stackController.index)
router.get('/stack/:stackId', stackController.show)
router.post('/stack', stackController.create)
router.delete('/stack/:stackId', stackController.delete)
router.put('/stack/:stackId', stackController.update)

router.get('/stack/:stackId/card', cardController.index)
router.get('/stack/:stackId/card/:cardId', cardController.show)
router.post('/stack/:stackId/card', cardController.create)
router.put('/stack/:stackId/card/:cardId', cardController.update)
router.delete('/stack/:stackId/card/:cardId', cardController.delete)


module.exports = router