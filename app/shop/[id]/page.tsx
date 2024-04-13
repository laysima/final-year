"use client";
import { useCartStore } from "@/zustand/store";
import { useEffect, useState } from "react";
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
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { LiaTimesSolid } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMdHeartEmpty, IoIosAdd, IoMdClose } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import dynamic from "next/dynamic";

const ProductPage = ({ params }: any) => {
  const pathname = usePathname();
  const id = params.id;
  const products = require("../../datasource.json");
  const product = products.find((product: any) => product.id === id);
  //////// settin the states of the description , reviews and Additiinal information section /////////////////

  const { add_to_cart } = useCartStore();

  const [counter, setCounter] = useState(1); // This tracks the sequential number
  // const [subtotal, setSubtotal] = useState(product?.price || 0);
  // const productPrice = product?.price;  // Assuming initial subtotal is the price of 1 item

  const doubleSubtotal = () => {
    setCounter((prevCounter) => prevCounter + 1); // Increase the sequential number
    add_to_cart({
      id: id,
      imageUrl: product.imageUrl,
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
      id: id,
      imageUrl: product.imageUrl,
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
      id: id,
      imageUrl: product.imageUrl,
      name: product.name,
      description: "",
      price: product.price,
      quantity: counter,
      currency: "",
      subtotal: product.price * counter,
    });
  };
  //wishlist section
  const [wishlist, setWishlist] = useState<any>([]);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const addToWishlist = (product: any) => {
    setWishlist([...wishlist, product]);
    if (!isOpen) onToggle();
  };

  return (
    <>
      {/*<Text>we are good: {id}</Text*/}

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
          <FaAngleRight style={{ color: "white", fontSize: "1em" }} />
          <Text color={"white"} fontSize={"1.2em"}>
            {product?.name}
          </Text>
        </Flex>
      </Center>

      <Flex p={30} justifyContent={"center"} gap={20} fontSize={"18px"}>
        <Image src={product?.imageUrl} w={"40%"} h={"70vh"}></Image>

        <Flex direction={"column"} maxW={"25%"} gap={4} mt={"50px"}>
          <Heading fontFamily={'"Outfit", sans-serif'}>{product?.name}</Heading>
          <Text fontWeight={"bold"}>${product?.price}</Text>
          <Flex gap={2}>
            <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
            <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
            <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
            <Icon as={IoStar} color={"gold"} fontSize={"20px"} />
          </Flex>
          <Text maxW={"500px"}>
            Nunc vehicula quam semper odio varius tincidunt estibulum ante ipsum
            primis in faucibus orci luctus et ultrices posue.
          </Text>
          <Text fontWeight={"bold"}>Availability:</Text>

          <Flex gap={3}>
            <Text fontWeight={"bold"}>Sub Total:</Text>
            <Text>${(product?.price * counter).toFixed(2)}</Text>
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

          <Flex alignItems={"center"}>
            <Flex shrink={0}>
              <InputGroup size="sm" className="nodrag">
                <InputLeftElement
                  width="1.8rem"
                  justifyContent={"start"}
                  ms={2}
                >
                  <IconButton
                    icon={<LiaTimesSolid />}
                    aria-label={"close"}
                    size={"xs"}
                    h="1rem"
                    mt={0}
                    variant={"outline"}
                    rounded={2}
                  />
                </InputLeftElement>
              </InputGroup>
              <Flex grow={1}>
                <Button
                  _hover={{
                    color: "black",
                    background: "#D9EEFA",
                    transition: "0.2s",
                  }}
                  width={"230px"}
                  color={"white"}
                  p={5}
                  fontSize={"17px"}
                  bg={"#055C9D"}
                  borderRadius={0}
                  onClick={() => addToWishlist("Product 1")}
                >
                  ADD TO CART
                </Button>
              </Flex>

              <Flex alignItems={"center"} ml={5}>
                <IconButton
                  borderRadius={0}
                  _hover={{
                    color: "black",
                    background: "#D9EEFA",
                    transition: "0.2s",
                  }}
                  icon={<FiMinus />}
                  bg={"#055C9D"}
                  color={"white"}
                  aria-label="Decrease quantity"
                  onClick={halveSubtotal}
                />
                <Text paddingX="2">{counter}</Text>
                <IconButton
                  borderRadius={0}
                  _hover={{
                    color: "black",
                    background: "#D9EEFA",
                    transition: "0.2s",
                  }}
                  icon={<IoIosAdd />}
                  bg={"#055C9D"}
                  color={"white"}
                  aria-label="Increase quantity"
                  onClick={doubleSubtotal}
                />
              </Flex>
            </Flex>
          </Flex>
          <Link
            textDecorationLine={"teal"}
            as={NextLink}
            key={product?.id}
            href={`/shop/payment/${product?.id}`}
            passHref
          >
            <Button
              _hover={{
                color: "black",
                background: "#D9EEFA",
                transition: "0.2s",
              }}
              p={5}
              fontSize={"17px"}
              color={"white"}
              width={"350px"}
              bg={"#055C9D"}
              borderRadius={0}
              onClick={buyItNow}
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

          {/* ////////////////////////////////////// Wishlist Section //////////////////////////// */}
          <Flex position="relative">
            {isOpen && (
              <Box
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="blackAlpha.600"
                zIndex="overlay"
              />
            )}

            {isOpen && (
              <Box
                w="sm"
                p="4"
                bg="white"
                position="fixed"
                right="0"
                top="0"
                height="100vh"
                overflowY="auto"
                zIndex="modal"
              >
                <Flex mt={5}>
                  <Text flexGrow={1} fontSize="2xl" mb="4">
                    Shopping Cart
                  </Text>
                  <IconButton
                    flexShrink={0}
                    colorScheme="white"
                    color={"black"}
                    fontSize={"30px"}
                    _hover={{ color: "teal" }}
                    aria-label="Close wishlist"
                    icon={<IoMdClose />}
                    onClick={onClose}
                  />
                </Flex>
                <Divider orientation="horizontal" border={"0.5px solid ash"} />

                <Flex p={30} gap={10}>
                  <Image src={product?.imageUrl} w={"30%"} h={"15vh"}></Image>

                  <Flex direction={"column"} gap={4}>
                    <Heading
                      fontSize={"lg"}
                      fontFamily={'"Outfit", sans-serif'}
                    >
                      {product?.name}
                    </Heading>
                    <Text fontWeight={"bold"}>
                      ${(product?.price * counter).toFixed(2)}
                    </Text>
                    <Flex alignItems={"center"}>
                      <IconButton
                        _hover={{
                          color: "black",
                          background: "#D9EEFA",
                          transition: "0.2s",
                        }}
                        color={"white"}
                        bg={"#055C9D"}
                        borderRadius={0}
                        colorScheme="teal"
                        icon={<FiMinus />}
                        aria-label="Decrease quantity"
                        onClick={halveSubtotal}
                      />
                      <Text paddingX="2">{counter}</Text>
                      <IconButton
                        _hover={{
                          color: "black",
                          background: "#D9EEFA",
                          transition: "0.2s",
                        }}
                        color={"white"}
                        bg={"#055C9D"}
                        borderRadius={0}
                        icon={<IoIosAdd />}
                        aria-label="Increase quantity"
                        onClick={doubleSubtotal}
                      />
                    </Flex>
                  </Flex>
                </Flex>

                <Box position="absolute" bottom="30">
                  <Divider
                    mt={"60px"}
                    orientation="horizontal"
                    border={"0.5px solid ash"}
                  />
                  <Flex gap={3} mt={5}>
                    <Text flexGrow={1} fontWeight={"bold"}>
                      Sub Total:
                    </Text>
                    <Text flexShrink={0} mr={5} fontWeight={"bold"}>
                      ${(product?.price * counter).toFixed(2)}
                    </Text>
                  </Flex>
                  <Text mt={"15px"}>Everything is calculated at checkout</Text>
                  <Link
                    as={NextLink}
                    key={product?.id}
                    href={`/shop/payment/${product?.id}`}
                    passHref
                  >
                    <Button
                      _hover={{
                        color: "black",
                        background: "#D9EEFA",
                        transition: "0.2s",
                      }}
                      color={"white"}
                      bg={"#055C9D"}
                      mt={"15px"}
                      p={5}
                      fontSize={"17px"}
                      width={"350px"}
                      colorScheme="teal"
                      borderRadius={0}
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
                      _hover={{
                        color: "black",
                        background: "#D9EEFA",
                        transition: "0.2s",
                      }}
                      color={"white"}
                      bg={"#055C9D"}
                      mt={"15px"}
                      p={5}
                      fontSize={"17px"}
                      width={"350px"}
                      colorScheme="teal"
                      borderRadius={0}
                      onClick={buyItNow}
                    >
                      VIEW CART
                    </Button>
                  </Link>
                </Box>
              </Box>
            )}
          </Flex>

          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Image boxSize={"30px"} src="../../cash.png"></Image>
            <Image boxSize={"30px"} src="../../mastercard.jpeg"></Image>
            <Image boxSize={"30px"} src="../../visa.png"></Image>
          </Flex>
        </Flex>
      </Flex>

      <Box>
        <Tabs variant="enclosed" isFitted>
          <TabList mb="1em">
            <Tab fontWeight={"bold"}>Description</Tab>
            <Tab fontWeight={"bold"}>Additional Information</Tab>
            <Tab fontWeight={"bold"}>Reviews</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
    </>
  );
};

export default ProductPage;
