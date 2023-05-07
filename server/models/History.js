const Schema = require('mongoose');
const mongoose = require('mongoose');
const Item = require('./Item');
const User = require('./User');

const userSchema = new Schema(
    {
      user_id: {
        type: Number,
        required: true
      },
      order_date: {
        type: Date,
        required: true,
        match: [, "Password does not match!"],
      },
      order: [
        Item
      ],
    },
);

const History = mongoose.model("History", historySchema);

module.exports = History;