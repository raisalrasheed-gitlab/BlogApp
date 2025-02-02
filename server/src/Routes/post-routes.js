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
const checkToken = require('../middlewares/check-token');
const router = express.Router();

router.post('/:id', checkToken(['USER']), addPost);
router.delete('/:id', checkToken(['USER']), deletePost);
router.get('/:id', checkToken(['USER']), getPostById);
router.get('/all/:id', checkToken(['USER']), getAllPublicPost);
router.get('/author/:id', checkToken(['USER']), getPostByAuthor);
router.patch('/:id', checkToken(['USER']), editById);
router.put('/like/:id', checkToken(['USER']), addLike);
router.get('/like/:id', checkToken(['USER']), getLike);

module.exports = router;
