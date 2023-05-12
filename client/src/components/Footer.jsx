// @ts-check

import React from 'react'
import { ButtonGroup, Container, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '12', md: '16' }}
    >
      <Stack
        spacing={{ base: '4', md: '5' }}
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          py={{ base: 2, md: 4 }}
        >
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/gpkarlsson/E_commerce_Placeholder"
              aria-label="GitHub"
              icon={<FaGithub fontSize="2rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="2rem" />}
            />
          </ButtonGroup>
          <Text textAlign="center" fontSize="sm" mt={2}>&copy;  2023 Devin Hoffmaster, Gordon Karlsson, Stephen Merki, Ben Ropa. </Text>
        </Flex>
      </Stack>
    </Container>
  )
}
