import { Box, Card, CardBody, CardHeader, CardFooter, SimpleGrid, Text, Flex, Heading, HStack, Button, Divider} from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
// import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
//   const tasks = useLoaderData()

  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth="300px">
        <Card borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>Image here</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="small">title</Heading>
                  <Text>by </Text>
                </Box>
              </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Text>description</Text>

          </CardBody>
          <Divider borderColor="gray.200"/>
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={ <AddIcon /> }>Add to Cart</Button>
              {/* <Button variant="ghost" leftIcon={ <EditIcon /> }>Comment</Button> */}
            </HStack>
          </CardFooter>
        </Card>
    </SimpleGrid>
  )
}

// export const tasksLoader = async () => {
//   const res = await fetch('http://localhost:3000/tasks')

//   return res.json()
// }
