import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast } from "@chakra-ui/react"
import { UnlockIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom' 

export default function Navbar() {

    const toast = useToast()

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "Successfully logged out",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon />
        })
    }

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" border="1px solid red" bg="brand.600">
      <Heading as="h1" fontSize="1.5em" color="brand.400">PLATFORM NAME HERE</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">G</Box>
        <Text>gordon@email.dev</Text>
        <Button bg="brand.900" color="brand.700" onClick={showToast}>Logout</Button>
        <Link to="/cart">
        <Button bg="brand.900" color="brand.700">Checkout</Button>
        </Link>
      </HStack>
    </Flex>
  )
}