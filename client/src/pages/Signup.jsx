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
