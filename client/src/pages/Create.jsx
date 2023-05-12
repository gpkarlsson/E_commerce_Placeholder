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
                  itemId
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
    <Box as="form" noValidate onSubmit={handleFormSubmit}>
      <FormControl id="itemName" isRequired>
        <FormLabel>Item Name</FormLabel>
        <Input
          type="text"
          name="itemName"
          placeholder="Item name"
          onChange={handleInputChange}
          value={itemData.itemName}
        />
        <FormErrorMessage>Item name is required!</FormErrorMessage>
      </FormControl>

      <FormControl id="imageLink" isRequired>
        <FormLabel>Image Link</FormLabel>
        <Input
          type="text"
          name="imageLink"
          placeholder="Image link"
          onChange={handleInputChange}
          value={itemData.imageLink}
        />
        <FormErrorMessage>Image link is required!</FormErrorMessage>
      </FormControl>

      <FormControl id="price" isRequired>
        <FormLabel>Price</FormLabel>
        <NumberInput min={0}>
          <NumberInputField
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
            value={itemData.price}
          />
        </NumberInput>
        <FormErrorMessage>Price is required!</FormErrorMessage>
      </FormControl>

      <FormControl id="itemDescription" isRequired>
        <FormLabel>Item Description</FormLabel>
        <Textarea
          name="itemDescription"
          placeholder="Item description"
          onChange={handleInputChange}
          value={itemData.itemDescription}
          minLength={1}
          maxLength={280}
        />
        <FormErrorMessage>
          Please add a description between 1 and 280 characters!
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Create Item
      </Button>
    </Box>
  );
};

export default Create;