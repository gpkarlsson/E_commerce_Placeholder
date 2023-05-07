const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        items: [Item]
        cart: [Item]
    }
    type Item {
        itemId: ID
        itemName: String
        imageLink: String
        price: Number
        itemDescription: String
    }
    type History {
        _id: ID
        user_id: Number
        order_date: Date
        order: [Item]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
    }
    Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!, username: String!): Auth
    }
`;

module.exports = typeDefs;