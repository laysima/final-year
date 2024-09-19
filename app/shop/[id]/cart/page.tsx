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
import { FaAngleRight, FaRegTrashAlt } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoDash } from "react-icons/go";
import { GoLock } from "react-icons/go";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/zustand/store";
import { BiX } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { getCookie } from "cookies-next";

const Cart = ({ params }: any) => {
  const id = params.id;
  const { data: product  } = useQuery({queryKey: [`product_${id}`, id], queryFn: async () => {
    const res = await fetch(`/api/products/${id}`)
    return res?.ok ? res.json() : []
    }, ...{enabled:!!id}})


  const { cart, remove_from_cart, add_to_cart} = useCartStore();

  const [counter, setCounter] = useState(1);

  const token = getCookie('token')

   const user = getCookie('user')

   const updateQuantity = (productId: any, newQuantity: number) => {
    // Find the product in the cart
    const product = cart.find((item: { id: any; }) => item.id === productId);
  
    if (product) {
      // Update the product's quantity and subtotal
      add_to_cart({
        ...product,
        quantity: newQuantity,
        subtotal: product.price * newQuantity,
      });
    }
  };

  console.log(cart);

  return (
    <>
            <Box mb={10}>
          <Center
            flexDirection={"column"}
            p={20}
            bgImage={"../../dna2.o.jpg"}
            bgPos={"center"}
            textAlign={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Heading
              fontFamily={'"PT Sans", sans-serif'}
              color={"white"}
              fontSize={"5xl"}
            >
               Your Cart
            </Heading>
            <Flex mt={3} alignItems={"center"}>
              <Link
                color={"white"}
                _hover={{ color: "teal", transition: "0.2s" }}
                as={NextLink}
                href="/"
              >
                Home{" "}
              </Link>
              <FaAngleRight color="white" />
              <Text color={"white"} fontSize={"1.2em"}>
                Shop
              </Text>
            </Flex>
          </Center>
        </Box>

    <Box maxWidth="1200px" margin="0 auto" padding="20px">
      <Heading as="h1" size="xl" mb="8">
       
      </Heading>

      {cart.length === 0 ? (
        <Center flexDirection="column" py={20}>
          <LiaShoppingBagSolid size={60} color="gray.300" />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Your cart is empty
          </Text>
          <Text color="gray.500" mt={2}>
            Add some items to your cart and they will appear here.
          </Text>
          <Link as={NextLink} href="/shop" mt={6}>
            <Button colorScheme="blue">Continue Shopping</Button>
          </Link>
        </Center>
      ) : (
        <>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} mb={2}>
            <GridItem colSpan={6} fontWeight="bold">PRODUCT</GridItem>
            <GridItem colSpan={2} fontWeight="bold" textAlign="center">PRICE</GridItem>
            <GridItem colSpan={2} fontWeight="bold" textAlign="center">QUANTITY</GridItem>
            <GridItem colSpan={2} fontWeight="bold" textAlign="right">TOTAL</GridItem>
          </Grid>
          <Divider border={'0.5px solid grey'} mb={5}/>

          {cart.map((product: any, index: any) => (
            <Grid key={index} templateColumns="repeat(12, 1fr)" gap={4} alignItems="center" mb={4}>
              <GridItem colSpan={6}>
                <Flex alignItems="center">
                  <Image src={product.imageUrl} boxSize="60px" mr={3} alt={product.name} />
                  <Text fontWeight="medium">{product.name}</Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={2} textAlign="center">
                <Text>{product.price.toFixed(2)}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Flex justify="center" align="center">
                  <IconButton
                    size="sm"
                    icon={<FiMinus />}
                    aria-label="Decrease quantity"
                    onClick={() => {
                      if (!token || !user) return alert('SIGN IN');
                      if (product.quantity > 1) updateQuantity(product.id, product.quantity - 1);
                    }}
                  />
                  <Text px={2}>{product.quantity}</Text>
                  <IconButton
                    size="sm"
                    icon={<IoIosAdd />}
                    aria-label="Increase quantity"
                    onClick={() => {
                      if (!token || !user) return alert('SIGN IN');
                      updateQuantity(product.id, product.quantity + 1);
                    }}
                  />
                </Flex>
              </GridItem>
              <GridItem colSpan={2} textAlign="right">
                <Text fontWeight="medium">{(product.price * product.quantity).toFixed(2)}</Text>
              </GridItem>
              <GridItem colSpan={12}>
                <Button
                  size="sm"
                  leftIcon={<FaRegTrashAlt />}
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => remove_from_cart(product.id)}
                >
                  Remove
                </Button>
              </GridItem>
            </Grid>
          ))}

          <Divider my={8} />

          <Flex justify="space-between" align="center" mb={8}>
            <Text fontSize="xl" fontWeight="bold">Total:</Text>
            <Text fontSize="xl" fontWeight="bold">
              {cart.reduce((sum: number, current: any) => sum + (current.price * current.quantity), 0).toFixed(2)}
            </Text>
          </Flex>

          <Flex justify="space-between">
            <Link as={NextLink} href="/shop">
              <Button variant="outline" colorScheme="blue">Continue Shopping</Button>
            </Link>
            <Link as={NextLink} href={`/shop/payment/${product?.id}`}>
              <Button colorScheme="blue">Proceed To Payment</Button>
            </Link>
          </Flex>
        </>
      )}
    </Box>
    </>
  );
};

export default Cart;
