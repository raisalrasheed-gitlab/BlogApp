const express = require('express');
const Post = require('../db/models/postSchema');
const { default: mongoose } = require('mongoose');

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
module.exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const post = await Post.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: 'users', // The collection to join
          localField: 'author', // The array of location IDs in the hospitals collection
          foreignField: '_id', // The field in the locations collection
          as: 'authorDetails', // The output array field
        },
      },
      { $unwind: '$authorDetails' },
    ]);
    res.status(200).json(post);
  } catch (error) {}
};
module.exports.getAllPublicPost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const post = await Post.aggregate([
      { $match: { isPublic: true } },
      { $skip: parseInt(id) },
      { $limit: 6 },
      {
        $lookup: {
          from: 'users', // The collection to join
          localField: 'author', // The array of location IDs in the hospitals collection
          foreignField: '_id', // The field in the locations collection
          as: 'authorDetails', // The output array field
        },
      },
      { $unwind: '$authorDetails' },
    ]);
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
