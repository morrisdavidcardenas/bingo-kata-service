const express = require('express');
const router = express.Router();

const cardController = require('../controllers/card');

router.get('/generate', cardController.generate);
router.get('/check', cardController.check);

module.exports = router;
