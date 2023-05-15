
import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import {Link } from "react-router-dom";
// import Checkout from "./Checkout";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(initialCartItems);
  }, []);

  const handleQuantityChange = (id, e) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex((item) => item.id === id);
    newCartItems[index].quantity = e.target.value;
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
<Box minHeight="100vh" display="flex" flexDirection="column">
  <Box flex="0"></Box>
    <Box p={4}>
      <Heading mb={4} color="gray.200">Shopping Cart</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color="gray.200">Product Name</Th>
            <Th color="gray.200">Price</Th>
            <Th color="gray.200">Quantity</Th>
            <Th color="gray.200">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr color="gray.200" key={item.id}>
              <Td color="gray.200">{item.itemName}</Td>
              <Td color="gray.200">${item.price}</Td>
              <Td>
                <Input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </Td>
              <Td>
                <IconButton
                  icon={<DeleteIcon />}
                  variant="outline"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify="space-between" mt={4}>
        <Text fontWeight="bold" color="gray.200">Total Price:</Text>
        <Text color="gray.200">${totalPrice}</Text>
      </Flex>
      <Link to="/checkout">
      <Button mt={4} bg="blue.400" color="white" _hover={{ color: 'black' }}>Checkout</Button>
      </Link>
    </Box>
    <Footer />
    </Box>

    </>
  );
}

export default Cart;