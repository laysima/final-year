"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  InputGroup,
  Heading,
  Input,
  Image,
  Icon,
  Flex,
  Link,
  InputRightElement,
  Button,
  Divider,
  IconButton,
  FormControl,
  SimpleGrid,
  Container,
  Toast,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { FaCreditCard } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoDash } from "react-icons/go";
import { GoLock } from "react-icons/go";
import NextLink from "next/link";
import { useCartStore } from "@/zustand/store";
import { BiTrash, BiX } from "react-icons/bi";
import { usePaystackPayment } from 'react-paystack';
import { useMutation, useQuery } from "@tanstack/react-query";
import { CreateOrder } from "@/app/api";
import { useRouter } from "next/navigation";

export default function Payment({ params }: any) {
  const { cart, empty_cart, remove_from_cart } = useCartStore();
  const toast = useToast()
  const {push} = useRouter()

  const [email, setEmail] = useState("");

  const amount = cart
    .reduce(
      (sum: number, current: any) =>
        sum + parseFloat(String(current.price * current.quantity)),
      0
    )
    .toFixed(2);


  const config = {
    amount: (parseFloat(amount) * 100) | 0,
    email: email,
    publicKey: "pk_live_dfe5c7d1805624dbd6a1038b029f87fd65dc3554",
    currency: "GHS",
  };

  const initializePayment = usePaystackPayment(config);
  const { data: productsFromApi, isPending } = useQuery({
    queryKey: ['products'], 
    queryFn: async () => {
      const res = await fetch('/api/products')
      return res?.ok ? res.json() : []
    }
  })

  const { mutate: handleCreateOrder, isPending: creatingOrder } = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: CreateOrder,
    onSuccess: () => {
      toast({
        title: "Order created successfully!",
        status: "success",
        isClosable: true,
      });

      push('/')
    }
  })

  const products = cart.map((prod: { name: any; quantity: any; }) => ({
    productName: prod.name,
    productCategory: productsFromApi?.length > 0 && productsFromApi.filter((item: { name: any; }) => item.name === prod.name)[0].category,
    quantity: prod.quantity
  }))

  console.log('PRODUCTS', products);

  const onSuccess = (response: any) => {
    setEmail("");
    empty_cart();

    // show toast saying payment success
    if (response.status === 'success') {
      toast({
        title: "Payment successful!",
        status: "success",
        isClosable: true,
      });
  
      toast({
        title: "We are creating your order, sit tight!",
        status: "info",
        isClosable: true,
      });
      
      handleCreateOrder({ products, totalCost: amount, customerEmail: email });
    }
  };

  const onClose = (response: any) => {
    console.log('paystack response: ', response);
    setEmail("");
  }


  return (
    <>
      <Box bg="rgb(224,240,247)" h={"70dvh"}>
        <Container maxW={1200}>
          <Button
            as={Link}
            href="/shop/"
            _hover={{ color: "teal", fontWeight: "bold", transition: "0.3s" }}
            fontSize="26px"
            bg={"transparent"}
          >
            <LiaShoppingBagSolid />
          </Button>
        </Container>

        <Container maxW={1200}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }}>
            <GridItem bg="rgb(224,240,247)" justifyContent={"center"} p={5}>
              <Box alignItems="start" gap={5}>
                <Flex>
                  <Heading
                    flexGrow={1}
                    fontFamily={'"PT Sans", sans-serif'}
                    size="lg"
                  >
                    Contact
                  </Heading>
   
                </Flex>
                <Input
                  h={"6vh"}
                  mt={4}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg={"white"}
                  borderRadius={0}
                />

                <Button
                onClick={() => {
                  initializePayment({onSuccess, onClose});
                }}
                  h={"6vh"}
                  mt={5}
                  w={"full"}
                  isDisabled={!email || isPending}
                  colorScheme="blue"
                  borderRadius={0}>
                    Pay Now
                  </Button>
                
              </Box>




              <Divider
                mt={12}
                border={"0.2px solid grey"}
                orientation="horizontal"
              />

              <Text mt={3}>All rights reserved dt-pharmify</Text>
            </GridItem>

            <GridItem w={"full"} bg={"white"} borderRadius={20} maxH="100dvh" overflowY="auto">
              {/* <Button onClick={() => {add_to_cart()}}>Add to cart</Button> */}
              {creatingOrder ? (
                <div>
                  <Spinner />
                  <p>Creating order...</p>
                </div>
              ) : (
                <Flex p={5}>
                <Button
                  onClick={() => {
                    empty_cart();
                  }}
                  mb={5}
                  colorScheme="red"
                >
                  Empty cart
                </Button>
              </Flex>
              )}
              {cart.map((product: any, index: any) => (
                <Box key={index} alignItems={"center"} mb={5}>
                  <Flex p={5}>
                    <Flex alignItems={"center"} flexGrow={1}>
                      <Box
                        position="relative"
                        w="100px"
                        h="100px"
                        p={5}
                        border={"0.5px solid black"}
                        borderRadius={"5px"}
                      >
                        <Image
                          justifyContent={"center"}
                          src={product.imageUrl}
                          boxSize={"60px"}
                        />

                        <Box
                          position="absolute"
                          top="-2"
                          right="-2"
                          bg="red"
                          color="white"
                          borderRadius="full"
                          width="25px"
                          height="25px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="sm"
                        >
                          {product.quantity}
                        </Box>
                      </Box>

                      <Text fontSize="l" p={3}>
                        {product?.name}
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"}>
                      <Text fontWeight={"bold"} flexShrink={0}>
                        {product?.price}
                      </Text>
                      <IconButton
                        borderRadius={0}
                        ml={3}
                        icon={<BiTrash />}
                        aria-label="Decrease quantity"
                        onClick={() => {
                          remove_from_cart(product.id);
                        }}
                      />
                    </Flex>
                  </Flex>

                  <Flex p={5}>
                    <Text fontWeight={"bold"} flexGrow={1}>
                      Subtotal
                    </Text>
                    <Text fontSize={"12px"} flexShrink={0}>
                      {product.price * product.quantity}
                    </Text>
                  </Flex>
                  <Divider
                    mt={3}
                    border={"0.5px solid #EEEEE"}
                    orientation="horizontal"
                  />
                </Box>
              ))}

              <Flex p={5}>
                <Text fontWeight={"bold"} flexGrow={1}>
                  Total
                </Text>
                {/* <Text fontWeight={'bold'} flexShrink={0}>${cart.reduce(function (sum: any, current: any) { return (parseFloat(sum) + parseFloat(current.price)).toFixed(2) }, 0)}</Text> */}
                <Text fontWeight={"bold"} flexShrink={0}>{`${amount}`}</Text>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
