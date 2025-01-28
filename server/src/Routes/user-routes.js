const express = require('express');
const { signup, login } = require('../controller/user-control');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
module.exports = router;
