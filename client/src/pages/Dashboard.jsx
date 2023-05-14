import { React, useState } from 'react';
// import { Box, Card, CardBody, CardHeader, CardFooter, SimpleGrid, Text, Flex, Heading, HStack, Button, Divider, Image } from "@chakra-ui/react";
// import { AddIcon } from '@chakra-ui/icons'
// import Footer from '../components/Footer'

import {GET_ITEMS} from '../utils/queries';

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

// import { handleAddToCart } from "../helpers/handleAddToCart";
import { useQuery, gql } from '@apollo/client';
import ItemCard from '../components/ItemCard';
import { SimpleGrid } from '@chakra-ui/react';
// import { HandleAddToCart } from '../helpers/HandleAddToCart';
// export default function Dashboard() {


const Dashboard = () => {
  
function handleAddToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  console.log(item)

  //Check if the item is already in the cart
  let existingItem = cartItems.find((i) => i.id === item._id);

  if (existingItem) {
    existingItem.quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } else {
    // If the item is not in the cart, add it
   const newItem = { ...item, quantity: 1 };
   localStorage.setItem('cartItems', JSON.stringify([...cartItems, newItem]));
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
};


  const { loading, error, data } = useQuery(GET_ITEMS);


  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Carousel />
      <SimpleGrid columns={[1, 1, 2]} spacing="40px" mt="20px">
        {data.allItems.map((item) => (
          <ItemCard key={item._id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </SimpleGrid>
      <Footer />
    </>

  );
};
export default Dashboard
