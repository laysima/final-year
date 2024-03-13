'use client'
import React from 'react'
import NextLink from 'next/link'
import { useState } from 'react';
import { IconButton ,Center, Select, Heading, Button, Text, Image, Flex, Box, VStack, SimpleGrid, Stack, ButtonGroup, Link} from '@chakra-ui/react'
import { FaHeart, FaAngleRight} from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';



const initialProducts = require('../datasource.json');

const itemsPerPage = 8;
  
const page = () => {
  const pathname = usePathname()
    const [products, setProducts] = useState(initialProducts);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);
  
    const changePage = (page:any) => {
      setCurrentPage(page);
    };

    const handleSortChange = (event:any) => {
        const sortValue = event.target.value;
        let sortedProducts = [...products];
    
        switch (sortValue) {
          case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
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
    <Center flexDirection={'column'} p={40} bgImage={"cate1.jpg"} textAlign={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} >
        <Heading fontFamily={'"PT Sans", sans-serif'} color={'white'}>Shop</Heading>
        <Flex mt={3} alignItems={'center'}>
        <Link fontSize={'1.4em'} color={"white"}  _hover={{color:"teal", transition:'0.2s'}} as={NextLink} className={`link ${pathname === '/' ? 'active' : ''}`}  href="/" >Home </Link>
        <FaAngleRight style={{color:'white', fontSize:'1em'}}  />
        <Text color={'white'} fontSize={'1.2em'}>Shop</Text>
        </Flex>
      </Center>
    </Box>

     <Box ml={'10%'} w={'80%'} p={5} justifyContent={'space-evenly'}>
      <Box marginBottom="4">
        <Select placeholder="Sort by" onChange={handleSortChange} w={'20%'} borderRadius={'none'}>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low-High)</option>
          <option value="price-desc">Price (High-Low)</option>
        </Select>
      </Box>
      <SimpleGrid columns={[2, null, 3, 4]} spacing="5"  >
        {currentItems.map((product:any) => (
          <Box bg={'#F9F9F8'} _hover={{ shadow: "md", transform: "translateY(-5px)", transition: "all .3s ease" , color:'teal'}} >
          <Link key={product.id} href={`/shop/${product.id}`} >
        <Box 
            bg={'#F9F9F8'} 
            border={'none'}
            position="relative"
            key={product.id}
            overflow="hidden"
            >  
                <Box p={5} _hover={{
                    '> img': {
                        transform: 'scale(1.1)',
                    },
                    '> div': {
                        display: 'block',
                    },
                    }} transition="all .3s ease">
                    <Image src={product.imageUrl} boxSize="200px"  objectFit="cover" />
                        <Box  position="absolute"
                            top="0"
                            right="0"
                            display="none"
                            padding="2">
                            <IconButton aria-label='heart'
                                    icon={<FaHeart />}
                                    isRound
                                    size="sm"
                                    colorScheme="red"
                                    variant="ghost"
                            /> 
                            </Box>
                    </Box>
                <Box p="5">
                    <Text fontWeight="bold">{product.name}</Text>
                    <Text>${product.price}</Text>
                </Box>   
        </Box>
        </Link>
        <Box p={'7px'}>
        <Link key={product?.id} href={`/shop/payment/${product?.id}`}>
        <Button colorScheme="teal" fontSize={'l'} size="sm" >ADD TO CART</Button>
        </Link>
        </Box>
        </Box>
        
        ))}
      </SimpleGrid>

      <Stack spacing={4} direction="row" align="center" justifyContent="center" marginTop="4">
        <ButtonGroup variant="outline" spacing="2">
          {[...Array(totalPages)].map((page) => (
            <Button mt={10}
              key={page + 1}
              onClick={() => changePage(page + 1)}
              isActive={currentPage === page + 1}
            >
              {page + 1}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Box>


    </>
  )
}

export default page