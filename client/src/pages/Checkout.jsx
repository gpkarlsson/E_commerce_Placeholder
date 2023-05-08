import React from 'react'
import Stepper from '../components/Stepper'
import { Button, Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Form } from 'react-router-dom'
// import {activeStep} from '../components/Stepper.jsx'

export default function Checkout() {
  return (
    <>
    <Stepper />
    <h1>Checkout</h1>
    <Form>
      <FormControl isRequired>
        <FormLabel mt="10px">First Name</FormLabel>
          <Input type="text" placeholder="Enter your first name" bg="white" color="brand.400" />
        <FormLabel  mt="10px">Last Name</FormLabel>
          <Input type="text" placeholder="Enter your last name" bg="white" color="brand.400" />
        <FormLabel  mt="10px">Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email" bg="white" color="brand.400" />
        <FormLabel  mt="10px">Shipping Address</FormLabel>
          <Input type="text" placeholder="Enter your address" bg="white" color="brand.400" />
        <FormLabel  mt="10px">City</FormLabel>
          <Input type="text" placeholder="Enter your city" bg="white" color="brand.400" />
        <FormLabel  mt="10px">State</FormLabel>
          <Input type="text" placeholder="Enter your state" bg="white" color="brand.400" />
        <FormLabel  mt="10px">Zip Code</FormLabel>
        <Input type="text" placeholder="Enter your zip code" bg="white" color="brand.400" />
        <FormLabel  mt="10px">Phone Number</FormLabel>
        <Input type="text" placeholder="Enter your phone number" bg="white" color="brand.400" />
        <Checkbox>Shipping Address is the same as billing address</Checkbox>
      </FormControl>
    </Form>
    <Button>Continue</Button> 
    {/* On click, button should advance the step and return next page */}
    </>
  )
}
