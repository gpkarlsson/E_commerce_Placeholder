import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import Footer from '../components/Footer';


const Create = () => {
  const [itemData, setItemData] = useState({
    itemName: '',
    imageLink: '',
    price: '',
    itemDescription: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  };

  const [addItem] = useMutation(ADD_ITEM, {
    update(cache, { data: { addItem } }) {
      cache.modify({
        fields: {
          items(existingItems = []) {
            const newItemRef = cache.writeFragment({
              data: addItem,
              fragment: gql`
                fragment NewItem on Item {
                  itemd
                  user_id
                  itemName
                  imageLink
                  price
                  itemDescription
                }
              `,
            });
            return [...existingItems, newItemRef];
          },
        },
      });
    },
  });
  
  const handleFormSubmit = (event) => {
    console.log(itemData)
    event.preventDefault();
    addItem({
      variables: {
        user_id: 'currentUser', // Replace with actual current user ID
        itemName: itemData.itemName,
        imageLink: itemData.imageLink,
        price: parseFloat(itemData.price),
        itemDescription: itemData.itemDescription,
      },
    });
  };
    // Add logic to create a new item using the itemData state
    // HINT: You will need to use the ADD_ITEM mutation and provide the input from the form
    

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        as="form"
        noValidate
        onSubmit={handleFormSubmit}
        bg="#2a2d2f"
        flex="1"
        p={4}
      >
        <FormControl id="itemName" isRequired>
          <FormLabel color="gray.100">Item Name</FormLabel>
          <Input
            type="text"
            name="itemName"
            placeholder="Item name"
            onChange={handleInputChange}
            value={itemData.itemName}
            bg="gray.300"
          />
          <FormErrorMessage>Item name is required!</FormErrorMessage>
        </FormControl>

        <FormControl id="imageLink" isRequired>
          <FormLabel color="gray.100">Image Link</FormLabel>
          <Input
            type="text"
            name="imageLink"
            placeholder="Image Link"
            onChange={handleInputChange}
            value={itemData.imageLink}
            bg="gray.300"
          />
          <FormErrorMessage>Image Link is required!</FormErrorMessage>
        </FormControl>

        <FormControl id="price" isRequired>
          <FormLabel color="gray.100">Price</FormLabel>
          <NumberInput min={0}>
            <NumberInputField
              name="price"
              placeholder="Price"
              onChange={handleInputChange}
              value={itemData.price}
              bg="gray.300"
            />
          </NumberInput>
          <FormErrorMessage>Price is required!</FormErrorMessage>
        </FormControl>

        <FormControl id="itemDescription" isRequired>
          <FormLabel color="gray.100">Item Description</FormLabel>
          <Textarea
            name="itemDescription"
            placeholder="Item Description"
            onChange={handleInputChange}
            value={itemData.itemDescription}
            minLength={1}
            maxLength={280}
            bg="gray.300"
          />
          <FormErrorMessage>
            Please add a description between 1 and 280 characters!
          </FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Create Item
        </Button>
      </Box>
      <Footer />
    </div>
  );
};



export default Create;