const { AuthenticationError } = require('apollo-server-errors');
const { User, Item, History } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      currentUser: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return userData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      currentUserItems: async (parent, args, context) => {
        if (context.user) {
          const itemData = await Item.find({ user_id: context.user._id });
          return itemData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      currentUserHistory: async (parent, args, context) => {
        if (context.user) {
          const itemData = await History.find({ user_id: context.user._id });
          return itemData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      currentUserCart: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return userData.cart;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials!');
        }
        const token = signToken(user);
        return { token, user };
      },
      putItemInCart: async (parent, { Item }, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { cart: Item }},
            { new: true },
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      removeItemInCart: async (parent, { Item }, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { cart: Item }},
            { new: true },
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      emptyCart: async (parent, args, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $set: { cart: [] }},
            { new: true },
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      addItem: async (parent, args, context) => {
        if (context.user) {
          const newItem = await Item.create(args);
          return newItem;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      checkout: async (parent, args, context) => {
        if (context.user) {
          const newHistory = await History.create(args);
          if (!newHistory) {
            throw new GraphQLError('')
            //return;
          }
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $set: { cart: [] }},
            { new: true },
          );
          const removedItems = await Item.deleteMany({ itemId: { $in: [args.item.itemId] } });
          return { newHistory, updatedUser, removedItems };
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      removeItem: async (parent, args, context) => {
        if (context.user) {
          const deletedItem = await Item.findByIdAndDelete({ itemId: args.item.itemId });
          return deletedItem;
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  }
  module.exports = resolvers;