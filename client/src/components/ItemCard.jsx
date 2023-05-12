import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Card = ({ item }) => (
  <Box boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
    <Box>
      <Box display="flex" gap={5}>
        <Box>
          <Heading as="h3" size="small" color="brand.400" textAlign="center">{item.itemName}</Heading>
          <Text fontSize="1.25em">${item.price}</Text>
        </Box>
      </Box>
    </Box>
    <Box color="gray.500">
      <Image
        src={item.imageLink}
        alt={item.itemName}
        borderRadius='lg'
      />
      <Text color="brand.400">{item.itemDescription}</Text>
    </Box>
    <Box>
      <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
    </Box>
  </Box>
);

export default Card;