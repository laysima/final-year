"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  useToast,
} from "@chakra-ui/react";
import {  GetProducts } from "@/app/api";
import { ProductType } from "@/Schemas";

function formatString(name: string): string {
  return name.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

export default function GetAllProducts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): JSX.Element {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "4";
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<{
    [key: string]: ProductType[];
  }>({});
  const [deletingProduct, setDeletingProduct] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await GetProducts();
      if (data && typeof data === "object") {
        setCategories(data);
      } else {
        setCategories({});
        toast({
          title: "Unexpected response format",
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      setCategories({});
      toast({
        title: "Couldn't fetch product data. Check your internet connection",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (
    name: string,
    category: string
  ): Promise<void> => {
    setDeletingProduct(name);
    try {
      const data = await DeleteProduct({ category, name });
      if (data) {
        toast({
          title: "Success",
          status: "success",
          isClosable: true,
        });
        getAllProducts();
      }
    } catch (error) {
      toast({
        title: "Couldn't delete product. Try again",
        status: "error",
        isClosable: true,
      });
    } finally {
      setDeletingProduct(null);
    }
  };

  return (
    <Flex bg="#F9F9F8">
      <Flex>
        <Navbar />
      </Flex>
      <Flex direction="column" p="30px" w="100%">
        <Flex p={3} bg="white" justify="center" align="center">
          <Flex align="center" grow={1}>
            <Button p={2} bg="#05A1F8" color="white" borderRadius={0}>
              <Link href="/products/$">+ Add new Products</Link>
            </Button>
          </Flex>
          <Flex alignItems="center" shrink={0}>
            <Box w="40px">
              <Image borderRadius="50px" objectFit="cover" src="m1.jpg" />
            </Box>
            <Flex direction="column">
              <Text fontWeight={500}>Shakur</Text>
              <Text fontSize="12px">Admin</Text>
            </Flex>
          </Flex>
        </Flex>
        <SimpleGrid columns={4} spacing={5}>
          {Object.keys(categories).map((category) => (
            <Box mt={10} key={category}>
              <Text fontSize="l" fontWeight="bold" mb={4}>
                {category}
              </Text>
              {categories[category].map((product: ProductType) => (
                <Flex p={2} bg="white" direction="column" key={product.name}>
                  <Flex direction="column">
                    <Box>
                      <Image
                        borderRadius={"10px"}
                        objectFit="cover"
                        src={product.image}
                        alt={product.name}
                      />
                    </Box>

                    <SimpleGrid columns={2} spacingX={"30px"} spacingY="20px">
                      <Box>
                        <Text fontWeight={900}>Name:</Text>
                      </Box>
                      <Box>
                        <Text>{formatString(product.name)}</Text>
                      </Box>

                      <Box>
                        <Text fontWeight={900}>Price:</Text>
                      </Box>
                      <Box>
                        <Text>{product.price}</Text>
                      </Box>

                      <Box>
                        <Text fontWeight={900}>Weight:</Text>
                      </Box>
                      <Box>
                        <Text>{product.weight}</Text>
                      </Box>

                      <Box>
                        <Text fontWeight={900}>Dosage:</Text>
                      </Box>
                      <Box>
                        <Text>{product.dosage}</Text>
                      </Box>

                      <Box>
                        <Text fontWeight={900}>Category:</Text>
                      </Box>
                      <Box>
                        <Text>{formatString(product.category)}</Text>
                      </Box>

                      <Box>
                        <Text fontWeight={900}>Expiration Date:</Text>
                      </Box>
                      <Box>
                        <Text>{product.expirationDate}</Text>
                      </Box>

                      <Box>
                        <Text fontWeight={900}>Description:</Text>
                      </Box>
                      <Box>
                        <Text>{product.description}</Text>
                      </Box>
                    </SimpleGrid>

                    <Button
                      onClick={() =>
                        deleteProduct(product.name, product.category)
                      }
                      isLoading={deletingProduct === product.name}
                    >
                      {deletingProduct === product.name
                        ? "Deleting..."
                        : "Delete"}
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </Box>
          ))}
        </SimpleGrid>
        <PaginationControls
          hasNextPage={false} // Adjust logic if you need pagination for categories
          hasPrevPage={false} // Adjust logic if you need pagination for categories
        />
      </Flex>
    </Flex>
  );
}
