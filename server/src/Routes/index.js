const express = require('express');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const imageUpload = require('./imageUpload-routes');
const commentRoutes = require('./comment-routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/image', imageUpload);

module.exports = router;
