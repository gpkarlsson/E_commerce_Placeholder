import React from 'react'

import { v4  as uuidv4 } from 'uuid';
// import faker from '@faker-js/faker';

import { Box, Button, Divider, Heading, Text, VStack } from '@chakra-ui/react';

const OrderConfirmation = () => {
  // const randomName = faker.name.fullName();
  // const randomEmail = faker.internet.email();
  // const randomStreetAddress = faker.address.streetAddress();
  // const randomCity = faker.address.city();
  // const randomStateAbbr = faker.address.stateAbbr();
  // const randomZipCode = faker.address.zipCode();
  // const productName = faker.commerce.productName();
  // const productDescription = faker.commerce.productDescription();
  // const productAdjective = faker.commerce.productAdjective();
  // const productPrice = faker.commerce.price(100, 200, 0, '$');
  
  // const ID = uuidv4();

  // const { date, items, totalPrice } = orderDetails;
  
  
  return (
    // <Box p={4}>
    //   <Heading as="h2" mb={4} fontSize="xl" fontWeight="bold" color="brand.400">
    //     Order Confirmation
    //   </Heading>
    //   <Divider />
    //   <VStack mt={4} spacing={4} align="stretch">
    //     <Box>
    //       <Text fontWeight="bold">Order ID:</Text>
    //       {/* <Text>{ID}</Text> */}
    //     </Box>
    //     <Box>
    //       <Text fontWeight="bold">Order Date:</Text>
    //       {/* <Text>{date}</Text> */}
    //     </Box>
    //     <Box>
    //       <Text fontWeight="bold">Items:</Text>
    //       <VStack mt={2} spacing={2} align="stretch">
    //         {items.map((item) => (
    //           <Box key={item.id}>
    //             <Text>{productName} x {item.quantity}</Text>
    //             <Text fontSize="sm" color="gray.500">${item.price} each</Text>
    //           </Box>
    //         ))}
    //       </VStack>
    //     </Box>
    //     <Box>
    //       <Text fontWeight="bold">Total Price:</Text>
    //       <Text>${totalPrice}</Text>
    //     </Box>
    //     <Button mt={4} bg="brand.900" color="white">Continue Shopping</Button>
    //   </VStack>
    // </Box>

    <h1>Confirmation</h1>
    );
  };

export default OrderConfirmation;