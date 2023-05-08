import { useState } from "react";
import Footer from "../components/Footer";
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
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
  ]);

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
    <Box p={4}>
      <Heading mb={4} color="brand.400">Shopping Cart</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color="brand.400">Product Name</Th>
            <Th color="brand.400">Price</Th>
            <Th color="brand.400">Quantity</Th>
            <Th color="brand.400">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr color="brand.400" key={item.id}>
              <Td color="brand.400">{item.name}</Td>
              <Td color="brand.400">${item.price}</Td>
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
        <Text fontWeight="bold" color="brand.400">Total Price:</Text>
        <Text color="brand.400">${totalPrice}</Text>
      </Flex>
      <Button mt={4} bg="brand.900" color="white">
        Checkout
      </Button>
    </Box>
    <Footer />
    </>
  );
}

export default Cart;