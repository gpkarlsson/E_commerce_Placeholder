import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($userId: ID) {
    currentUser(userId: $userId) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER_ITEMS = gql`
  query getUserItems($userId: ID){
    currentUserItems(userId: $userId) {
      _id
      username
      email
      cart {
        _id
        itemName
        imageLink
        price
        itemDescription
      }
    }
  }
`;

export const QUERY_USER_HISTORY = gql`
  {
    currentUserHistory {
      _id
      user_id
      order_date
      order
    }
  }
`;

export const QUERY_ITEM = gql`
  {
    singleItem {
      _id
      user_id
      itemName
      imageLink
      price
      itemDescription
    }
  }
  `;

export const GET_ITEMS = gql`
query {
  allItems {
    _id
    itemName
    imageLink
    price
    itemDescription
  }
}
`;
