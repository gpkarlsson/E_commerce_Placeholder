import React from 'react'
import { FormControl, Input, FormLabel, Button } from '@chakra-ui/react'
import LoginLayout from '../layouts/LoginLayout'

export default function Login() {
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
      </FormControl>
    </LoginLayout>
  )
}