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
        user_id: Int!
        order_date: String!
        order: [Item]
    }
    #History - user_id: Number! -> user_id: Int!
    #History - order_date: Date! may be causing errors as well?
    input CartInput {
        itemId: String
        user_id: String
        itemName: String
        imageLink: String
        price: String
        itemDescription: String
    }
    #type CartInput -> input CartInput
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
        currentUserCart: User
    }
    #Query - currentUserCart not defined in schema
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!, username: String!): Auth
        putItemInCart(Item: CartInput!): User
        removeItemInCart(Item: CartInput!): User
        emptyCart(User: ID): User
        addItem(user_id: String!, itemName: String!, imageLink: String!, price: String!, itemDescription: String!): Item 
        removeItem(itemId: ID!): Item
        checkout(order: [ItemInput]!): History
    }
    #The type of Mutation.checkout(order:) must be Input Type but got: [Item]!.
    input ItemInput {
        itemId: String
        user_id: String
        itemName: String
        imageLink: String
        price: String
        itemDescription: String 
    }

    #Mutation - checkout not defined in schema
    #Mutation - removeItem not defined in schema
`;

module.exports = typeDefs;