import { Box, Heading, Text, Image, Button, Center, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Card = ({ item }) => (
  <Box boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="blue.400" bg="gray.900" p={5} borderRadius="lg" m={{ base: 1, md: 5 }}>
    <Flex direction="column" h="100%">
      <Flex justifyContent="space-between">
        <Heading as="h2" size="md" color="LightGray" textAlign="left">{item.itemName}</Heading>
        <Text color="LightGray" textAlign="right" fontSize="1.25em">${item.price}</Text>
      </Flex>
      <Box color="gray.500" my={4}>
        <Center>
          <Image
            width="80%" // Image will take 80% of the parent's width
            src={item.imageLink}
            alt={item.itemName}
            borderRadius='lg'
            objectFit="contain" // To maintain aspect ratio
          />
        </Center>
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Text color="LightGray">{item.itemDescription}</Text>
        <Button bg="blue.400" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
      </Flex>
    </Flex>
  </Box>
);

export default Card;