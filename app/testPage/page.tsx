'use client'
import React from 'react'
import { useState } from 'react';
// import PaginationControls from '@/app/components/PaginationControls'
import { IconButton ,Center, Select, Heading, Button, Text, Image, Flex, Box, VStack, SimpleGrid, Stack, ButtonGroup, Link, GridItem, Grid, AbsoluteCenter, Icon} from '@chakra-ui/react'
import { FaHeart, FaAngleRight} from 'react-icons/fa';
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const initialProducts = require('../datasource.json');

export default function testPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '8'

   

      // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  const entries = initialProducts.slice(start, end)

  const pathname = usePathname()

  

  return (
<div>
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


    <SimpleGrid columns={[2, null, 3, 4]} spacing="5"  p={10} alignItems="center" justifyContent="center" >
        {entries.map((entry:any) => (
    <Box bg={'#F9F9F8'} _hover={{ shadow: "md", transform: "translateY(-5px)", transition: "all .3s ease" , color:'teal'}}  >
      <Link key={entry.id} href={`/shop/${entry.id}`} >
        <Box 
            p={5}
            bg={'#F9F9F8'} 
            border={'none'}
            position="relative"
            key={entry.id}
            overflow="hidden"
            > 
          <Image src={entry.imageUrl} objectFit="cover" boxSize="200px" />

          <Box p="5">
            <Text fontWeight="bold">{entry.name}</Text>
            <Text>${entry.price}</Text>
          </Box> 
        </Box>
      </Link>

      <Box p={'7px'}>
        <Link key={entry?.id} href={`/shop/payment/${entry?.id}`}>
          <Button colorScheme="teal" fontSize={'l'} size="sm" >ADD TO CART</Button>
        </Link>
      </Box>
   </Box>))}

  </SimpleGrid>
</Box>

     {/* <PaginationControls 
       hasNextPage={end < initialProducts.length}
       hasPrevPage={start > 0}
       /> */}
  </div>
  )
}
