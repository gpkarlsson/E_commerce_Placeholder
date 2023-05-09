import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import Stepper from '../components/Stepper'

export default function Billing() {

  return (
    <>
      <Stepper />
      <FormControl isRequired>
        <FormLabel>First Name</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your first name" bg="white" color="brand.400" p="10px"/>
        <FormLabel>Last Name</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your last name" bg="white" color="brand.400" p="10px" />
        <FormLabel>Credit Card Number</FormLabel>
        <Input className="billingInput" type="text" placeholder="Enter your credit card number" bg="white" color="brand.400" />
        <Button mt="20px" bg="brand.900" color="white">Place Order</Button>
      </FormControl>
    </>

  )
}
