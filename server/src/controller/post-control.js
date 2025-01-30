const express = require('express');
const Post = require('../db/models/postSchema');

module.exports.addPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, content, isPublic } = req.body;
    const post = await Post.create({
      title: title,
      image: image,
      author: id,
      content: content,
      isPublic: isPublic,
    });
    res.status(201).json({ message: 'Post successfully created' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: 'post deletion successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.getAllPublicPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.find({ isPublic: true }).limit(6).skip(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.getPostByAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.find({ author: id });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
