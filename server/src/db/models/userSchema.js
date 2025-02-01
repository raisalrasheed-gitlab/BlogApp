const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    name: { type: String, required: true },
    image: {
      type: String,
      default: 'http://localhost:9001/assets/noprofile.jpg',
    },
    age: String,
    phonenumber: String,
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, default: 'USER', immutable: true },
  },
  { timetamps: true }
);

const User = model('users', userSchema);
module.exports = User;
