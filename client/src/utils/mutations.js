import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser: login(email: $email, password: $password) {
      token
      user {
        _id
      }  
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
    addUser(email: $email, password: $password, username: $username) {
      token
      user {
        _id 
    }
  }
}
`;

export const ADD_ITEM = gql`
mutation addItem($user_id: ID!, $itemName: String!, $imageLink: String!, $price: Float!, $itemDescription: String!) {
  addItem(user_id: $user_id, itemName: $itemName, imageLink: $imageLink, price: $price, itemDescription: $itemDescription) {
    _id
    user_id
    itemName
    imageLink
    price
    itemDescription
  }
}
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
removeItem(itemId: $itemId) {
      itemId
      user_id
      itemName
      imageLink
      price
      itemDescription
  }
}
`;

export const PUT_ITEM_IN_CART = gql`
  mutation putItemInCart($itemId: String!, $user_id: String!, $itemName: String!, $imageLink: String!, $price: String!, $itemDescription: String!) {
putItemInCart(itemId: $itemId, user_id: $user_id, itemName: $itemName, imageLink: $imageLink, price: $price, itemDescription: $itemDescription) {
      _id
      username
      email
      password
      cart {
        itemId
        user_id
        itemName
        imageLink
        price
        itemDescription
      }
  }
}
`;

export const REMOVE_ITEM_IN_CART = gql`
  mutation removeItemInCart($itemId: String!, $user_id: String!, $itemName: String!, $imageLink: String!, $price: String!, $itemDescription: String!) {
removeItemInCart(itemId: $itemId, user_id: $user_id, itemName: $itemName, imageLink: $imageLink, price: $price, itemDescription: $itemDescription) {
      _id
      username
      email
      password
      cart {
        itemId
        user_id
        itemName
        imageLink
        price
        itemDescription
      }
  }
}
`;

export const EMPTY_CART = gql`

  mutation emptyCart($User: ID) {
emptyCart(User: $User) {
      _id
      username
      email
      password
      cart {
        itemId
        user_id
        itemName
        imageLink
        price
        itemDescription
      }
  }
}
`;

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $password: String!, $username: String!) {
updateUser(email: $email, password: $password, username: $username) { 
      _id
      username
      email
      password
      cart {
        itemId
        user_id
        itemName
        imageLink
        price
        itemDescription
      }
  }
}
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($itemId: ID!, $user_id: String!, $itemName: String!, $imageLink: String!, $price: String!, $itemDescription: String!) {
updateItem(itemId: $itemId, user_id: $user_id, itemName: $itemName, imageLink: $imageLink, price: $price, itemDescription: $itemDescription) {
      itemId
      user_id
      itemName
      imageLink
      price
      itemDescription
  }
}
`;

