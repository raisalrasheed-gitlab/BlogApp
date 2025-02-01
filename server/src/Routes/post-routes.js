const express = require('express');
const {
  addPost,
  deletePost,
  getAllPublicPost,
  getPostByAuthor,
  getPostById,
} = require('../controller/post-control');

const router = express.Router();

router.post('/:id', addPost);
router.delete('/:id', deletePost);
router.get('/:id', getPostById);
router.get('/all/:id', getAllPublicPost);
router.get('/author/:id', getPostByAuthor);

module.exports = router;
