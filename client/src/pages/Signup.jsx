import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Button,
} from '@chakra-ui/react';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ 
    username: '', 
    email: '', 
    password: '' 
  });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error, data }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value 
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    
    <>
      {/* This is needed for the validation functionality above */}
      <Box as="form" noValidate onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert status="error" display={showAlert ? 'flex' : 'none'}>
          <AlertIcon />
          <AlertDescription>Something went wrong with your signup!</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowAlert(false)} />
        </Alert>
    
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
          />
          <FormErrorMessage>Username is required!</FormErrorMessage>
        </FormControl>
    
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
          />
          <FormErrorMessage>Email is required!</FormErrorMessage>
        </FormControl>
    
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
          />
          <FormErrorMessage>Password is required!</FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={false}
          type="  submit"
          isDisabled={
            !(userFormData.username && userFormData.email && userFormData.password)
          }
        >
          Submit
        </Button>
      </Box>
    </>
    );
  };
  
  export default SignupForm;