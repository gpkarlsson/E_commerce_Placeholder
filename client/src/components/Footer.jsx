import React from 'react'
import { ButtonGroup, Container, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    // container to hold footer
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
      display={"flex"}
      flexShrink={0}
    >
      <Stack
        spacing={{ base: '4', md: '5' }}
      >
        {/* footer content */}
        <Flex
          justify="center"
          align="center"
          direction="column"
          py={{ base: 2, md: 4 }}
        >
          {/* LinkedIn button */}
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/gordon-karlsson"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="2rem" />}
              color="gray.500"
            />
            {/* GitHub Button */}
            <IconButton
              as="a"
              href="https://github.com/gpkarlsson/E_commerce_Placeholder"
              aria-label="GitHub"
              icon={<FaGithub fontSize="2rem" />}
              color="gray.500"
            />
            {/* Twitter Button */}
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="2rem" />}
              color="gray.500"
            />
          </ButtonGroup>
          {/* Footer Text */}
          <Text textAlign="center" fontSize="sm" mt={2} color="gray.500">&copy;  2023 Devin Hoffmaster, Gordon Karlsson, <a href="https://www.linkedin.com/in/stephen-merki-63064419a/">Stephen Merki</a>, <a href="https://www.linkedin.com/in/ben-ropa-92211b110/">Ben Ropa</a>. </Text>
        </Flex>
      </Stack>
    </Container>
  )
}
