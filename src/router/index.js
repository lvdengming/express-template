const express = require('express');

const bird = require('./bird');
const dog = require('./dog');

const router = express.Router();
router.use('/bird', bird);
router.use('/dog', dog);

module.exports = router;
