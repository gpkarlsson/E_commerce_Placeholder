// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   // Checkbox,
//   // Alert,
//   // AlertIcon
// } from "@chakra-ui/react";

// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";
// import Auth from "../utils/auth";

// import { useState, useEffect } from "react";

// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Checkbox,
//   Alert,
//   AlertIcon
// } from "@chakra-ui/react";

// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";
// import Auth from "../utils/auth";


// const SignupForm = () => {
//   const [userFormData, setUserFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser, { error }] = useMutation(ADD_USER);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addUser({
//         variables: { ...userFormData },
//       });

//       Auth.login(data.addUser.token);

//     } catch (e) {
//       console.error(e);
//     }

//     setUserFormData({
//       email: "",
//       password: "",

//     });

//   };

//   return (
//     <>
      
//   );
// };

// export default SignupForm;
// const SignupForm = () => {

//   return (
//     <FormControl>
//       <FormLabel>Email</FormLabel>
//       <Input type="email" placeholder="Enter your email" bg="white" color="brand.400" />
//       <FormLabel>Password</FormLabel>
//       <Input type="password" placeholder="Enter your password" bg="white" color="brand.400" />
//       <Button mt="20px" bg="brand.900" color="white">
//         Login
//       </Button>
//       <Link to="/signup">
//         <Button mt="20px" bg="brand.900" color="white">
//           Sign-up
//         </Button>
//         </Link>

//       </FormControl>
//   );
// };

// export default SignupForm;
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link } from 'react-router-dom'

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up!
          </Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Text as={Link} to="/api/users/login" color={'blue.400'}>Login</Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}