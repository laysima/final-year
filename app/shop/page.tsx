"use client";
import React from "react";
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
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaAngleRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import PaginationControls from "@/app/components/PaginationControls";
import { BiSearch, BiFilter } from "react-icons/bi";
import { useCartStore } from "@/zustand/store";

const initialProducts = require("../datasource.json");

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";

  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const pathname = usePathname();
  const [products, setProducts] = useState(initialProducts);
  const currentItems = products.slice(start, end);

  const [showText, setShowText] = useState(false);

  const { add_to_cart, cart } = useCartStore();
  const [counter, setCounter] = useState(1);

  const [filteredItems, setFilteredItems] = useState(currentItems);

  const handleSearch = ({event}:any) => {
    const value = event.target.value.toLowerCase();
    const filtered = currentItems.filter(({product}:any) => product.name.toLowerCase().includes(value));
    setFilteredItems(filtered);
};

  const AddToCart = (product: any) => {
    add_to_cart({
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: counter,
      currency: "",
      subtotal: product.price * counter,
    });
    console.log(counter);
  };

  //
  // const [isHovered, setIsHovered] = useState(false);

  // const textStyle = {
  //   transition: 'all 0.3s ease-in-out',
  //   transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  //   fontWeight: isHovered ? 'bold' : 'normal',
  //   shadow : " 1px 1px 2px grey",
  // };

  const handleSortChange = (event: any) => {
    const sortValue = event.target.value;
    let sortedProducts = [...products];

    switch (sortValue) {
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // No default sorting or handle differently
        break;
    }

    setProducts(sortedProducts);
  };

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
            onChange={handleSortChange}
            w={"20%"}
            borderRadius={"none"}
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low-High)</option>
            <option value="price-desc">Price (High-Low)</option>
          </Select>

                <InputGroup width={'250px'}> 
                        <Input id='input-box'
                        type='text'
                        placeholder="search"
                        onChange={handleSearch}
                        border='0.5px solid'
                        borderColor='grey' 
                        borderRadius={"50px"}
                        p={5}/>
                        <InputRightElement> 
                        <button>
                        <BiSearch />
                        </button>
                        </InputRightElement> 
                    </InputGroup>
        </Flex>
        <SimpleGrid columns={[2, null, 3, 4]} spacing="5">
          {currentItems.map((product: any, index: any) => (
            <Box
              key={index}
              as={Link}
              href={`/shop/${product.id}`}
              bg={"#F9F9F8"}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transition: "all .3s ease",
                color: "teal",
              }}
            >
              <Box
                alignItems={"center"}
                justifyContent={"center"}
                bg={"#F9F9F8"}
                border={"none"}
                position="relative"
                key={product.id}
                overflow="hidden"
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
                  <Image
                    src={product.imageUrl}
                    boxSize="200px"
                    objectFit="cover"
                  />
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
                  <Text>${product.price}</Text>
                </Box>
              </Box>

              <Box p={"7px"}>
                <Link
                  textDecorationLine={"teal"}
                  _hover={{ color: "teal", transition: "0.2s" }}
                  as={NextLink}
                  key={product?.id}
                  href={`/shop/{id}/cart/`}
                  passHref
                >
                  <Button
                    textDecorationLine={"none"}
                    p={5}
                    fontSize={"15px"}
                    color={"white"}
                    bg={"#378ba4"}
                    onClick={() =>AddToCart(product)}
                  >
                    Add To Cart
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <PaginationControls
          hasNextPage={end < initialProducts.length}
          hasPrevPage={start > 0}
        />
      </Box>
    </>
  );
}
