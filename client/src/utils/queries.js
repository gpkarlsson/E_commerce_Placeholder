import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER_ITEMS = gql`
  {
    user {
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
    history {
      _id
      user_id
      order_date
      [order]
    }
  }
`;

export const QUERY_ITEMS = gql`
  {
    items {
      _id
      user_id
      itemName
      imageLink
      price
      itemDescription
    }
  }
`;