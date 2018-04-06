const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controllers/coins.js')
const router = express.Router();

router.use(bodyParser.json())
router.get('/coins',controller.coins.get)

module.exports = router