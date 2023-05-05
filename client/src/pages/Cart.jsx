import { useState } from "react";
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
    <Box p={4}>
      <Heading mb={4}>Shopping Cart</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>${item.price}</Td>
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
        <Text fontWeight="bold">Total Price:</Text>
        <Text>${totalPrice}</Text>
      </Flex>
      <Button mt={4} colorScheme="blue">
        Checkout
      </Button>
    </Box>
  );
}

export default Cart;