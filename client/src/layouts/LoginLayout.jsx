// @ts-check
import React from 'react'
import { Box } from '@chakra-ui/react'
// import Footer from '../components/Footer'

export default function LoginLayout({ children }) {
  return (
    <Box bg="gray.100" minH="100vh">
      {/* your custom header here */}
      <Box maxW="md" mx="auto" py={4}>
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  )
} 
