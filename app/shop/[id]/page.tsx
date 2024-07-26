"use client";
import { useCartStore } from "@/zustand/store";
import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  Box,
  Text,
  Heading,
  Center,
  Flex,
  Link,
  Image,
  Icon,
  IconButton,
  Button,
  useDisclosure,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Drawer,
  SimpleGrid,
} from "@chakra-ui/react";


////////////////////////////////////// APIs /////////////////////////////////////////////////
// import { GetProducts } from "@/app/api";
import { ProductType } from "@/schemas";
////////////////////////////////////// APIs /////////////////////////////////////////////////

import { FaAngleRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMdHeartEmpty, IoIosAdd, IoMdClose } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

const ProductDetail = ({ params }: any) => {
  const pathname = usePathname();
  const id = params.id;

  const token = getCookie('token')
  const user = getCookie('user')


  const { data: product  } = useQuery({queryKey: [`product_${id}`, id], queryFn: async () => {
    const res = await fetch(`/api/products/${id}`)
    return res?.ok ? res.json() : []
    }, ...{enabled:!!id}})

  console.log('id:',  id)

    
  // const products = require("../../datasource.json");

  // const product = products.find((product: any) => product.id === id);
  //////// settin the states of the description , reviews and Additiinal information section /////////////////

  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<{
    [key: string]: ProductType[];
  }>({});

  const { add_to_cart } = useCartStore();

  const [counter, setCounter] = useState(1); 

 
  const doubleSubtotal = () => {
    setCounter((prevCounter) => prevCounter + 1); // Increase the sequential number
    add_to_cart({
      id: product.id,
      imageUrl: product.image,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: counter,
      currency: "",
      subtotal: product.price * counter,
    });
  };

  const halveSubtotal = () => {
    setCounter((prevCounter) => Math.max(1, prevCounter - 1));
    add_to_cart({
      id: product.id,
      imageUrl: product.image,
      name: product.name,
      description: "",
      price: product.price,
      quantity: counter,
      currency: "",
      subtotal: product.price * counter,
    });
  };

  const buyItNow = () => {
    console.log(counter);
    add_to_cart({
      id: product.id,
      imageUrl: product.image,
      name: product.name,
      description: "",
      price: product.price,
      quantity: counter,
      currency: "",
      subtotal: product.price * counter,
    });
  };
  //wishlist section
  // const { isOpen, onToggle, onClose } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/*<Text>we are good: {id}</Text*/}
      {/* {Object.keys(categories).map((category) => (  
        <Box key={category}>                     
        {categories[category].map((product: ProductType) => ( 
          <Box></Box>
             ))}

        </Box>

         ))} */}
         <Box className="diff">
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
          {product?.name}
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
          <FaAngleRight style={{ color: "white", fontSize: "xl" }} />
          <Text color={"white"} fontSize={"1.2em"}>
            {product?.name}
          </Text>
        </Flex>
      </Center>

      <Flex p={30} justifyContent={"center"} gap={20} fontSize={"18px"}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={20}>
          <Image src={product?.image} h={"70vh"}></Image>

          <Flex direction={"column"} gap={4} mt={"50px"}>
            <Text fontSize={"3xl"} fontWeight={500}>
              {product?.name}
            </Text>
            <Text fontWeight={"bold"}>₵{product?.price}</Text>
            <Flex gap={2}>
              <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
              <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
              <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
              <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
            </Flex>
            <Text maxW={"500px"}>
              {product?.description}
            </Text>
            <Text fontWeight={"bold"}>Availability:</Text>

            <Flex gap={3}>
              <Text fontWeight={"bold"}>Sub Total:</Text>
              <Text>₵{(product?.price * counter).toFixed(2)}</Text>
            </Flex>

            <Flex gap={3}>
              <Text fontWeight={"bold"}>Vendor:</Text>
              <Text>Laysima industries</Text>
            </Flex>

            <Flex
              alignItems={"center"}
              _hover={{ color: "teal", cursor: "pointer" }}
            >
              <Flex alignItems={"center"}>
                <Icon as={IoMdHeartEmpty} />
                <Text>Add to Wishlist</Text>
              </Flex>
              {/* <Text ml={5} fontWeight={'bold'}>Quantity:{counter} </Text> */}
            </Flex>

{/* ////////////////////////// chakra whishlist ////////////////////////////// */}
            <Flex alignItems={"center"}>
            <SimpleGrid columns={{base:1, md:1, xl:2}} gap={5}>
              <Box>
              <Button
                ref={btnRef}
                colorScheme="blue"
                onClick={() => {
                  if (!token && !user) {
                    return (
                      alert('CHALE GO AND SIGN IN')
                    )
                  }

                  onOpen()
                }}
                width={"230px"}
                fontSize={"17px"}
                borderRadius={0}
              >
                ADD TO CART
              </Button>

              <Drawer
                size={"sm"}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />

                <DrawerContent>
                  <DrawerCloseButton />

                  <DrawerHeader>
                    <Flex mt={5}>
                      <Text fontSize="2xl" mb="4">
                        Shopping Cart
                      </Text>
                    </Flex>
                    <Divider
                      orientation="horizontal"
                      border={"0.5px solid ash"}
                    />
                  </DrawerHeader>

                  <DrawerBody>
                    <Flex p={30} gap={10}>
                      <Image
                        src={product?.image}
                        w={"30%"}
                        h={"15vh"}
                      ></Image>

                      <Flex direction={"column"} gap={4}>
                        <Heading
                          fontSize={"lg"}
                          fontFamily={'"Outfit", sans-serif'}
                        >
                          {product?.name}
                        </Heading>
                        <Text fontWeight={"bold"}>
                        ₵{(product?.price * counter).toFixed(2)}
                        </Text>
                        <Flex alignItems={"center"}>
                          <IconButton
                            borderRadius={0}
                            icon={<FiMinus />}
                            aria-label="Decrease quantity"
                            onClick={halveSubtotal}
                          />
                          <Text paddingX="2">{counter}</Text>
                          <IconButton
                            borderRadius={0}
                            icon={<IoIosAdd />}
                            aria-label="Increase quantity"
                            onClick={doubleSubtotal}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </DrawerBody>

                  <DrawerFooter>
                    <Flex direction={"column"} w={"100%"} p={5}>
                      <Flex direction={"column"}>
                        <Divider
                          mt={"60px"}
                          orientation="horizontal"
                          border={"0.5px solid ash"}
                        />
                        <Flex gap={3} mt={5}>
                          <Text fontWeight={"bold"}>Sub Total:</Text>
                          <Text fontWeight={"bold"}>
                          ₵{(product?.price * counter).toFixed(2)}
                          </Text>
                        </Flex>
                        <Text>Everything is calculated at checkout</Text>
                      </Flex>

                      <Flex direction={"column"}>
                        <Link
                          as={NextLink}
                          key={product?.id}
                          href={`/shop/payment/${product?.id}`}
                          passHref
                        >
                          <Button
                            mt={"15px"}
                            p={5}
                            fontSize={"17px"}
                            colorScheme="blue"
                            borderRadius={0}
                            w={"full"}
                          >
                            CHECKOUT
                          </Button>
                        </Link>

                        <Link
                          as={NextLink}
                          // key={product?.id}
                          href={`/shop/${id}/cart/`}
                          passHref
                        >
                          <Button
                            mt={"15px"}
                            p={5}
                            fontSize={"17px"}
                            colorScheme="blue"
                            borderRadius={0}
                            onClick={buyItNow}
                            w={"full"}
                          >
                            VIEW CART
                          </Button>
                        </Link>
                      </Flex>
                    </Flex>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              </Box>
{/* ////////////////////////// End of Chakra whishlist ////////////////////////////// */}

              <Flex alignItems={"center"} border={'1px solid grey'} ml={2} w={'110px'}>
                <IconButton
                  borderRadius={0}
                  bg={"white"}
                  _hover={{colorScheme:"blue"}}
                  icon={<FiMinus />}
                  aria-label="Decrease quantity"
                  onClick={halveSubtotal}
                />
                <Text px={2}>{counter}</Text>
                <IconButton
                  borderRadius={0}
                  bg={"white"}
                  _hover={{colorScheme:"blue"}}
                  icon={<IoIosAdd />}
                  aria-label="Increase quantity"
                  onClick={doubleSubtotal}
                />
              </Flex>
              </SimpleGrid>
            </Flex>

            <Link
              textDecorationLine={"teal"}
              as={NextLink}
              key={product?.id}
              href={(!token && user) ?`/shop/payment/${product?.id}`:''}
              passHref
            >
              <Button
                colorScheme="blue"
                p={5}
                fontSize={"17px"}
                color={"white"}
                width={"230px"}
                borderRadius={0}
                onClick={() => {
                  if (!token && !user) {
                    return (
                      alert('CHALE GO AND SIGN IN')
                    )
                  }

                  buyItNow()
                }}
              >
                BUY IT NOW
              </Button>
            </Link>
            <Divider orientation="horizontal" border={"0.5px solid ash"} />

            <Flex alignItems={"center"}>
              <Flex alignItems={"center"}>
                <Icon mr={2} as={TbTruckDelivery} />
                <Text fontWeight={"bold"}>Shipping status:</Text>
              </Flex>
              <Text ml={3}>To be communicated</Text>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Image boxSize={"30px"} src="../../cash.png"></Image>
              <Image boxSize={"30px"} src="../../mastercard.jpeg"></Image>
              <Image boxSize={"30px"} src="../../visa.png"></Image>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>

      <Box>
        <Tabs variant="enclosed" isFitted align="center">
          <TabList mb="1em">
          <SimpleGrid columns={{base:1, md:3, xl:3}} gap={5} justifyContent={"space-around"} alignContent={"center"}>
            <Tab fontWeight={"bold"}>Description</Tab>
            <Tab fontWeight={"bold"}>Additional Information</Tab>
            <Tab fontWeight={"bold"}>Reviews</Tab>
            </SimpleGrid>
          </TabList>
          <TabPanels>
            <TabPanel >
              <Text>{product?.description}</Text>
            </TabPanel>
            <TabPanel>
              <Text></Text>
            </TabPanel>
            <TabPanel>
              <Text></Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Box>
      
    </>
  );
};

export default ProductDetail;
