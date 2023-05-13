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
        _id: ID!
        user_id: ID!
        itemName: String!
        imageLink: String!
        price: Float!
        itemDescription: String
    }
    type History {
        _id: ID!
        user_id: Int!
        order_date: String!
        order: [Item]
    }
    input CartInput {
        _id: String
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
        items: [Item]
    }
    type UserItems {
        items: [Item]
    }
    type AllItems {
        items: [Item]
    }
    type Query {
        currentUser: User
        currentUserItems: [Item]
        currentUserHistory: [Item]
        allItems: [Item]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!, username: String!): Auth
        putItemInCart(Item: CartInput!): User
        removeItemInCart(Item: CartInput!): User
        emptyCart(User: ID): User
        addItem(user_id: ID!, itemName: String!, imageLink: String!, price: Float!, itemDescription: String!): Item 
        removeItem(_id: ID!): String
    }
    input ItemInput {
        _id: String
        user_id: String
        itemName: String
        imageLink: String
        price: Float
        itemDescription: String 
    }
`;

module.exports = typeDefs;