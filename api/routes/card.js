const express = require('express');
const router = express.Router();

const cardController = require('../controllers/card');

router.get('/generate', cardController.generate);

module.exports = router;
