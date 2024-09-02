"use client";
import { useCartStore } from "@/zustand/store";
import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ProductType } from "@/schemas";
import { FaAngleRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoMdHeartEmpty, IoIosAdd, IoMdClose } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import IdModal from "@/app/components/IdModal/page";
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
  Skeleton,
  SkeletonText,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";


////////////////////////////////////// APIs /////////////////////////////////////////////////
// import { GetProducts } from "@/app/api";


const ProductDetail = ({ params }: any) => {
  const pathname = usePathname();

  const id = params.id;

  const token = getCookie('token')
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();

  const user = getCookie('user')

  const btnRef = useRef<HTMLButtonElement>(null);

  const { add_to_cart } = useCartStore();

  const [counter, setCounter] = useState(1);


  const { data: product , isLoading } = useQuery({
    queryKey: [`product_${id}`, id], queryFn: async () => {
      const res = await fetch(`/api/products/${id}`)
      return res?.ok ? res.json() : []
    }, ...{ enabled: !!id }
  })


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


  return (
    <>
      <Modal isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Authentication Required</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You need to be logged in to add products to the cart.
          </ModalBody>

          <ModalFooter>
            <Flex gap={5}>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            <Link as={NextLink} href="/login">
              <Button borderRadius={5} colorScheme="blue" variant={"outline"}>
                SignIn
              </Button>
            </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
        </Modal>

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
          <Skeleton isLoaded={!isLoading}>
          <Heading
            fontFamily={'"Outfit", sans-serif'}
            color={"white"}
            fontSize={"5xl"}
          >
            {product?.name}
          </Heading>
          </Skeleton>
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

        <Flex p={30} justifyContent={"center"} fontSize={"18px"} gap={10}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={10}>
            <Skeleton isLoaded={!isLoading}>
              <Flex ml={'50%'}>
                <Image w={'100%'} src={product?.image} h={'55dvh'} alt="product"></Image>
              </Flex>
            </Skeleton>

            <Flex direction={"column"} gap={4} mt={"50px"}>
            <SkeletonText isLoaded={!isLoading}>
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
              </SkeletonText>
              <SkeletonText isLoaded={!isLoading} noOfLines={4}>
              <Text fontWeight={"bold"}>Availability:</Text>

              <Flex gap={3}>
                <Text fontWeight={"bold"}>Sub Total:</Text>
                <Text>₵{(product?.price * counter).toFixed(2)}</Text>
              </Flex>

              <Flex gap={3}>
                <Text fontWeight={"bold"}>Vendor:</Text>
                <Text>Pharma industries</Text>
              </Flex>
              </SkeletonText>

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
                <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap={5}>
                  <Box>
                    <Button
                      ref={btnRef}
                      colorScheme="blue"
                      onClick={() => {
                        if (!token || !user) {
                          openModal()
                          return;
                        }
                        onOpen()
                      }}
                      width={"230px"}
                      fontSize={"17px"}
                      borderRadius={0}
                    >
                      ADD TO CART
                    </Button>
                    <IdModal isOpen={isModalOpen} onClose={closeModal}/>

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
                              alt={'product'}
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
                      _hover={{ colorScheme: "blue" }}
                      icon={<FiMinus />}
                      aria-label="Decrease quantity"
                      onClick={() => {
                        if (!token || !user) {
                          return alert('SIGN IN');
                        }
                        halveSubtotal();
                      }}
                    />
                    <Text px={2}>{counter}</Text>
                    <IconButton
                      borderRadius={0}
                      bg={"white"}
                      _hover={{ colorScheme: "blue" }}
                      icon={<IoIosAdd />}
                      aria-label="Increase quantity"
                      onClick={() => {
                        if (!token || !user) {
                          return alert('SIGN IN');
                        }
                        doubleSubtotal();
                      }}
                    />
                  </Flex>
                </SimpleGrid>
              </Flex>

              <Link
                textDecorationLine={"teal"}
                as={NextLink}
                key={product?.id}
                href={(!token && user) ? `/shop/payment/${product?.id}` : ''}
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
                    if (!token || !user) {
                      openModal()
                      return;
                    }

                    buyItNow()
                  }}
                >
                  BUY IT NOW
                </Button>
                <IdModal isOpen={isModalOpen} onClose={closeModal} />
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
                <Image alt="image" boxSize={"30px"} src="../../cash.png"></Image>
                <Image alt="image" boxSize={"30px"} src="../../mastercard.jpeg"></Image>
                <Image alt="image" boxSize={"30px"} src="../../visa.png"></Image>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>

        <Box>
          <Tabs variant="enclosed" isFitted align="center">
            <TabList mb="1em">
              <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap={5} justifyContent={"space-around"} alignContent={"center"}>
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
