const express = require('express');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;
