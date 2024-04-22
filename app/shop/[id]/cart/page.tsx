"use client";
import React from "react";
import {
  Box,
  Text,
  Heading,
  Center,
  Image,
  Flex,
  Link,
  Button,
  Divider,
  IconButton,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoDash } from "react-icons/go";
import { GoLock } from "react-icons/go";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/zustand/store";
import { BiX } from "react-icons/bi";

const cart = ({ params }: any) => {
  const id = params.cart;
  const products = require("../../../datasource.json");
  const product = products.find((product: any) => product.id === id);

  const { cart, empty_cart, remove_from_cart } = useCartStore();

  console.log(cart);

  return (
    <Box>
      <Center
        flexDirection={"column"}
        p={"100px"}
        bgImage={"../../../dna2.o.jpg"}
        textAlign={"center"}
        bgPos={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Heading
          fontFamily={'"Outfit", sans-serif'}
          color={"white"}
          fontSize={"5xl"}
        >
          Your Shopping Cart
        </Heading>
        <Flex alignItems={"center"} textAlign={"center"}>
          {/* <Link as={NextLink} textDecoration={'none'} style={{color:'white', fontSize:'1.5em'}} href="/shop"> All </Link> */}
          <Link
            fontSize={"1.5em"}
            color={"white"}
            _hover={{ color: "teal", transition: "0.2s" }}
            as={NextLink}
            href="/shop"
          >
            All{" "}
          </Link>
          <FaAngleRight style={{ color: "white", fontSize: "1em" }} />
          <Text color={"white"} fontSize={"1.2em"}>
            {product?.name}
          </Text>
        </Flex>
      </Center>

      <Box p={30} px={"100px"}>
        {/* <Flex>
          <Flex grow={1}>
            <Text fontWeight={"bold"}>PRODUCT</Text>
          </Flex>

          <Flex shrink={0} mx={"200px"}>
            <Text fontWeight={"bold"}>QUANTITY</Text>
          </Flex>

          <Flex shrink={0}>
            <Text fontWeight={"bold"}>TOTAL</Text>
          </Flex>
        </Flex> */}

        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
          <GridItem  colSpan={2} w='100%' fontWeight={"bold"} justifyContent={"center"} alignItems={"center"} >
          <Flex fontWeight={"bold"}>
          PRODUCT
          </Flex>
          </GridItem>

          <GridItem  colStart={4} w='100%' fontWeight={"bold"}>
            <Flex fontWeight={"bold"} justify={"right"} align={"right"}>
            QUANTITY
            </Flex>
            </GridItem>
            
          <GridItem  colSpan={1} w='100%' fontWeight={"bold"} justifyContent={"center"} alignItems={"center"} >
          <Flex fontWeight={"bold"} justify={"right"} align={"right"}>
          TOTAL
            </Flex>
          </GridItem>
        </Grid>
        <Divider border={"1px solid grey.100"} mb={10} />

        {cart.map((product: any, index: any) => (
          <Box key={index} mt={10}>
            {/* <Flex align={"center"} gap={62}>
              <Flex grow={1} alignItems={"center"}>
                <Image
                  justifyContent={"center"}
                  src={product.imageUrl}
                  boxSize={"60px"}
                />
                <Text fontWeight={"bold"}>{product.name}</Text>
              </Flex>

              <Flex
                justifyContent={"flex-end"}
                mr={"140px"}
                alignItems={"center"}
              >
                <Text>{product.quantity}</Text>
                <IconButton
                  borderRadius={0}
                  ml={3}
                  icon={<GoDash />}
                  aria-label="Decrease quantity"
                  onClick={() => {
                    remove_from_cart(product.id);
                  }}
                />
              </Flex>

              <Flex shrink={0} w={"50px"}>
                <Text>{product.price * product.quantity}</Text>
              </Flex>
            </Flex> */}

            
            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
          <GridItem  colSpan={2} w='100%' fontWeight={"bold"} justifyContent={"center"} alignItems={"center"} >
          <Flex fontWeight={"bold"}>
          <Flex alignItems={"center"}>
                <Image
                  justifyContent={"center"}
                  src={product.imageUrl}
                  boxSize={"60px"}
                />
                <Text fontWeight={"bold"}>{product.name}</Text>
              </Flex>
          </Flex>
          </GridItem>

          <GridItem  colStart={4} w='100%' fontWeight={"bold"}>
            <Flex fontWeight={"bold"} justify={"right"} align={"right"}>
              <Flex align={"center"}>
                <Text>{product.quantity}</Text>
                <IconButton
                  borderRadius={0}
                  ml={3}
                  icon={<GoDash />}
                  aria-label="Decrease quantity"
                  onClick={() => {
                    remove_from_cart(product.id);
                  }}
                />
                </Flex>
              </Flex>
            </GridItem>
            
          <GridItem  colSpan={1} w='100%' fontWeight={"bold"} justifyContent={"center"} alignItems={"center"} >
          <Flex fontWeight={"bold"} justify={"right"} align={"right"}>
                <Text>{product.price * product.quantity}</Text>
              </Flex>
          </GridItem>
        </Grid>

          </Box>
        ))}
        <Divider border={"1px solid grey.100"} borderColor={""} mt={10} />

        <Flex justify={"right"} mt={10} alignItems={"center"} gap={3}>
        <Text fontWeight={500} fontSize={'xl'}>TOTAL:</Text>
        <Text fontWeight={500}>{`$${cart
                  .reduce(
                    (sum: any, current: any) =>
                      sum +
                      parseFloat(String(current.price * current.quantity)),
                    0
                  )
                  .toFixed(2)}`}</Text>
        </Flex>

        <Flex justify={"right"} mt={10}>
            <Link as={NextLink} href={`/shop/payment/${product?.id}`}>
            <Button p={7} color={"white"} bg={'#0881DE'} fontSize={'l'}>Proceed To Payment</Button>
            </Link>
        </Flex>

        <Flex justify={"right"} mt={5}>
            <Link as={NextLink} href="/shop">
            <Button p={7} color={"white"} bg={'#0881DE'} fontSize={'xl'}>Continue Shopping</Button>
            </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default cart;
