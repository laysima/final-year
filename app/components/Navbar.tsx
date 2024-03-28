'use client'
import {Box,Link,IconButton, Flex, Grid, Image, InputRightElement, Text,useMultiStyleConfig, ListItem, UnorderedList, Icon } from '@chakra-ui/react'
import { useState, useEffect, ChangeEvent} from 'react';
import { usePathname } from 'next/navigation'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane} from "react-icons/fa";
import NextLink from 'next/link'
import React from 'react'
// import { useRouter } from 'next/navigation';
import { BsCart2 } from "react-icons/bs";
import { MdOutlineAccountCircle} from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiSearch, BiFilter} from 'react-icons/bi';
import { Button,Input, InputGroup, Stack} from '@chakra-ui/react'
import Home from '../page';


export const Navbar = () => {
  const pathname = usePathname()
        const [isOpen, setIsOpen] = useState(false);
      
        // Determine if the link is active based on the current path
        // Close dropdown when clicking outside
        // Function to show the dropdown menu
        const showMenu = () => setIsOpen(true);

        // Function to hide the dropdown menu
        const hideMenu = () => setIsOpen(false);

  /////////////////////////// search button available keywords////////////////////////////////////////////
  
  

  
  return (
  
    <nav>
    <Flex bg={'#378ba4'} color={'white'} alignItems={'center'} p={'10px'} px={'100px'} >
    <Flex gap={10} grow={1}  > 
        <IconButton aria-label='direct right' icon={<FaTwitter />} color={'teal'} padding={5} borderRadius={'50%'} bgColor={'white'} />
        <IconButton aria-label='direct right' icon={<FaFacebookF />} color={'teal'} padding={5} borderRadius={'50%'} bgColor={'white'} />
        <IconButton aria-label='direct right' icon={<FaInstagram />} color={'teal'} padding={5} borderRadius={'50%'} bgColor={'white'} />
        <IconButton aria-label='direct right' icon={<FaYoutube />} color={'teal'} padding={5} borderRadius={'50%'} bgColor={'white'} />
        </Flex>
        
        <Text flexShrink={0} mr={55}>
        No: 58 A, East Madison Street, Baltimore, MD, USA 4508
        </Text>   
      </Flex>

    <nav style={{ position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 10, fontSize: '18px', background:'white', marginTop:'10px', marginBottom:'10px'}}>

   <Flex alignItems={'center'} px={'100px'}>
            <Flex shrink={0} alignItems={'center'}>
            <Box
            alignItems={'center'}
                position={'relative'}
                display={'inline-block'}
                onMouseEnter={showMenu} onMouseLeave={hideMenu}>
                <Button cursor={'pointer'} as={'b'} _hover={{color:'teal'}}>
                  <Icon fontSize={'30px'} as={AiOutlineMenu}  transition="transform 0.5s"
      _hover={{
        transform: 'rotate(90deg)',
      }}/>
                </Button>
                    {isOpen && (
                  <Box position={'absolute'} bg={'#f9f9f9'} width={'500px'} padding={'25px'} zIndex={1}
                      boxShadow={'0px 8px 16px 0px rgba(0,0,0,0.2);'}>
                      <Box>
                        <Flex direction={'column'} color={'black'} textDecoration={'none'} as={'b'} >
                            <Link _hover={{background:"#378ba4", transition:'0.5s'}} as={NextLink} href="/" p={12}>Home</Link>
                            <Link _hover={{background:"#378ba4", transition:'0.5s'}} as={NextLink} href="/about" p={12} >About</Link>
                            <Link _hover={{background:"#378ba4", transition:'0.5s'}} as={NextLink} href="/signup" p={12} >login</Link>
                            <Link _hover={{background:"#378ba4", transition:'0.5s'}} as={NextLink} href="/signup" p={12} >signup</Link>
                        </Flex>
                      </Box>
                  </Box>
      )}
              </Box>
            </Flex>


            <Flex grow={1} gap={30} alignItems={'center'} justifyContent={'center'} fontSize='xl'>
            <Link _hover={{color:"teal", transition:'0.2s', cursor:'pointer'}} as={NextLink} className={`link ${pathname === '/' ? 'active' : ''}`}  href="/"  >Home </Link>
            <Link _hover={{color:"teal", transition:'0.2s', cursor:'pointer'}} as={NextLink} className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About </Link>
            <Link _hover={{color:"teal", transition:'0.2s', cursor:'pointer'}} as={NextLink} className={`link ${pathname === '/contact' ? 'active' : ''}`}  href="/contact">Contact</Link>
            <Link _hover={{color:"teal", transition:'0.2s', cursor:'pointer'}} as={NextLink} className={`link ${pathname === '/shop' ? 'active' : ''}`}   href="/shop" >Shop</Link>
 
            <Flex shrink={0} alignItems={'center'}>
                <Box width={'120px'} height={'auto'}>
                <Image width={'full'} objectFit={'cover'} src='pharmainc.svg'></Image>
                </Box>
            </Flex>
            
            </Flex>


            <Flex shrink={0}  alignItems={'center'} justifyContent={'center'} gap={10} mr={50}>
                 <Box textAlign={'center'}>
                    {/* <InputGroup>
                        <InputRightElement> 
                        <Button>
                        <BiSearch style={{marginTop:"8px", padding:"2px", fontSize:'25px', marginRight:"10px"}} />
                        </Button>
                        </InputRightElement>  
                        <Input id='input-box'
                        type='text'
                        border='0.5px solid'
                        borderColor='grey' 
                        borderRadius={"20px"}
                        width={'300px'}
                        p={7}/>
                    </InputGroup> */}

                    {/* <Box position={'absolute'} textColor={'black'} borderTop={'1px solid white'} p={'5px'} bg={'white'} width={'300px'} mt={3} borderRadius={'5px'} shadow= "2px 2px 4px #000000" className='result-box'>
                      <UnorderedList listStyleType='none' cursor='pointer' textAlign='left'>
                        <ListItem _hover={{background:'teal', transition:'0.5s'}} p={10}>Javascript</ListItem>
                        <ListItem _hover={{background:'teal', transition:'0.5s'}} p={10}>web dev</ListItem>
                        <ListItem _hover={{background:'teal', transition:'0.5s'}} p={10}>web dev</ListItem>
                        <ListItem _hover={{background:'teal', transition:'0.5s'}} p={10}>web dev</ListItem>
                      </UnorderedList>
                    </Box> */}
                  </Box>
            <Flex gap={7}>
            <Link fontSize='26px'  _hover={{color:"teal", transition:'0.2s'}} as={NextLink} className={`link ${pathname === '/shop/identifier/payment' ? 'active' : ''}`} href="/shop/identifier/payment"><LiaShoppingBagSolid /></Link>
            <Link fontSize='26px'  _hover={{color:"teal", transition:'0.2s'}} as={NextLink} className={`link ${pathname === '/shop' ? 'active' : ''}`} href="/shop"><BsCart2 /></Link>
            <Link fontSize='26px'  _hover={{color:"teal", transition:'0.2s'}} as={NextLink} className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login"><GoPerson /></Link>
            </Flex>
          </Flex>
        </Flex>
        </nav>
    </nav>
        

  )
}

export default Navbar
