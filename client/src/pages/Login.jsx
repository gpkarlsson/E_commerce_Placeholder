import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
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
  Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LoginForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: ''
  });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      Auth.login(data.loginUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Text textAlign={"center"} paddingTop="10px" fontSize="30px" color="gray.200">Sign In</Text>
        <Box minHeight="100vh" display="flex" flexDirection="column" as="form" noValidate onSubmit={handleFormSubmit}>
          <Alert status="error" display={showAlert ? 'flex' : 'none'}>
            <AlertIcon />
            <AlertDescription>Something went wrong with your login!</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowAlert(false)} />
          </Alert>

          <FormControl id="email" isRequired>
            <FormLabel color="gray.200">Email</FormLabel>
            <Input
              type="email"
              placeholder="Your email address"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              bg="white.900"
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
            width="86px"
            bg="blue.400"
            color="white"
            mt={4}
            _hover={{ color: 'black' }}
            isLoading={false}
            type="submit"
            isDisabled={
              !(userFormData.email && userFormData.password)
            }
          >
            Submit
          </Button>
          <Link to="/forgot" >
            <Text textAlign={"right"} color="gray.200">Forgot your password?</Text>
            </Link>
            <Text textAlign={"right"} color="gray.200" mt={2}><Link as="a" to="/signup">Don't have an account? <Text color="blue.400">Sign Up</Text></Link></Text>
  
          <Box mt="auto">
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm; 
