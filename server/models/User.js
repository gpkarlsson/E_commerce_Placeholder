const bcrypt = require('bcrypt');
const Schema = require('mongoose');
const mongoose = require('mongoose');
const Item = require('./Item');
const History = require('./History');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [, "Must match an email address!"],
      },
      password: {
        type: String,
        required: true,
        match: [, "Password does not match!"],
      },
      cart: [
        Item
      ],
    },
    {
      toJSON: {
      },
      id: false,
    }
  );

  // hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectEmail = async function (email) {
  return bcrypt.compare(email, this.email);
};

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;
