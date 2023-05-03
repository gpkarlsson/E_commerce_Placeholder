import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">PLATFORM NAME HERE</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">G</Box>
        <Text>gordon@email.dev</Text>
        <Button colorScheme="purple">Logout</Button>
        <Button colorScheme="purple">Checkout</Button>

      </HStack>
    </Flex>
  )
}
