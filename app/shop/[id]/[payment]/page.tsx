'use client'
import React from 'react'
import { Box, Text, Grid, GridItem, InputGroup,
    Heading,Input, Image,Icon, Flex, Link, InputRightElement, Button, Divider, IconButton, FormControl } from '@chakra-ui/react'
import { FaCreditCard} from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoDash } from "react-icons/go";
import { GoLock } from "react-icons/go";
import NextLink from 'next/link'
import { useState, useEffect } from 'react';
import { useCartStore } from "@/zustand/store";
import { BiX } from 'react-icons/bi';



export default function payment({params}:any)  {
    const id = params.payment
    const products = require('../../../datasource.json');
    const product = products.find((product:any) => product.id === id);

    const { cart, empty_cart, remove_from_cart} = useCartStore();

    console.log(cart);

    const [show, setShow] = useState(false)

    const [blogs, setBlogs] = useState(null)

    const [ispending, setIspending] = useState(true)

   


  return (
    <>
<Box mb={3} bg="#E3E7F1">
<Box>
<Button bg={"#E3E7F1"} _hover={{ color:"teal",fontWeight:'bold', transition:'0.3s'}} ml={'90px'} fontSize='26px'><Link as={NextLink} href="/shop/id/payment"><LiaShoppingBagSolid /></Link></Button>
<Divider border={'0.5px solid grey'} orientation='horizontal' />
      <Grid
         // Make the grid take up  the full viewport height
        templateColumns="repeat(2, 1fr)" // Divide into two equal columns
      >
        <GridItem w="80%" bg="#E3E7F1" justifyContent={'center'} p={5} ml={'90px'}>
        <Box alignItems="start" gap={5}>
            <Flex>
                <Heading flexGrow={1} fontFamily={'"PT Sans", sans-serif'} size="lg">Contact</Heading>
                <Link flexShrink={0}  href='/login'>Log in</Link>
            </Flex>
            <Input h={'6vh'} mt={4} placeholder="Email" bg={'white'}  borderRadius={0}/>

            <Heading mt={4} fontFamily={'"PT Sans", sans-serif'} size="lg">Delivery</Heading>
            <Flex mt={4} gap={4}>
                <Input h={'6vh'} placeholder="First name" bg={'white'}  borderRadius={0}/>
                <Input h={'6vh'} placeholder="Last name" bg={'white'}  borderRadius={0}/>
            </Flex>
            <Input h={'6vh'} mt={4} placeholder="Address" bg={'white'}  borderRadius={0}/>

            <Heading mt={4} fontFamily={'"PT Sans", sans-serif'} size="lg">Payment</Heading>
            <Text>All transaction are seecure and Encrypted </Text>
        </Box>
  
        <Box mt={2} bg={'#f6f6f6'}  border={'0.5px solid grey'} borderRadius={'5px'}>
        <Flex p={5} bg={'white'} border={'0.5px solid grey'} borderRadius={'2px'}>
            <Text fontWeight={'bold'} flexGrow={1}>Credit Card</Text>
            <Icon flexShrink={0} fontSize={'20px'} as={FaCreditCard} />
        </Flex>
        <FormControl p={4} isRequired>
            <InputGroup alignItems={'center'} >
                <Input
                type='text'
                maxLength={16}
                required
                p={5}
                    bg={'white'}  borderRadius={0}
                />
                    <InputRightElement alignItems={'center'}>
                        <Icon as={GoLock}/>
                    </InputRightElement>
            </InputGroup>

            <Flex mt={4} gap={4}>
                <Input h={'6vh'}  placeholder="Select Date" size="md" type="date" bg={'white'} borderRadius={0}/>
                <InputGroup >
                <Input
                  h={'6vh'}
                    bg={'white'}  borderRadius={0}
                    type={show ? 'text' : 'password'}
                    placeholder='Security Code'
                />
            </InputGroup>
            </Flex>
            <Input h={'6vh'} mt={4} placeholder="Name on Card" bg={'white'}  borderRadius={0}/>
        </FormControl>

        </Box>
        <Button h={'5vh'} mt={4} w={'100%'} colorScheme='teal'>Pay Now</Button>

        <Divider mt={12} border={'0.2px solid grey'} orientation='horizontal' />

        <Text mt={3}>All rights reserved dt-pharmify</Text>
        </GridItem>


{/* ////////////////////////////////////// Right Section /////////////////////////////////////  */}
  <GridItem w="100%" p={5} bg={'white'}>

  {/* <Button onClick={() => {add_to_cart()}}>Add to cart</Button> */}
    <Button onClick={() => {empty_cart()}} mb={5}>Empty cart</Button>
    {cart.map((product:any, index:any) => (
       <Box key={index} alignItems={'center'} mb={5}>

         <Flex>
              <Flex alignItems={'center'} flexGrow={1}>
                  <Box position="relative" w="100px" h="100px" p={5} border={'0.5px solid grey'} borderRadius={'5px'}> 
                    <Image justifyContent={'center'} src={product.imageUrl} boxSize={'60px'} />
                        {/* Number Badge */}

                    <Box position="absolute" top="-2"  right="-2" bg="red"
                        color="white" borderRadius="full" 
                        width="25px" height="25px" 
                        display="flex" alignItems="center"
                        justifyContent="center" fontSize="sm"
                        >
                      {product.quantity}
                    </Box>

                  </Box>

                <Text fontSize="xl" p={3}>{product?.name}</Text>
              </Flex>
              <Text fontWeight={'bold'} flexShrink={0}>{product?.price}</Text>
              <IconButton borderRadius={0} ml={3}
                  icon={<GoDash />}
                  aria-label="Decrease quantity"
                  onClick={() => {remove_from_cart(product.id)}}
                />
          </Flex>

            <Flex mt={4} >
              <Text fontWeight={'bold'} flexGrow={1}>Subtotal</Text>
              <Text fontSize={'12px'} flexShrink={0}>{product.price * product.quantity} </Text>
          </Flex>

        </Box>   
    ))}


          {/* <Flex mt={4} >
            <Text fontWeight={'bold'} flexGrow={1}>Subtotal</Text>
            <Text fontSize={'12px'} flexShrink={0}>${cart.reduce(function (sum: any, current: any) { return (parseFloat(sum) + parseFloat(current.price * current.quantity)).toFixed(2) }, 0)}</Text>
          </Flex> */}

          <Flex mt={4}>
            <Text fontWeight={'bold'} flexGrow={1}>Total</Text>
            {/* <Text fontWeight={'bold'} flexShrink={0}>${cart.reduce(function (sum: any, current: any) { return (parseFloat(sum) + parseFloat(current.price)).toFixed(2) }, 0)}</Text> */}
            <Text fontWeight={'bold'} flexShrink={0}>{`$${cart.reduce((sum:any, current: any) => sum + parseFloat(String(current.price * current.quantity)),0).toFixed(2)}`}</Text>
          </Flex>
       
 </GridItem>
    
      </Grid>
    </Box>
    </Box>



    </>
  )
}

