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
      <Center flexDirection={'column'} p={40} bgImage={"cate1.jpg"} textAlign={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} >
        <Heading fontFamily={'"Outfit", sans-serif'} color={'white'}>Create Account</Heading>
        <Flex alignItems={'center'} textAlign={'center'} mt={3}>
        <Link style={{color:'white', fontSize:'1.5em'}} href="/"> Home </Link>
        <FaAngleRight style={{color:'white', fontSize:'1em'}}   />
        <Text color={'white'} fontSize={'1.2em'}>Create Account</Text>
        </Flex>
      </Center>

      <Center>
      <Box w={'800px'} mt={20} justifyContent={'center'} alignItems={'center'} >
        <Box bg={'gray.100'} p={15}>
        <Heading  textAlign={'center'} fontFamily={'"Outfit", sans-serif'}>Sign In</Heading>
        <Text fontWeight={'bold'} mb={10} textAlign={'center'} >Already have an Account?
        <Link _hover={{ color:"teal.300", transition:'0.2s'}} fontWeight={'bold'} href="login"> Sign In</Link> </Text>

        <Grid templateColumns='repeat(1, 1fr)' gap={6}  textAlign={'center'}  >
          <GridItem >
        <Input colorScheme='blue' placeholder='Firstname' border={'0.5px solid'} borderRadius={0} 
        width={'90%'} height={'5vh'} bg={'white'}/>
          </GridItem>

          <GridItem >
        <Input colorScheme='blue' placeholder='Lastname' border={'0.5px solid'} borderRadius={0} 
        width={'90%'} height={'5vh'} bg={'white'}/>
          </GridItem>

          <GridItem >
        <Input colorScheme='blue' placeholder='Email' border={'0.5px solid'} borderRadius={0} 
        width={'90%'} height={'5vh'} bg={'white'}/>
          </GridItem>


        <GridItem>
          <InputGroup ml={10}>
            <Input type={show ? 'text' : 'password'} placeholder='Password' border={'0.5px solid'} borderRadius={0} width={'90%'} height={'5vh'} bg={'white'} />
            <InputRightElement width='14rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
            </InputRightElement>
          </InputGroup>
        </GridItem>

        </Grid>
        <Center>
        <Button p={8} w={'150px'} fontSize={'xl'} borderRadius={0} mt={5} colorScheme='teal'>CREATE</Button>
        </Center>

        </Box>
      </Box>
      </Center>
       
    </Box>
    </>
  )
}

export default signup