'use client'
import React from 'react'
import { Box, Flex, Heading, Text, Input, Stack, Button, AspectRatio, Icon } from '@chakra-ui/react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";


const page = () => {
  return (
    <>
    <Box p={'2px'} bg={'#F9F9F8'} >
        <Flex gap={5} justifyContent={'center'} mt={10} p={12} >
       <Box border={'1px solid teal'} p={'50px'} borderRadius={'5px'} _hover={{border:'2px solid #29A0B1', cursor:'pointer', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}}>
            <Heading textColor={'teal'} fontSize={'30px'} fontFamily={'"Outfit", sans-serif'}>Address</Heading>
            <Text fontSize={'20px'}>P.O.BOX CT6924</Text>
            <Text fontSize={'20px'}>GREATER ACCRA</Text>
       </Box>

       <Box border={'1px solid teal'} p={'50px'} borderRadius={'5px'} _hover={{border:'2px solid #29A0B1', cursor:'pointer', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}}>
            <Heading textColor={'teal'} fontSize={'30px'} fontFamily={'"Outfit", sans-serif'}>Call Us</Heading>
            <Text fontSize={'20px'}>+233 50 924 6726</Text>
            <Text fontSize={'20px'}>+233 59M 811 9295</Text>
       </Box>

       <Box border={'1px solid teal'} p={'50px'} borderRadius={'5px'} _hover={{border:'2px solid #29A0B1', cursor:'pointer', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}}>
            <Heading textColor={'teal'} fontSize={'30px'} fontFamily={'"Outfit", sans-serif'}>Mail Id</Heading>
            <Text fontSize={'20px'}>shakur@gmail.com</Text>
            <Text fontSize={'20px'}>example@gmail.com</Text>
       </Box>

       <Box border={'1px solid teal'} p={'50px'} borderRadius={'5px'} _hover={{border:'2px solid #29A0B1', cursor:'pointer', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}}>
            <Heading textColor={'teal'} fontSize={'30px'} fontFamily={'"Outfit", sans-serif'}> Working Hours</Heading>  
            <Text fontSize={'20px'}> Monday - Saturday : </Text>
            <Text fontSize={'20px'}>08:00 - 22:00</Text>
            <Text fontSize={'20px'}>Sunday - Holiday</Text>   
       </Box>
       </Flex>
    </Box>

    <Flex mt={20}>
    <Flex p={'30px'} direction={'column'} maxW={'50%'} >
      <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'} fontSize={'4xl'}>
       Get In Touch With Our Team
      </Heading>
      <Text mt={5} fontSize={'xl'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>
  
      <Stack spacing={5} mt={5} border={'0px'}>
        <Input  placeholder='Name*' size='md' p={8} bg={'teal.50'} borderRadius={'none'} border={'none'} />
        <Input placeholder='Email*' size='md' p={8}bg={'teal.50'} borderRadius={'none'} border={'none'}/>
        <Input placeholder='Phone Number*' type='tel' size='md' p={8}bg={'teal.50'} borderRadius={'none'} border={'none'} />
        <Input h={'12vh'} placeholder='Comment*' size='md' p={8} bg={'teal.50'} borderRadius={'none'} border={'none'}/>
      </Stack>

      <Button borderRadius={'none'} mt={5} w={'70px'} colorScheme='teal'>SEND</Button>

    </Flex>
        <iframe
            style={{ width: '100%', border: '0' }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
        />
    </Flex>


    {/* ////////////////////////////////////our Branches At section ///////////////////////////////// */}
    <Box mt={20}>
        <Heading fontFamily={'"Outfit", sans-serif'} textAlign={'center'}>
         Our Branches At
        </Heading>
        <Text fontSize={'xl'} textAlign={'center'}>
            Yet to be commuincated
        </Text>

   
        <Flex gap={5} justifyContent={'center'} mt={3} p={12} >
       <Box border={'1px solid teal'} p={'50px'} bg={'teal.50'} borderRadius={'5px'} _hover={{border:'2px solid #29A0B1', cursor:'pointer', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}}>
            <Heading textColor={'teal'} fontSize={'30px'} fontFamily={'"Outfit", sans-serif'}>Address</Heading>

            <Flex alignItems={'center'} gap={2}>
            <Icon as={FaLocationDot} />
            <Text fontSize={'20px'}> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</Text>
            </Flex>

            <Flex alignItems={'center'} gap={2}>
            <Icon as={FaPhone} />
            <Text fontSize={'20px'}>000 - 123 - 45678</Text>
            </Flex>

            <Flex alignItems={'center'} gap={2}>
            <Icon as={MdMail} />
            <Text fontSize={'20px'}>info@example.com</Text>
            </Flex>
          
       </Box>

       <Box border={'1px solid teal'} p={'50px'} bg={'teal.50'} borderRadius={'5px'} _hover={{border:'2px solid #29A0B1', cursor:'pointer', transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}}>
            <Heading textColor={'teal'} fontSize={'30px'} fontFamily={'"Outfit", sans-serif'}>Call Us</Heading>
            <Text fontSize={'20px'}>+233 50 924 6726</Text>
            <Text fontSize={'20px'}>+233 59 811 9295</Text>
       </Box>
       </Flex>
    </Box>

 

    </>
  )
}

export default page