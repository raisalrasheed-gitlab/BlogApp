const express = require('express');
const User = require('../db/models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async (req, res) => {
  try {
    const { name, email, password, conformPassword, age, phonenumber, image } =
      req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(404).json({ message: 'User is already exist' });
    } else if (password != conformPassword) {
      return res.status(404).json({ message: 'password incorrect' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 4);
      console.log(hashedPassword);
      const dbResponse = await User.create({
        email: email,
        password: hashedPassword,
        name: name,
        phonenumber: phonenumber,
        age: age,
        image: image,
      });
      res.status(201).json({ message: 'Account has been created' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user || !password) {
      return res
        .status(404)
        .json({ message: 'email or password is incorrect' });
    } else {
      const match = await bcrypt.compare(password, user.password);
      console.log(match);
      if (!match) {
        return res
          .status(404)
          .json({ error: true, message: 'email or password incorrect' });
      }
      const Token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: '7D' }
      );
      res.status(200).json({ message: 'you are login ', token: Token });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
