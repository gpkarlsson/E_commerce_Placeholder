import React from 'react'
import { FormControl, Input, FormLabel, Button } from '@chakra-ui/react'
import LoginLayout from '../layouts/LoginLayout'

export default function Login() {
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

  return (
    <LoginLayout>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" bg="white" color="brand.400" />
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" bg="white" color="brand.400" />
        <Button mt="20px" bg="brand.900" color="white">
          Login
        </Button>
        {/* eventually - onClick login logic */}
      </FormControl>
    </LoginLayout>
  )
}