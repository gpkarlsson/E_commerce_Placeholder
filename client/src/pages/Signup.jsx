// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  // Checkbox,
  // Alert,
  // AlertIcon
} from "@chakra-ui/react";

// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";
// import Auth from "../utils/auth";


const SignupForm = () => {

  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input type="email" placeholder="Enter your email" bg="white" color="brand.400" />
      <FormLabel>Password</FormLabel>
      <Input type="password" placeholder="Enter your password" bg="white" color="brand.400" />
      <Button mt="20px" bg="brand.900" color="white">
        Login
      </Button>
      <Link to="/signup">
        <Button mt="20px" bg="brand.900" color="white">
          Sign-up
        </Button>
        </Link>

      </FormControl>
  );
};

export default SignupForm;