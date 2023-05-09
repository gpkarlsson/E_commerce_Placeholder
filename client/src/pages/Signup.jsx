import { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  AlertIcon
} from "@chakra-ui/react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";


const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

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

    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      email: "",
      password: "",

    });

  };

  return (
    <>
      <FormControl noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert status="error" onClose={() => setShowAlert(false)} show={showAlert}>
          <AlertIcon />
          Something went wrong with your signup!
        </Alert>

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          placeholder="Your email"
          onChange={handleInputChange}
          value={userFormData.email}
          isRequired
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          isRequired
        />

      <Button 
      _disabled={
        !(
          userFormData.email &&
          userFormData.password
        )
      }
      type="submit"
      colorScheme="brand"
      >
        Submit
      </Button>
      </FormControl>

    </>
  );
};

export default SignupForm;