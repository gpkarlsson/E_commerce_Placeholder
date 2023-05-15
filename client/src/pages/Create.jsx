import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  useToast
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import Footer from '../components/Footer';
import jwt_decode from 'jwt-decode'

const Create = () => {
  const [itemData, setItemData] = useState({
    itemName: '',
    imageLink: '',
    price: '',
    itemDescription: '',
  });

  const toast = useToast();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // If the input field is price, convert value to number
    const inputValue = name === 'price' ? parseFloat(value) : value;
    setItemData({
      ...itemData,
      [name]: inputValue,
    });
  };

  const handlePriceChange = (value) => {
    setItemData({
      ...itemData,
      price: value,
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
                  id
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
    onCompleted: () => {
      toast({
        title: "Success.",
        description: "Item created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setItemData({
        itemName: '',
        imageLink: '',
        price: '',
        itemDescription: '',
      });
    },
  });

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem('id_token');
    
    let decodedToken;
    try {
      decodedToken = jwt_decode(token);
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      // Redirect the user to the login page
      window.location.href = '/login';
      return;
    }
  
    const userId = decodedToken.data._id;
  
    try {
      await addItem({
        variables: {
          user_id: userId,
          itemName: itemData.itemName,
          imageLink: itemData.imageLink,
          price: parseFloat(itemData.price),
          itemDescription: itemData.itemDescription,
        },
      });
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
       <Text textAlign={"center"} paddingTop="10px" fontSize="30px" color="gray.200">List New Item</Text>
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
          <NumberInput min={0} value={itemData.price} onChange={handlePriceChange}>
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

        <Button mt={4} bg="blue.400" type="submit">
          Create Item
        </Button>
      </Box>
      <Footer />
    </div>
  );
};

export default Create;