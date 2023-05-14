// @ts-check
import React from 'react'

import Stepper from '../components/Stepper'
import { Button, Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function Shipping() {
  return (
    <>
    <Stepper />
    {/* <Form> */}
        <FormControl isRequired>
          <FormLabel mt="10px">First Name</FormLabel>
          <Input type="text" placeholder="Enter your first name" bg="white" color="brand.400" />
          
          <FormLabel mt="10px">Last Name</FormLabel>
          <Input type="text" placeholder="Enter your last name" bg="white" color="brand.400" />

          <FormLabel mt="10px">Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email" bg="white" color="brand.400" />

          <FormLabel mt="10px">Shipping Address</FormLabel>
          <Input type="text" placeholder="Enter your address" bg="white" color="brand.400" />

          <FormLabel mt="10px">City</FormLabel>
          <Input type="text" placeholder="Enter your city" bg="white" color="brand.400" />

          <FormLabel mt="10px">State</FormLabel>
          <Input type="text" placeholder="Enter your state" bg="white" color="brand.400" />

          <FormLabel mt="10px">Zip Code</FormLabel>
          <Input type="text" placeholder="Enter your zip code" bg="white" color="brand.400" />

          <FormLabel mt="10px">Phone Number</FormLabel>
          <Input type="text" placeholder="Enter your phone number" bg="white" color="brand.400" />
          
          <Checkbox>Shipping Address is the same as billing address</Checkbox>
        </FormControl>
        <br />

        <FormLabel mt="10px">Credit Card Number</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your credit card number" bg="white" color="brand.400" />
        <br />
        <FormLabel mt="10px">Expiration Date</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your expiration date" bg="white" color="brand.400" />
        <br />
        <FormLabel mt="10px">CVV</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your CVV" bg="white" color="brand.400" />
        <br />
        <FormLabel mt="10px">Billing Zip Code</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your billing zip code" bg="white" color="brand.400" />
        <br />
        
        <Checkbox>Save this information for next time</Checkbox>
        <Button mt="20px" bg="brand.900" color="white">Place Order</Button>

      {/* </Form> */}
    </>
  )
}
