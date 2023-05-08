const Item = require("../models/Item");
const User = require("../models/User");

module.exports = {
    //add user controller logic

  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async login({ body }, res) {
    const user = await User.findOne([{ password: body.password }, { email: body.email }] );
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctEmail = await user.isCorrectEmail(body.password);

    if (!correctEmail) {
      return res.status(400).json({ message: 'Wrong password!' });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

    //GET all items in cart

    //PUT items into carts

    //DELETE items from carts

    //DELETE user by email/pass

    //DELETE Empty whole cart(Checkout) 2x

    //PUT Edit user info

    //PUT/DELETE items out of cart

    //POST new items

    //PUT edit items

    //DELETE posted items

    //GET user history

    //DELETE clear history


}