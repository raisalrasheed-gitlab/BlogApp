const express = require('express');
const { addComment, getComment } = require('../controller/comment-control');
const checkToken = require('../middlewares/check-token');
const router = express.Router();

router.post('/:pId/:uId', checkToken(['USER']), addComment);
router.get('/:pId', checkToken(['USER']), getComment);

module.exports = router;
