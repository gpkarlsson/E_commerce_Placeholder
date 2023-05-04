const Schema = require('mongoose');
const mongoose = require('mongoose');
const Item = require('./Item');

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
        unique: true,
        match: [, "Password does not match!"],
      },
      items: [
        {
          type: Schema.Types.ObjectId,
          ref: Item,
        },
      ],
      cart: [
        {
          type: Schema.Types.ObjectId,
          ref: Item,
        },
      ],
    },
    {
      toJSON: {
      },
      id: false,
    }
  );


const User = mongoose.model("User", userSchema);

module.exports = User;
