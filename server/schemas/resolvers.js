const { AuthenticationError } = require('apollo-server-errors');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

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
    },
  }
  module.exports = resolvers;