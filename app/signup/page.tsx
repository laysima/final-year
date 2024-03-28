'use client'
// import Link from 'next/link'
import NextLink from 'next/link'
import { Box, Center, Flex, Input, Text, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem, InputGroup,Button, InputRightElement, Divider} from '@chakra-ui/react'
import { FaAngleRight } from "react-icons/fa";

const signup = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    
  return (
    <>
    <Box mb={20}>
      <Center flexDirection={'column'} p={40} bgImage={"bgsamps.jpg"} textAlign={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} >
        <Heading fontFamily={'"Outfit", sans-serif'} color={'white'}>Create Account</Heading>
        <Flex alignItems={'center'} textAlign={'center'} mt={3}>
        <Link style={{color:'white', fontSize:'1.5em'}} href="/"> Home </Link>
        <FaAngleRight style={{color:'white', fontSize:'1em'}}   />
        <Text color={'white'} fontSize={'1.2em'}>Create Account</Text>
        </Flex>
      </Center>

      <Center>
      <Box mt={20} justifyContent={'center'} alignItems={'center'} >
        <Box bg={'gray.100'} p={'60px'} borderRadius={'5px'}>
        <Heading  textAlign={'center'} fontFamily={'"Outfit", sans-serif'}>Sign In</Heading>
        <Flex mb={5} >
          <Flex mt={5} grow={1}> 
          <Link _hover={{ color:"teal.300", transition:'0.2s'}} fontWeight={'bold'}> Already have an account?</Link>
          </Flex>
          <Flex mt={5} shrink={0} >
          <Link _hover={{ color:"teal.300", transition:'0.2s'}} fontWeight={'bold'} href="login" >Sign In</Link>
          </Flex>
        </Flex>

        <Grid templateColumns='repeat(1, 1fr)' gap={6}  textAlign={'center'}  >
          <GridItem >
        <Input colorScheme='blue' placeholder='Firstname' border={'0.5px solid'} borderRadius={0} 
         height={'5vh'} bg={'white'}/>
          </GridItem>

          <GridItem >
        <Input colorScheme='blue' placeholder='Lastname' border={'0.5px solid'} borderRadius={0} 
         height={'5vh'} bg={'white'}/>
          </GridItem>

          <GridItem >
        <Input colorScheme='blue' placeholder='Email' border={'0.5px solid'} borderRadius={0} 
         height={'5vh'} bg={'white'}/>
          </GridItem>


        <GridItem>
          <InputGroup>
            <Input type={show ? 'text' : 'password'} placeholder='Password' border={'0.5px solid'} borderRadius={0} height={'5vh'} bg={'white'} />
            <InputRightElement mr={2}>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
            </InputRightElement>
          </InputGroup>
        </GridItem>

        </Grid>
        <Center>
        <Button  p={3} w={'100px'} colorScheme='teal' fontSize={'l'} borderRadius={0} mt={5}>CREATE</Button>
        </Center>

        </Box>
      </Box>
      </Center>
       
    </Box>
    </>
  )
}

export default signup
