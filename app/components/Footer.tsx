'use client' 
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Box, Flex, Heading, Text, InputGroup, InputRightElement,Input, Divider, IconButton} from '@chakra-ui/react'
import { FaPhoneAlt, FaCalendarAlt, FaGlobe, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane} from "react-icons/fa";
import { IoMdMail} from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";



export const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
  <footer style={{width:'100%'}}>
    <Box p={'50px'} bg={'teal'} color={'white'}>
    <Flex gap={30} justifyContent={'space-between'}>
      <Flex direction={'column'} fontSize={'20px'}>
      <Heading fontWeight={900} fontFamily={'"PT Sans", sans-serif'}fontSize='50px'>PharmaInc</Heading>
  
        <Flex>
        <FaPhoneAlt style={{marginRight:'10px', fontSize:'20px', marginTop:"4px" ,justifyContent:'center' ,alignItems:'center'}} />
          <Flex mt={7}>
            +233 50 924 6726
          </Flex>
        </Flex>

        <Flex mt={7}>
        <IoMdMail style={{marginRight:'10px', fontSize:'20px', marginTop:"4px" ,justifyContent:'center' ,alignItems:'center'}}  />
          <Flex>
            info@example.com
          </Flex>
        </Flex>

        <Flex mt={7}>
        <FaGlobe style={{marginRight:'10px', fontSize:'20px', marginTop:"4px" ,justifyContent:'center' ,alignItems:'center'}} />
          <Flex>
            wwww.pharmainc.com
          </Flex>
        </Flex>

        <Flex gap={20} mt={'20px'}>
        <FaTwitter />
          <Flex>
          <FaFacebookF />
          </Flex>
          <Flex>
          <FaInstagram />
          </Flex>

          <Flex>
          <FaYoutube />
          </Flex>
        </Flex>
      </Flex>

      
      <Flex direction={'column'} fontSize={'20px'} justifyContent={'space-around'}>
        <Heading fontWeight={900}>Company</Heading>
        <Text>About</Text>
        <Text>Plans</Text>
        <Text>Products</Text>
        <Text>Privacy Policy</Text>
      </Flex>

      <Flex direction={'column'} fontSize={'20px'} justifyContent={'space-around'}>
        <Heading fontWeight={900}>Help & Support</Heading>
        <Text>Support</Text>
        <Text>Locate Us</Text>
        <Text>Contact Us</Text>
        <Text>Login</Text>
        <Text>Faq</Text>
      </Flex>

      <Flex direction={'column'} fontSize={'20px'} justifyContent={'space-around'}>
        <Heading fontWeight={900}>Newsletter</Heading>
        <Text>Subscribe our Newsletter to get the latest news and insights</Text>
        <Text>By subscribing, you accept the Privacy Policy</Text>
        <InputGroup mt={'45px'}>
                  <InputRightElement width={'250px'}>
                  <FaTelegramPlane color='black' style={{marginTop:"8px", padding:"2px", fontSize:'25px', marginRight:"10px"}} />
                </InputRightElement>  
              <Input 
              color={'black'}
              border='0.5px solid'
              borderColor='#0C1446' 
              placeholder='Search...' 
              width={'400px'}
              p={7}/>
              </InputGroup>
        <Flex mt={20}>
        <FaCalendarAlt color='white' style={{marginTop:"8px", padding:"2px", fontSize:'40px', marginRight:"10px"}}/>
          <Flex fontWeight={900} >
            Mon - Friday <br></br> 9:00 AM - 9:00 PM
          </Flex>
        </Flex>
      </Flex>
    </Flex>

    <Divider mt={'45px'} border={'0.5px solid'} color={'white'} orientation='horizontal' />
    <Flex height={'3vh'} mt={10}> 
      <Flex p={5} direction={'column'} justifyContent={'center'} >
        <Text fontFamily={'"PT Sans", sans-serif'} as={'b'}>&copy; 2024 PharmaInc</Text>
      </Flex>
      <Divider border={'1px solid'}  orientation='vertical' borderColor={'wwhite'} height={'3vh'} />
      <Text as={'b'} mt={1.3} ml={3}>Design by Laysima</Text>
      </Flex>

      {showScrollButton && (
        <IconButton aria-label='Scroll To Top '
          icon={<FaArrowUp />}
          isRound={true}
          fontSize="30px"
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="50"
          onClick={scrollToTop}
          bg="black"
          padding={10}
          borderRadius={'50%'}
          color="white"
        />
      )}
    </Box>


  </footer>
  )
}

export default Footer