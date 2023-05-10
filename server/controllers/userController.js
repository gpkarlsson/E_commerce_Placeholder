const { User } = require("../models");

module.exports = {
    //add user controller logic

  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async login(req, res) {
    const user = await User.findOne([{ password: req.body.password }, { email: req.body.email }] );
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctEmail = await user.isCorrectEmail(req.body.password);

    if (!correctEmail) {
      return res.status(400).json({ message: 'Wrong password!' });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async getSingleUser({ user, body }, res) { // I think we can grab carts and history from a returned user based on schema, meaning this should work for all 3.
    const foundUser = await User.findOne({ username: user.username });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }
    res.json({ foundUser });
  },


    //PUT items into carts
  async putItemInCart({ user, params, body}, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
      { _id: user._id},
      { $addToSet: { cart: { itemId: body._id}}},
      { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

    //PUT items from carts
    async removeItemInCart({ user, params, body}, res) {
      try {
        const updatedUser = await User.findOneAndUpdate(
        { _id: user._id},
        { $pull: { cart: { body }}},
        { new: true, runValidators: true }
        );
        return res.json(updatedUser);
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },

    async emptyCart({ user, params, body}, res) {
      try {
        const updatedUser = await User.findOneAndUpdate(
        { _id: user._id},
        { $set: { cart: []}},
        { new: true, runValidators: true }
        );
        return res.json(updatedUser);
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },

    //GET user cart
    async getUserCart({ user }, res) {
      try {
        const currentUser = await User.findOne([{ _id: user._id }]);
      return res.json(currentUser.cart);
      } catch (err) {
      console.log(err);
      return res.status(400).json(err);
      }
    },

    //PUT new items
    async addUserItem({ user, body }, res) {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id},
          { $addToSet: { items: { itemId: body.itemId}}},
          { new: true, runValidators: true }
        );
        return res.json(updatedUser);
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },

    //PUT remove posted items
    async removeUserHistory({ user, params, body}, res) {
      try {
        const updatedUser = await User.findOneAndUpdate(
        { id: user._id},
        { $pull: { items: { itemId: body.itemId}}},
        { new: true, runValidators: true }
        );
        return res.json(updatedUser);
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },

    //GET user history
    async getUserHistory({ user }, res) {
      try {
        const currentUser = await User.findOne([{ _id: user._id }]);
      return res.json(currentUser.history);
      } catch (err) {
      console.log(err);
      return res.status(400).json(err);
      }
    },

      //GET user items
    async getUserItems({ user }, res) {
      try {
        const currentUser = await User.findOne([{ _id: user._id }]);
      return res.json(currentUser.items);
      } catch (err) {
      console.log(err);
      return res.status(400).json(err);
      }
    },

    //PUT clear history
    async removeUserHistory({ user, params, body}, res) {
      try {
        const updatedUser = await User.findOneAndUpdate(
        { id: user._id},
        { $set: { history: []}},
        { new: true, runValidators: true }
        );
        return res.json(updatedUser);
      } catch (err) {
        console.log(err);
        return res.status(400).json(err);
      }
    },

}