const express = require('express');
const { addComment, getComment } = require('../controller/comment-control');
const router = express.Router();

router.post('/:pId/:uId', addComment);
router.get('/:pId', getComment);

module.exports = router;
