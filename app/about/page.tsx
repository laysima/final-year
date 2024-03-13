'use client'
import React from 'react'
import { Flex , Heading, Button, Text, Image, Box, Stack, Input, Link} from '@chakra-ui/react'
import NextLink from "next/link"
import { PiHandshakeLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPersonAdd } from "react-icons/go";
import { IoTrophyOutline } from "react-icons/io5";
import { TbDentalBroken } from "react-icons/tb";
import { FaDumbbell } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Head from 'next/head';

const about = () => {
  return (
    <>
       {/* ///////////////////////////////some other section  part 1/////////////////////////*/}
    <Flex bg={'#F9F9F8'} mt={10}>
    <Flex p={'30px'} direction={'column'} maxW={'50%'} >
      <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'} fontSize={'4xl'}>
        Excellent Medical Professionals With Significant 
        Experience
      </Heading>
      <Text mt={5} fontSize={'xl'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>
      
      <Link as={NextLink} href='/'>
        <Button mt={5} width={'200px'} mr={3} colorScheme="teal" borderRadius={'0px'}>SHOP NOW</Button>
      </Link>
      
      <Flex mt={10}>
        <Flex>
      <PiHandshakeLight fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'}>200k +</Heading>
        <Text color={'ash'}>Happy clients</Text>
      </Flex>
      </Flex>

      <Flex ml={20}>
      <IoMdHeartEmpty fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading color={'#175873'}  fontFamily={'"Outfit", sans-serif'}>50k +</Heading>
        <Text color={'ash'}>Orders delivered</Text>
      </Flex>
      </Flex>
      </Flex>

      <Flex mt={10}>
        <Flex>
      <GoPersonAdd fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading  color={'#175873'} fontFamily={'"Outfit", sans-serif'}>80 +</Heading>
        <Text color={'ash'}>Area Served</Text>
      </Flex>
      </Flex>

      <Flex ml={24}>
      <IoTrophyOutline fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'}>5L</Heading>
        <Text color={'ash'}>Medicines</Text>
      </Flex>
      </Flex>
      </Flex>
      
    </Flex>
     <Image src='healthprof.jpg' mr={12} width={'50%'} height={'70vh'}></Image>
    </Flex>

  {/*/////////////////////////////// Core Values ///////////////////////////////////////*/}
    <Box p={'30px'}>
      <Heading fontFamily={'"Outfit", sans-serif'} textAlign={'center'}>
        Our Core Values
      </Heading>
      <Text fontSize={'xl'} textAlign={'center'}>
      Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
      Aenean<br></br> ante nisl, cursus a pretium eget gravida eget sem. Nunc quis purus.
      </Text>

      <Flex mt={10}> 
        <Flex direction={'column'} alignItems={'center'} >
          <Flex borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
            <TbDentalBroken />
          </Flex>
          <Heading mt={3} fontFamily={'"Outfit", sans-serif'} alignItems={'center'} fontSize={'2xl'}>Medicines</Heading>
          <Text mt={5} textAlign={'center'} w={'60%'} fontSize={'xl'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Flex>

        <Flex direction={'column'} alignItems={'center'} >
          <Flex borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
          <FaHandsHoldingChild />
          </Flex>
          <Heading mt={3} fontFamily={'"Outfit", sans-serif' }alignItems={'center'} fontSize={'2xl'}>Beauty Care</Heading>
          <Text fontSize={'xl'} mt={5} textAlign={'center'} w={'60%'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Flex>

        <Flex direction={'column'} alignItems={'center'} >
          <Flex borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
          <MdOutlineHealthAndSafety />
          </Flex>
          <Heading mt={3} fontFamily={'"Outfit", sans-serif'} alignItems={'center'} fontSize={'2xl'}>Health Products</Heading>
          <Text fontSize={'xl'} mt={5} textAlign={'center'} w={'60%'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Flex>

        <Flex direction={'column'} alignItems={'center'} >
          <Flex borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
          <FaDumbbell />
          </Flex>
          <Heading mt={3} fontFamily={'"Outfit", sans-serif'} alignItems={'center'} fontSize={'2xl'}>Cardio Care</Heading>
          <Text fontSize={'xl'} mt={5} textAlign={'center'} w={'60%'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Flex>   
      </Flex>
    </Box>


    {/* /////////////////////////////// Staff Reach Out/////////////////////////*/}
    <Flex mt={20}>
    <Flex p={'30px'} direction={'column'} maxW={'50%'} >
      <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'} fontSize={'4xl'}>
       Reach Out To Our Staff
      </Heading>
      <Text mt={5} fontSize={'xl'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>
  
      <Stack spacing={5} mt={5} border={'0px'}>
        <Input placeholder='Name*' size='md' p={8} bg={'teal.100'} borderRadius={'none'} border={'none'} />
        <Input placeholder='Email*' size='md' p={8}bg={'teal.100'} borderRadius={'none'} border={'none'}/>
        <Input placeholder='Phone Number*' type='tel' size='md' p={8}bg={'teal.100'} borderRadius={'none'} border={'none'} />
        <Input placeholder='Comment*' size='md' p={8} bg={'teal.100'} borderRadius={'none'} border={'none'}/>
      </Stack>

      <Button borderRadius={'none'} mt={5} w={'70px'} colorScheme='teal'>SEND</Button>

    </Flex>
     <Image src='reach.jpg' mr={12} width={'50%'} height={'70vh'}></Image>
    </Flex>
    </>
  )
}

export default about