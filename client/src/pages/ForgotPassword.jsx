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
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Forgot password?
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Enter your email and we'll send you a link to reset your password.
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
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
                            <Text align={'center'}>
                                Remembered your password? <Text as={Link} to="/api/users/login" color={'blue.400'}>Log in</Text>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}