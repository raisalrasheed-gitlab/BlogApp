const express = require('express');
const {
  addPost,
  deletePost,
  getAllPublicPost,
  getPostByAuthor,
  getPostById,
  editById,
  addLike,
  getLike,
} = require('../controller/post-control');

const router = express.Router();

router.post('/:id', addPost);
router.delete('/:id', deletePost);
router.get('/:id', getPostById);
router.get('/all/:id', getAllPublicPost);
router.get('/author/:id', getPostByAuthor);
router.patch('/:id', editById);
router.put('/like/:id', addLike);
router.get('/like/:id', getLike);

module.exports = router;
