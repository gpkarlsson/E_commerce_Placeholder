import React from 'react'

import { Button } from '@chakra-ui/react'
import {FormControl, FormLabel, Input, Checkbox, Box} from '@chakra-ui/react'
// import { Form } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Checkout() {
  return (
    <>
    <Box minHeight="100vh" display="flex" flexDirection="column" color="gray.200">
      <FormControl isRequired>
        <FormLabel mt="10px">First Name</FormLabel>
        <Input type="text" placeholder="Enter your first name" bg="white" />

        <FormLabel mt="10px">Last Name</FormLabel>
        <Input type="text" placeholder="Enter your last name" bg="white" />

        <FormLabel mt="10px">Email Address</FormLabel>
        <Input type="email" placeholder="Enter your email" bg="white" />

        <FormLabel mt="10px">Shipping Address</FormLabel>
        <Input type="text" placeholder="Enter your address" bg="white" />

        <FormLabel mt="10px">City</FormLabel>
        <Input type="text" placeholder="Enter your city" bg="white" />

        <FormLabel mt="10px">State</FormLabel>
        <Input type="text" placeholder="Enter your state" bg="white" />

        <FormLabel mt="10px">Zip Code</FormLabel>
        <Input type="text" placeholder="Enter your zip code" bg="white" />

        <FormLabel mt="10px">Phone Number</FormLabel>
        <Input type="text" placeholder="Enter your phone number" bg="white" />

        <Checkbox>Shipping Address is the same as billing address</Checkbox>
      </FormControl>
      <Button mt="10px" bg="blue.400" color="white">Submit</Button>
      <Box mt="auto">
      <Footer />

      </Box>
      </Box>  
      {/* On click, button should advance the step and return next page */}
    </>
  )
}
