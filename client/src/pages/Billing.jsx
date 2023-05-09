import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

export default function Billing() {
  return (
    <FormControl isRequired>
      <FormLabel>First Name</FormLabel>
      <Input type="text" placeholder="Enter your first name" bg="white" color="brand.400" />
      <FormLabel>Last Name</FormLabel>
      <Input type="text" placeholder="Enter your last name" bg="white" color="brand.400" />
      <FormLabel>Credit Card Number</FormLabel>
      <Input type="text"  placeholder="Enter your credit card number" bg="white" color="brand.400" />

    </FormControl>
  )
}
