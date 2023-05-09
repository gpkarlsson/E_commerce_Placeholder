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
    // how can i make this responsive? 
    //I want the navbar hstack components to be in a column on mobile, and in a row on desktop 
    <Flex 
    as="nav" 
    p="10px" 
    mb="40px" 
    alignItems="center" 
    border="1px solid red" 
    bg="brand.600"
    flexDirection={{ base: "column", md: "row", lg: "row"}}
    overflowX={{ base: "auto", md: "visible" }}
    >
      <Heading as="h1" fontSize="1.5em" color="brand.400">Generic E-Commerce Site #3</Heading>
      <Spacer />

      <HStack 
        spacing="20px"
        mt={{ base: "10px", md: "0" }}
        w={{ base: "100%", md: "auto" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        > 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">G</Box>
        <Text>gordon@email.dev</Text>
        <Link to="/api/users/login">
        <Button bg="brand.900" color="brand.700" onClick={showToast} >Logout</Button>
        </Link>
        <Link to="/cart">
        <Button bg="brand.900" color="brand.700">Checkout</Button>
        </Link>
      </HStack>
    </Flex>

  )
}
