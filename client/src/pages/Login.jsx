
// import { FormControl, Input, FormLabel, Button } from '@chakra-ui/react'
// import LoginLayout from '../layouts/LoginLayout'
// import { Link } from 'react-router-dom'

// export default function Login() {
  // const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  // // declaring loginUser with useMutation
  // const [loginUser, { error }] = useMutation(LOGIN_USER);

  // useEffect(() => {
  //   if (error) setShowAlert(true);
  //   else setShowAlert(false);
  // }, [error])


  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   // use loginUser function
  //   try {
  //     const { data } = await loginUser({
  //       variables: { ...userFormData },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   setUserFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  // };

//   return (
//     <LoginLayout>
//       <FormControl>
//         <FormLabel>Email</FormLabel>
//         <Input type="email" placeholder="Enter your email" bg="white" color="brand.400" />
//         <FormLabel>Password</FormLabel>
//         <Input type="password" placeholder="Enter your password" bg="white" color="brand.400" />
//         <Button mt="20px" bg="brand.900" color="white">
//           Login
//         </Button>
//         <Link to="signup">
//         <Button mt="20px" bg="brand.900" color="white">
//           Sign-up
//         </Button>
//         </Link>
//         {/* eventually - onClick login logic */}
//       </FormControl>
//     </LoginLayout>
//   )
// }
import React from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Auth from '../utils/auth';

export default function LoginCard() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
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
      const { data } = await login({
        variables: { ...userFormData }
      });

      Auth.login(data.login.token);

    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Don't have an account? Sign up <Text as={Link} to="/api/users" color="blue.400" >here!</Text>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" onSubmit={handleFormSubmit} onChange={handleInputChange} value={userFormData.email} required>
              
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" id="password" onChange={handleInputChange} required value={userFormData.password} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'} to="/forgot">Forgot password?</Link>
              </Stack>
              <Button
              type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}