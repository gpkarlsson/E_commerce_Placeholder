
import React from 'react'
import { Flex, Stack, Heading, Box, FormLabel, Input, Button, FormControl, Text, useToast, useColorModeValue } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {

    const forgotToast = useToast()

    const showForgotToast = () => {
        forgotToast({
            title: "Email Sent!",
            description: "Please check your email for a link to reset your password.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
            icon: <EmailIcon />
        })
    }

    function handleFormSubmit() {
        document.getElementById("email").value = "";
        showForgotToast();
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('#2a2d2f', 'gray.200')}>
            <Stack spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color="gray.200">
                        Forgot password?
                    </Heading>
                    {/* Functionality for e-mail coming soon */}
                    <Text fontSize={'lg'} color={'gray.200'}>
                        Enter your email and we'll send you a link to reset your password.
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('#171923', 'gray.700')}
                    boxShadow={"5px 5px 5px gray"}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email" isRequired>
                            <FormLabel color="gray.200">Email address</FormLabel>
                            <Input type="email" bg="white" placeholder="Enter your email address" color="gray.200"/>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleFormSubmit}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                            >
                                Send reset link
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'} color="gray.200">
                                Remembered your password? <Text as={Link} to="/login" color={'blue.400'}>Log in</Text>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}