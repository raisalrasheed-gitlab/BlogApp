const express = require('express');
const User = require('../db/models/userSchema');
const bcrypt = require('bcrypt');

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
    if (user) {
    }
  } catch (error) {}
};
