const express = require('express');
const {
  addPost,
  deletePost,
  getAllPublicPost,
  getPostByAuthor,
} = require('../controller/post-control');

const router = express.Router();

router.post('/:id', addPost);
router.delete('/:id', deletePost);
router.get('/', getAllPublicPost);
router.get('/:id', getPostByAuthor);

module.exports = router;
