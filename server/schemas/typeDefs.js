const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        cart: [Item]
    }
    type Item {
        itemId: ID!
        user_id: String!
        itemName: String!
        imageLink: String!
        price: String!
        itemDescription: String
    }
    type History {
        _id: ID!
        user_id: Number!
        order_date: Date!
        order: [Item]!
    }
    input CartInput {
        itemId: String
        user_id: String
        itemName: String
        imageLink: String
        price: String
        itemDescription: String
      }
    type Auth {
        token: ID!
        user: User
    }
    type UserHistory {
        [Item]
    }
    type UserItems {
        [Item]
    }
    type Query {
        currentUser: User
        currentUserItems: UserItems
        currentUserHistory: UserHistory
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!, username: String!): Auth
        putItemInCart(Item: CartInput!): User
        removeItemInCart(Item: CartInput!): User
        emptyCart: User
        addItem:(user_id: String!, itemName: String!, imageLink: String!, price: String!, itemDescription: String!): Item
        removeItem: 
    }
`;

module.exports = typeDefs;