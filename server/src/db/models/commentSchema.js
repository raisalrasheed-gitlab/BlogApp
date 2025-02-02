const { Schema, model } = require('mongoose');
const { post } = require('../../Routes');

const commentSchema = Schema(
  {
    comment: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    blog: { type: Schema.Types.ObjectId, ref: 'posts' },
  },
  { timestamps: true }
);
const Comment = model('comments', commentSchema);
module.exports = Comment;
