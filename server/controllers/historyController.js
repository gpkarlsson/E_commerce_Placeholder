// @ts-check

const { User, History } = require("../models");

module.exports = {
    //CREATE new history
    async createHistory(req, res) {
        History
          .create(req.body)
          .then((history) => {
            if (!history) {
              res.status(404).json({ message: '' })}
              User
                .findOneAndUpdate(
                  { history: { $elemMatch: { $eq: req.body._id } } },
                  { $addToSet: { history: req.body._id } },
                  { new: true, runValidators: true }
                )
                .then((user) => {
                  if (!user) {
                    res.status(404).json({ message: 'History successfully deleted but there was no associated user' })
                  } else {
                    res.json({ message: 'History successfully deleted and removed from User' })
                  }
                })
    
            
          })
          .catch((err) => res.status(500).json(err))
      },

    //DELETE history
    async deleteHistory(req, res) {
        History
          .findOneAndDelete({ _id: req.params._id })
          .then((history) => {
            if (!history) {
              res.status(404).json({ message: 'No item with that ID' })
            } else {
              User
                .findOneAndUpdate(
                  { history: { $elemMatch: { $eq: req.params._id } } },
                  { $pull: { history: req.params._id } },
                  { new: true, runValidators: true }
                )
                .then((user) => {
                  if (!user) {
                    res.status(404).json({ message: 'History successfully deleted but there was no associated user' })
                  } else {
                    res.json({ message: 'History successfully deleted and removed from User' })
                  }
                })
    
            }
          })
          .catch((err) => res.status(500).json(err));
      },
}