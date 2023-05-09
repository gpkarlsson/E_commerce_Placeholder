const Schema = require('mongoose');
const mongoose = require('mongoose');
const Item = require('./Item');

const userSchema = new Schema(
    {
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