const { Schema, model } = require('mongoose');

const postSchema = Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    isPublic: { type: Boolean, default: true },
  },
  { timeStamps: true }
);
