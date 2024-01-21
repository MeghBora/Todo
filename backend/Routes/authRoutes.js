const express = require('express');

const router = express.Router();
const { registerUser, loginUser } = require('../Controllers/authControllers')

router.post('/register', registerUser);

router.post('/login', loginUser);

// router.post('/forget_password', forgetPassword);

// router.post('/resetPassword', resetPassword);

module.exports = router;