"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";
import {
  IconButton,
  Center,
  Select,
  Heading,
  Button,
  Text,
  Image,
  Flex,
  Box,
  Input,
  SimpleGrid,
  InputGroup,
  InputRightElement,
  Link,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  HStack,
  useToast,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHeart, FaAngleRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import PaginationControls from "@/app/components/PaginationControls";
import { BiSearch } from "react-icons/bi";
import { useCartStore } from "@/zustand/store";
import PageWrap from "../components/PageWrap";
// import { GetProducts } from "@/app/api";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3, }, },
};

const images = {
  hidden: { opacity: 0, y: 30, },
  show: { opacity: 1, y: 0, transition: { duration: 1, }, },
};


function formatString(name: string): string {
  return name.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

export default function Page({ searchParams, }: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'], queryFn: async () => {
      const res = await fetch('/api/products')
      return res?.ok ? res.json() : []
    }
  })

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const [showText, setShowText] = useState(false);
  const { add_to_cart, cart } = useCartStore();
  const [counter, setCounter] = useState(1);
  const [getData, setData] = useState<[]>(products || [])
  const [getSearch, setSearch] = useState("");
  const [getFilter, setFilter] = useState("");
  const [getSort, setSort] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = getCookie('token')
  const user = getCookie('user')

  const AddToCart = (product: any) => {
    if (!token || !user) {
      onOpen(); // Open the modal
      return;
    }

    add_to_cart({
      id: product.id,
      imageUrl: product.image,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: counter,
      subtotal: product.price * counter,
    });
    console.log(counter);
  };



  useEffect(() => {
    if (!products) return;

    let filteredData = products;

    if (getFilter) {
      const filterLower = getFilter.toLowerCase();
      filteredData = products.filter((product: any) =>
        product.category.toLowerCase() === filterLower
      );
    }

    if (getSort) {
      switch (getSort) {
        case "name-asc":
          filteredData = filteredData.sort((a: any, b: any) =>
            a.name.localeCompare(b.name)
          );
          break;
        case "name-desc":
          filteredData = filteredData.sort((a: any, b: any) =>
            b.name.localeCompare(a.name)
          );
          break;
        case "price-asc":
          filteredData = filteredData.sort((a: any, b: any) =>
            a.price - b.price
          );
          break;
        case "price-desc":
          filteredData = filteredData.sort((a: any, b: any) =>
            b.price - a.price
          );
          break;
        default:
          break;
      }
    }

    if (getSearch) {
      const searchLower = getSearch.toLowerCase();
      filteredData = filteredData.filter((product: any) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.weight.toLowerCase().includes(searchLower) ||
        product.dosage.toLowerCase().includes(searchLower)
      );
    }

    setData(filteredData);
  }, [products, getFilter, getSort, getSearch]);



  return (
    <>

<Modal isOpen={isOpen} onClose={onClose}>
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


      <PageWrap>
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
              Shop
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

        <Box ml={"10%"} w={"80%"} p={5} justifyContent={"space-evenly"}>
          <Flex marginBottom="4" align={"center"} gap={3}>
            <Select
              placeholder="Sort by"
              onChange={(e) => {
                setSort(e.target.value);
              }}
              w={"20%"}
              borderRadius={"none"}
            >
              <option value="name-asc">Name (Z-A)</option>
              <option value="name-desc">Name (A-Z)</option>
              <option value="price-asc">Price (High-Low)</option>
              <option value="price-desc">Price (Low-High)</option>
            </Select>

            <InputGroup width={"250px"}>
              <Input
                id="input-box"
                type="text"
                placeholder="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                border="0.5px solid"
                borderColor="grey"
                borderRadius={"50px"}
                p={5}
              />
              <InputRightElement>
                <button>
                  <BiSearch />
                </button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          {/* {JSON.stringify(filteredItems)} */}

          {isLoading && (
            <Flex alignItems="center" justifyContent="center">
              <Spinner size="xl" />
            </Flex>
          )}

          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={10}>
            {getData?.map((product: any, index: any) => (
              <Box key={index}>
                <Box
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#F9F9F8"}
                  border={"none"}
                  position="relative"
                  overflow="hidden"
                >
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                  >
                    <Box
                      p={5}
                      _hover={{
                        "> div": {
                          display: "block",
                        },
                      }}
                      transition="all .3s ease"
                    >
                      <motion.image variants={images}>
                        <Image
                          src={product.image}
                          boxSize="200px"
                          objectFit="cover"
                        />
                      </motion.image>
                      <Flex
                        position="absolute"
                        top="0"
                        right="0"
                        display="none"
                        padding="2"
                        onMouseEnter={() => setShowText(true)}
                        onMouseLeave={() => setShowText(false)}
                      >
                        {showText && (
                          <Text
                            display="inline"
                            borderRadius={"5px"}
                            fontSize="sm"
                            bg={"white"}
                            color={"black"}
                            p={2}
                            shadow={"1px 1px 2px grey"}
                          >
                            Add to Wishlist
                          </Text>
                        )}
                        <Link href="/">
                          <IconButton
                            _hover={{
                              transform: "scale(1.05)",
                              transition: "transform 0.2s ease-in-out",
                            }}
                            size={"sm"}
                            borderRadius={"50px"}
                            ml={2}
                            fontSize={"sm"}
                            bg={"red"}
                            icon={<FaHeart />}
                            variant="filled"
                            color={"white"}
                            aria-label="More information"
                            marginRight="2"
                          />
                        </Link>
                      </Flex>
                    </Box>

                    <Box p="5">
                      <Text colorScheme="teal" fontWeight="bold">
                        {product.name}
                      </Text>
                      <Text>₵{product.price}</Text>
                    </Box>
                  </motion.div>
                </Box>

                <HStack p={"7px"}>
                  <Button
                    size={"sm"}
                    as={Link}
                    href={`/shop/${product.id}`}
                  >
                    Info
                  </Button>
                  <Button
                    size={"sm"}
                    colorScheme="blue"
                    onClick={() => AddToCart(product)}
                    isDisabled={cart.some((e: any) => e.id === product.id)}
                  >
                    {cart.some((e: any) => e.id === product.id)
                      ? "Added"
                      : "Add To Cart"}
                  </Button>
                </HStack>
              </Box>
            ))}
            {/* ))}
              </Box>
            ))} */}
          </SimpleGrid>

          <PaginationControls
            hasNextPage={end < getData.length}
            hasPrevPage={start > 0}
          />
        </Box>
      </PageWrap>
    </>
  );
}
