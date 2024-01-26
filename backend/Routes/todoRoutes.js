const express = require('express');
const router = express.Router();
const { createTodo, getAllTodo, updateTodo, deleteTodo } = require('../Controllers/routerController');

router.post('/create', createTodo);

router.get('/all', getAllTodo);

router.patch('/update/:id', updateTodo);

router.delete('/delete/:id', deleteTodo);

module.exports = router;