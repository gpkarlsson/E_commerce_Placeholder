// @ts-check

const { User, Item } = require("../models");

module.exports = {
    //CREATE new item
    async createItem(req, res) {
        const item = await Item.create(req.body);
    
        if (!item) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json({ item });
      },

    //DELETE item
    async deleteItem(req, res) {
        Item
          .findOneAndDelete({ itemId: req.params.itemId })
          .then((item) => {
            if (!item) {
              res.status(404).json({ message: 'No item with that ID' })
            } else {
              User
                .findOneAndUpdate(
                  { items: { $elemMatch: { $eq: req.params.itemId } } },
                  { $pull: { items: req.params.itemId } },
                  { new: true, runValidators: true }
                )
                .then((user) => {
                  if (!user) {
                    res.status(404).json({ message: 'Item successfully deleted but there was no associated user' })
                  } else {
                    res.json({ message: 'Item successfully deleted and removed from User' })
                  }
                })
    
            }
          })
          .catch((err) => res.status(500).json(err));
      },
}