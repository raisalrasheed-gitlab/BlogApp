const { Schema, model } = require('mongoose');

const postSchema = Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    image: {
      type: String,
      default: 'http://localhost:9001/assets/no-post.webp',
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    isPublic: { type: Boolean, default: true },
  },
  { timeStamps: true }
);
const Post = model('posts', postSchema);
module.exports = Post;
