import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast } from "@chakra-ui/react"
import { UnlockIcon } from "@chakra-ui/icons"

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
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">PLATFORM NAME HERE</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">G</Box>
        <Text>gordon@email.dev</Text>
        <Button colorScheme="purple">Logout</Button>
        <Button colorScheme="purple" onClick={showToast}>Checkout</Button>

      </HStack>
    </Flex>
  )
}
