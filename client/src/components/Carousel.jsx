import React from 'react';
import { faker } from '@faker-js/faker';
import { Box, Center, Heading, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Image } from '@chakra-ui/react';

export default function Carousel() {
  // const images = [...Array(3)].map(() => faker.image.fashion(500, 500));
  // const productNames = [...Array(3)].map(() => faker.commerce.productName());
  // console.log(images)
  const cats = faker.image.cats();
  return (
    <Box maxW="800px" mx="auto" mb="40px">
      <Center>
        <Heading as="h2" fontSize="2xl" mb="20px">Featured</Heading>
      </Center>
      {/* <Slider
        aria-label="carousel"
        minW="100%"
        maxW="100%"
        overflow="hidden"
        max={3}
        defaultValue={0}
        focusThumbOnChange={false}
      >
        <SliderTrack minH="400px">
          {images.map((image, index) => (
            <Box key={index} position="relative" w={`${100 / images.length}%`}>
              <SliderFilledTrack bg="transparent" />
              <Box position="absolute" left={0} top={0} w="100%" h="100%" zIndex={1}>
                <Image src={image} alt={productNames[index]} w="100%" h="100%" objectFit="cover" />
              </Box>
            </Box>
          ))}
        </SliderTrack>
        <SliderThumb
          bg="white"
          boxShadow="0 0 2px 1px rgba(0, 0, 0, 0.2)"
          borderRadius="50%"
          w="20px"
          h="20px"
          _focus={{ boxShadow: 'none' }}
        />
      </Slider> */}
      <Image src={cats} alt="cats" w="100%" h="100%" objectFit="cover" />
    </Box>
  );
}
