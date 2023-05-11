// @ts-check
const { Schema, model } = require('mongoose');

const historySchema = new Schema(
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      order_date: {
        type: Schema.Types.Date,
        required: true,
        default: Date.now,
      },
      order: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Item'
        }
      ],
    },
);

const History = model("History", historySchema);

module.exports = History;