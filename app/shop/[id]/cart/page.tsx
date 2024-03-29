'use client'
import React from 'react'
import { Box, Text,Heading,Center, Image, Flex, Link, Button, Divider, IconButton, FormControl } from '@chakra-ui/react'
import { FaAngleRight} from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoDash } from "react-icons/go";
import { GoLock } from "react-icons/go";
import NextLink from 'next/link'
import { useState, useEffect } from 'react';
import { useCartStore } from "@/zustand/store";
import { BiX } from 'react-icons/bi';

const cart = ({params}:any) => {
    const id = params.cart
    const products = require('../../../datasource.json');
    const product = products.find((product:any) => product.id === id);

    const { cart, empty_cart, remove_from_cart} = useCartStore();

    console.log(cart);

  return (
    <Box>
         <Center flexDirection={'column'} p={'100px'} bgImage={"../../../dna2.o.jpg"} textAlign={'center'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} >
        <Heading fontFamily={'"Outfit", sans-serif'} color={'white'} fontSize={'5xl'}>Your Shopping Cart</Heading>
        <Flex alignItems={'center'} textAlign={'center'} >
        {/* <Link as={NextLink} textDecoration={'none'} style={{color:'white', fontSize:'1.5em'}} href="/shop"> All </Link> */}
        <Link fontSize={'1.5em'} color={"white"}  _hover={{color:"teal", transition:'0.2s'}} as={NextLink}  href="/shop" >All </Link>
        <FaAngleRight style={{color:'white', fontSize:'1em'}}   />
        <Text color={'white'} fontSize={'1.2em'}>{product?.name}</Text>
        </Flex>
      </Center>
<Box p={30} px={'100px'}>
    <Flex >
        <Flex grow={1}>
            <Text>PRODUCT</Text>
        </Flex>

        <Flex shrink={0} mx={'200px'}>
            <Text>QUANTITY</Text>
        </Flex>

        <Flex shrink={0}>
            <Text>TOTAL</Text>
        </Flex>
    </Flex>
    <Divider border={'2px solid red'} borderColor={'red'}/>

    {cart.map((product:any, index:any) => (
        <Box key={index}>
            <Text>{product.quantity}</Text>
        </Box>
    ))}

    
    </Box>
    </Box>
  )
}

export default cart;