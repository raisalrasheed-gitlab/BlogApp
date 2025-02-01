const express = require('express');
const { signup, login, getUser } = require('../controller/user-control');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getUser);
module.exports = router;
