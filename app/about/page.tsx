'use client'
import React from 'react'
import { Flex ,Icon, Heading, Button, Text, Image, Box, Stack, Input, Link, Divider} from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa";
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
import page from '../shop/page';

const about = () => {
  return (
    <>
       {/* ///////////////////////////////some other section  part 1/////////////////////////*/}
    <Flex p={30} px={'100px'} gap={10}>
    
    <Box position={'relative'}>
      <Box width={'600px'}>
      <Image borderRadius={10} src='healthprof.jpg' w={'full'}></Image>
      </Box>

      <Box pos={'absolute'} bg={'#0881DE'} color={'white'} mt={'-200px'} ml={-30} p={7} borderRadius={10}>
        <Flex alignItems={'center'} p={2} gap={2}>
         <Icon  color={'green'} as={FaCheck} />
        <Text>General lab</Text>
        </Flex>
        <Divider orientation='vertical' border={'1px solid white'} />
       
        <Flex alignItems={'center'} p={2}  gap={2}>
        <Icon  color={'green'} as={FaCheck} />
        <Text>General Medicine</Text>
        </Flex>
        <Divider orientation='vertical' border={'1px solid white'} />

        <Flex alignItems={'center'} p={2}  gap={2}>
        <Icon color={'green'} as={FaCheck} />
        <Text>Freee Delivery</Text>
        </Flex>
        <Divider orientation='vertical' border={'1px solid white'} />

        <Flex alignItems={'center'} p={2}  gap={2}>
        <Icon  color={'green'} as={FaCheck} />
        <Text>Pharmacy Support</Text>
        </Flex>
      </Box>
    </Box>
   
    <Flex direction={'column'} maxW={'50%'}>
      <Box>
      <Text mt={5} mb={5} fontWeight={500} fontFamily={'"Outfit", sans-serif'} fontSize={'3xl'}>
        Excellent Medical Professionals With Significant 
        Experience
      </Text>
      </Box>
      <Text mt={5} fontSize={'ll'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>


      <Text mt={5} fontSize={'ll'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>

      <Link as={NextLink}  href="/">
      <Button mt={5} width={'200px'} bgColor="#B8E0F7" >SHOP NOW</Button>
      </Link>
    </Flex>

    </Flex>
   

  {/*/////////////////////////////// Core Values ///////////////////////////////////////*/}
    <Box p={30} mt={'100px'} px={'100px'}>
      <Heading fontFamily={'"Outfit", sans-serif'} color={'#175873'} fontSize={'3xl'} textAlign={'center'}>
        Our Core Values
      </Heading>
      <Text fontSize={'xl'} textAlign={'center'}>
      Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
      Aenean<br></br> ante nisl, cursus a pretium eget gravida eget sem. Nunc quis purus.
      </Text>

      <Flex mt={10} gap={4}> 
        <Box alignItems={'center'} borderRadius={7}  boxShadow={'1px 1px 2px #EAEFF2, 0 0 25px #EAEFF2'}  >
        <Flex p={3} alignItems={'center'} gap={3} justifyContent={'center'} fontSize={'50px'} bg={'#378ba4'} color={'white'}>
          <Icon as={TbDentalBroken} />
          <Heading mt={3} fontFamily={'"Outfit", sans-serif'} alignItems={'center'} fontSize={'2xl'}>Medicines</Heading>
          </Flex>
          <Text p={5} textAlign={'center'} fontSize={'xl'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Box>

        <Box alignItems={'center'} boxShadow={'1px 1px 2px #EAEFF2, 0 0 25px #EAEFF2'} borderRadius={7}>
          <Flex p={3} alignItems={'center'} gap={3} justifyContent={'center'} fontSize={'50px'} bg={'#378ba4'} color={'white'}>
          <Icon as={FaHandsHoldingChild} />
          <Heading mt={3} fontFamily={'"Outfit", sans-serif' }alignItems={'center'} fontSize={'2xl'}>Beauty Care</Heading>
          </Flex>
          <Text p={5} fontSize={'xl'} mt={5} textAlign={'center'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Box>

        <Box alignItems={'center'} boxShadow={'1px 1px 2px #EAEFF2, 0 0 25px #EAEFF2'} borderRadius={7}>
        <Flex p={3} alignItems={'center'} gap={3} justifyContent={'center'} fontSize={'50px'} bg={'#378ba4'} color={'white'}>
          <Icon as={MdOutlineHealthAndSafety}  />
          <Heading mt={3} fontFamily={'"Outfit", sans-serif'} alignItems={'center'} fontSize={'2xl'}>Health Products</Heading>
          </Flex>
          <Text p={5} fontSize={'xl'} mt={5} textAlign={'center'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Box>

        <Box alignItems={'center'} boxShadow={'1px 1px 2px #EAEFF2, 0 0 25px #EAEFF2'} borderRadius={7}>
        <Flex p={3} alignItems={'center'} gap={3} justifyContent={'center'} fontSize={'50px'} bg={'#378ba4'} color={'white'}>
          <Icon as={FaDumbbell}  />
          <Heading mt={3} fontFamily={'"Outfit", sans-serif'} alignItems={'center'} fontSize={'2xl'}>Cardio Care</Heading>
          </Flex>
          <Text fontSize={'xl'} p={5} mt={5} textAlign={'center'}>
            Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi. 
          </Text>
        </Box>   
      </Flex>
    </Box>


    {/* /////////////////////////////// Staff Reach Out/////////////////////////*/}
    <Flex mt={20} p={30} px={'70px'} >
    <Flex p={'30px'} direction={'column'} maxW={'50%'} >
      <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'} fontSize={'3xl'}>
       Reach Out To Our Staff
      </Heading>
      <Text mt={5} fontSize={'xl'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>
  
      <Stack spacing={5} mt={5} border={'0px'}>
        <Input placeholder='Name*' size='md' p={8} bg={'#B8E0F7'} borderRadius={'none'} border={'none'} />
        <Input placeholder='Email*' size='md' p={8}bg={'#B8E0F7'} borderRadius={'none'} border={'none'}/>
        <Input placeholder='Phone Number*' type='tel' size='md' p={8}bg={'#B8E0F7'} borderRadius={'none'} border={'none'} />
        <Input placeholder='Comment*' size='md' p={8} bg={'#B8E0F7'} borderRadius={'none'} border={'none'}/>
      </Stack>

      <Button borderRadius={'none'} mt={5} w={'70px'} color={'white'} bg='#0394ED'>SEND</Button>
    </Flex>
     <Image src='reach.jpg' mr={12}  height={'70vh'}></Image>
    </Flex>
    </>
  )
}

export default about