const express = require('express');
const router = express.Router();
const {createTodo} = require('../Controllers/routerController');

router.post('/create', createTodo)

module.exports = router;