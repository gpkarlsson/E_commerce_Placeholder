import React from 'react';
// import { Box, Card, CardBody, CardHeader, CardFooter, SimpleGrid, Text, Flex, Heading, HStack, Button, Divider, Image } from "@chakra-ui/react";
// import { AddIcon } from '@chakra-ui/icons'
// import Footer from '../components/Footer'

// import { faker } from '@faker-js/faker';

// import Carousel from "../components/Carousel";

// import { handleAddToCart } from "../helpers/handleAddToCart";
import { useQuery, gql } from '@apollo/client';
import ItemCard from '../components/ItemCard';
// export default function Dashboard() {

  const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      user_id
      itemName
      imageLink
      price
      itemDescription
    }
  }
`;

  //   const tasks = useLoaderData()
  // const productName = faker.commerce.productName();
  // const productDescription = faker.commerce.productDescription();
  // const productAdjective = faker.commerce.productAdjective();
  // const productPrice = faker.commerce.price(100, 200, 0, '$');
  // const productImage = faker.image.image(1234, 2345);

 const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_ITEMS);
  
    if (loading) return <p>'Loading...'</p>;
    if (error) return<p>Error: {error.message}</p>;
  
    return (
      <div>
        {data.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    );
  };
  export default Dashboard
