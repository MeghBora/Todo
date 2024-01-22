const express = require('express');
const router = express.Router();
const {createRouter} = require('../Controllers/routerController');

router.post('/', createRouter)

module.exports = router;