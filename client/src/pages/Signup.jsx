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
  Text
} from '@chakra-ui/react';

import Footer from '../components/Footer';

import { Link } from 'react-router-dom';
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
      console.error(er);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
    <Text textAlign={"center"} paddingTop="10px" fontSize="30px" color="gray.200">Sign Up</Text>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Box flex="0"></Box>
        {/* This is needed for the validation functionality above */}
        <Box as="form" noValidate onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert status="error" display={showAlert ? 'flex' : 'none'}>
            <AlertIcon />
            <AlertDescription>Something went wrong with your signup!</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowAlert(false)} />
          </Alert>

          <FormControl id="username" isRequired>
            <FormLabel color="gray.200">Username</FormLabel>
            <Input
              type="text"
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              bg="white"
            />
            <FormErrorMessage>Username is required!</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel color="gray.200">Email</FormLabel>
            <Input
              type="email"
              placeholder="Your email address"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              bg="white"
            />
            <FormErrorMessage>Email is required!</FormErrorMessage>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel color="gray.200">Password</FormLabel>
            <Input
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              bg="white.900"
            />
            <FormErrorMessage>Password is required!</FormErrorMessage>
          </FormControl>
          
          <Button
            bg="blue.400"
            mt={4}
            isLoading={false}
            type="submit"
            isDisabled={
              !(userFormData.username && userFormData.email && userFormData.password)
            }
          >
            Submit
          </Button>

        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default SignupForm;