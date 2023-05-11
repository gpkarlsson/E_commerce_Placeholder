import React from 'react';
import { Box, Card, CardBody, CardHeader, CardFooter, SimpleGrid, Text, Flex, Heading, HStack, Button, Divider, Image } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import Footer from '../components/Footer'

import { faker } from '@faker-js/faker';

import Carousel from "../components/Carousel";

import { handleAddToCart } from "../helpers/handleAddToCart";

export default function Dashboard() {
  
  //   const tasks = useLoaderData()
  const productName = faker.commerce.productName();
  const productDescription = faker.commerce.productDescription();
  const productAdjective = faker.commerce.productAdjective();
  const productPrice = faker.commerce.price(100, 200, 0, '$');
  // const productImage = faker.image.image(1234, 2345);

  return (
    <>
      <Carousel />
      <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth="300px" >
        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700" >
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400" textAlign="center">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em"> {productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text color="brand.400">{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>

        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>

        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" display="flex" justify="center" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>

        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>

        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>

        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>

        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>
        <Card boxShadow="5px 5px 5px gray" borderTop="8px" borderColor="brand.500" bg="brand.700">
          <CardHeader>
            <Flex gap={5}>
              {/* <Box w="50px" h="50px">
                  <Avatar src={productImage} />
                </Box> */}
              <Box>
                <Heading as="h3" size="small" color="brand.400">{productAdjective} {productName}</Heading>
                <Text fontSize="1.25em">{productPrice} </Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Text>{productDescription}</Text>

          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button bg="brand.900" color="white" variant="ghost" leftIcon={<AddIcon />}>Add to Cart</Button>
            </HStack>
          </CardFooter>
        </Card>
      </SimpleGrid>
      <Footer />
    </>
  )
}

// export const tasksLoader = async () => {
//   const res = await fetch('http://localhost:3000/tasks')

//   return res.json()
// }
