'use client'
import { Text, Input, Box, Grid, GridItem, IconButton, FormControl,FormLabel,FormErrorMessage,FormHelperText,
 Button, Link, Flex, Center, Heading, Divider, InputRightElement, InputGroup} from '@chakra-ui/react'
import { FaAngleRight } from "react-icons/fa";
// import Link from 'next/link'
import { useState } from 'react';
import NextLink from 'next/link'

import React from 'react'

const login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [input, setInput] = useState('')

  const handleInputChange = (e:any) => setInput(e.target.value)

  const isError = input === ''
  const isError1 = input === ''

  return (
    <>
    <Box mb={20}>
      <Center flexDirection={'column'} p={40} bgImage={"cate1.jpg"} textAlign={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} >
        <Heading fontFamily={'"Outfit", sans-serif'} color={'white'}>Account</Heading>
        <Flex alignItems={'center'} textAlign={'center'} mt={3}>
        <Link style={{color:'white', fontSize:'1.5em'}} href="/"> Home </Link>
        <FaAngleRight style={{color:'white', fontSize:'1em'}}   />
        <Text color={'white'} fontSize={'1.2em'}>Account</Text>
        </Flex>
      </Center>

      <Center>
      <Box w={'800px'} mt={20} justifyContent={'center'} alignItems={'center'} >
        <Box bg={'teal'} p={15}>
        <Heading mb={10} textAlign={'center'} color={'white'} fontFamily={'"Outfit", sans-serif'}>Sign In</Heading>

        {/* <Grid templateColumns='repeat(1, 1fr)' gap={6}  textAlign={'center'}  >
          <GridItem >
        <Input  colorScheme='blue' placeholder='Email' border={'0.5px solid'} borderRadius={0} 
        w={'90%'} h={'5vh'} bg={'white'}/>
          </GridItem>
         
          <GridItem>
          <InputGroup ml={10}>
      <Input type={show ? 'text' : 'password'} placeholder='Password' border={'0.5px solid'} borderRadius={0} w={'90%'} h={'5vh'} bg={'white'} />
      <InputRightElement w='14rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
          </GridItem>

        </Grid> */}

<FormControl isInvalid={isError}>
<Input mb={10} ml={10} colorScheme='blue' placeholder='Email' border={'0.5px solid'} borderRadius={0} onChange={handleInputChange} w={'90%'} h={'5vh'} bg={'white'}/>
      {!isError ? (
        <FormHelperText ml={10} mt={-5} color={'white'}>
        </FormHelperText>
      ) : (
        <FormErrorMessage ml={10} mt={-10} >Email is required.</FormErrorMessage>
      )}
</FormControl>


<FormControl isInvalid={isError}>
<InputGroup ml={10}>
      <Input mt={5} type={show ? 'text' : 'password'} placeholder='Password' border={'0.5px solid'} borderRadius={0} w={'90%'} h={'5vh'} bg={'white'} onChange={handleInputChange} />
      <InputRightElement w='14rem'>
        <Button mt={10} size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

      {!isError ? (
        <FormHelperText ml={10} mt={-5} color={'white'}>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage ml={10} mt={-5} >Email is required.</FormErrorMessage>
      )}
</FormControl>


        <Center>
        <Button  p={8} w={'150px'} fontSize={'xl'} borderRadius={0} mt={5} >SIGN IN</Button>
        </Center>
        <Divider border={'0.5px solid white'} mt={7}/>

        <Flex mb={5} ml={7} mr={7}>
          <Flex mt={5} grow={1}> 
          <Link color={'white'}  _hover={{ color:"teal.300", transition:'0.2s'}} fontWeight={'bold'} href="/" > Forgot your Password?</Link>
          </Flex>
          <Flex mt={5} shrink={0} >
          <Link color={'white'}  _hover={{ color:"teal.300", transition:'0.2s'}} fontWeight={'bold'} href="signup" >Sign Up</Link>
          </Flex>
        </Flex>

        </Box>
      </Box>
      </Center>
       
    </Box>
    </>
  )
}

export default login