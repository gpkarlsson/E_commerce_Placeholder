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
        order: [Item]
    }
    #History - user_id: Number! -> user_id: Int!
    #History - order_date: Date! may be causing errors as well?
    type CartInput {
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
        items: [Item]
    }
    type UserItems {
        items: [Item]
    }
    type Query {
        currentUser: User
        currentUserItems: UserItems
        currentUserHistory: UserHistory
    }
    #Query - currentUserCart not defined in schema
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!, username: String!): Auth
        putItemInCart(Item: CartInput!): User
        removeItemInCart(Item: CartInput!): User
        emptyCart(User: ID): User
        addItem(user_id: String!, itemName: String!, imageLink: String!, price: String!, itemDescription: String!): Item 
    }
    #Mutation - checkout not defined in schema
    #Mutation - emptyCart not defined in schema
    #Mutation - removeItem not defined in schema

`;

module.exports = typeDefs;