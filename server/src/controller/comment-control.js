const express = require('express');
const Comment = require('../db/models/commentSchema');
const { default: mongoose } = require('mongoose');

module.exports.addComment = async (req, res) => {
  try {
    const { pId, uId } = req.params;
    const { comment } = req.body;
    const dbResponse = await Comment.create({
      blog: pId,
      author: uId,
      comment: comment,
    });
    res.status(201).json({ message: 'comment succesfully added' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.getComment = async (req, res) => {
  try {
    const { pId } = req.params;
    const dbResponse = await Comment.aggregate([
      { $match: { blog: new mongoose.Types.ObjectId(pId) } },
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
    res.status(200).json(dbResponse);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
