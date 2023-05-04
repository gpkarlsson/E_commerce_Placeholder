const Schema = require('mongoose');
const mongoose = require('mongoose');

const itemSchema = new Schema(
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      itemName: {
        type: String,
        required: true,
      },
      imageLink: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      itemDescription: {
        type: String,
        required: true,
        minLength: [1, 'Please add 1 to 280 characters'],
        maxLength: [280, 'Please add 1 to 280 characters'],
      },
    },
    {
      toJSON: {
      },
      id: false,
    }
  );


const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
