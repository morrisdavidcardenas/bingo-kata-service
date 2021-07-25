const express = require('express');
const router = express.Router();

const numberController = require('../controllers/number');

router.get('/generate', numberController.generate);

module.exports = router;
