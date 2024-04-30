"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Divider,
  IconButton,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaGlobe,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { CiChat1 } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { SimpleGrid } from '@chakra-ui/react';

export const Footer = () => {
  const pathname = usePathname();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showChatBubble, setShowChatBubble] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer style={{ width: "100%" }}>
      <Box p={30} px={"100px"} bg={"#003060"} color={"white"}>
      <SimpleGrid columns={{base:1, md:2, xl:4}} gap={20}>
          <Flex direction={"column"} fontSize={"20px"} >
            <Heading
              fontWeight={900}
              fontFamily={'"PT Sans", sans-serif'}
              fontSize="30px"
            >
              PharmaInc
            </Heading>

            <Flex
            direction={"column"}
            fontSize={"md"}
            gap={'20px'}
          >
            <Flex align={"center"} gap={3}>
              <Icon as={FaPhoneAlt}/>
              <Flex >+233 50 924 6726</Flex>
            </Flex>

            <Flex align={"center"} gap={3}>
              <Icon as={IoMdMail}/>
              <Flex>info@example.com</Flex>
            </Flex>

            <Flex align={"center"} gap={3}>
              <Icon as={FaGlobe }/>
              <Flex>wwww.pharmainc.com</Flex>
            </Flex>
            

            <Flex gap={5}>
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
          </Flex>

          <Flex
            direction={"column"}
            fontSize={"20px"}
            justifyContent={"space-around"}
          >
            <Heading fontWeight={900} fontSize={'30px'}>Company</Heading>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="/about"
            >
              About{" "}
            </Link>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="/shop"
            >
              Products
            </Link>
            <Text>Privacy Policy</Text>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="#section 1"
            >
              Locate Us
            </Link>
          </Flex>

          <Flex
            direction={"column"}
            fontSize={"md"}
            justifyContent={"space-around"}
          >
            <Heading fontWeight={900} fontSize={'30px'}>Help & Support</Heading>
            <Text>Support</Text>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="/login"
            >
              Login
            </Link>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="#section 2"
            >
              faq
            </Link>
          </Flex>

          <Flex direction={"column"} fontSize={"md"} gap={"20px"}>
            <Heading fontWeight={900} fontSize={'30px'}>Newsletter</Heading>
            <Text>
              Subscribe our Newsletter to get the latest news and insights
            </Text>
            <Text>By subscribing, you accept the Privacy Policy</Text>

            <InputGroup width={'250px'}> 
                        <Input id='input-box'
                        type='text'
                        placeholder="search"
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

            <Flex >
              <FaCalendarAlt
                color="white"
                style={{
                  marginTop: "8px",
                  padding: "2px",
                  fontSize: "40px",
                  marginRight: "10px",
                }}
              />
              <Flex fontWeight={900}>
                Mon - Friday <br></br> 9:00 AM - 9:00 PM
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>

        <Divider
          mt={"45px"}
          border={"0.5px solid"}
          color={"white"}
          orientation="horizontal"
        />
        <Flex height={"3vh"} mt={10} alignItems={"center"}>
          <Flex p={5} direction={"column"} justifyContent={"center"}>
            <Text fontFamily={'"PT Sans", sans-serif'} as={"b"}>
              &copy; 2024 PharmaInc
            </Text>
          </Flex>
          <Divider
            border={"1px solid"}
            alignItems={"center"}
            orientation="vertical"
            borderColor={"wwhite"}
            height={"3vh"}
          />
          <Text as={"b"} ml={3}>
            Design by Laysima
          </Text>
        </Flex>

        {showChatBubble && (
          <Box
            color={"black"}
            fontSize="30px"
            position="fixed"
            bottom="100px"
            right="20px"
            zIndex="50"
            h={"70vh"}
            w={"400px"}
            boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"}
            bg={"white"}
          >
            <Flex
              direction={"column"}
              p={"20px"}
              bg={"linear-gradient(115deg, #004ff9, #000000)"}
            >
              <Text fontSize={"20px"}>Chat With Us</Text>

              <Text fontSize={"45px"} color={"white"} mt={3}>
                HELLO!! SHAKUR
              </Text>
              <Text fontSize={"20px"} color={"#0881DE"} mb={"50px"}>
                How Can ChatGpt Help You
              </Text>
            </Flex>

            <Flex direction={"column"} p={"20px"} mt={"250px"}>
              <Input
                placeholder="type message here"
                p={4}
                fontSize={"20px"}
                variant={"flushed"}
                border={"0.5px solid black"}
              />
            </Flex>
          </Box>
        )}

        <IconButton
          onClick={() => setShowChatBubble((prev) => !prev)}
          aria-label="chatbubble"
          icon={<CiChat1 />}
          isRound={true}
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="50"
          colorScheme="blue"
          size={'lg'}
          borderRadius={"50%"}
          color="white"
        />

        {showScrollButton && (
          <IconButton
            aria-label="Scroll To Top "
            icon={<FaArrowUp />}
            isRound={true}
            position="fixed"
            bottom="20px"
            right="20px"
            zIndex="50"
            onClick={scrollToTop}
            bg="black"
            borderRadius={"50%"}
            color="white"
            size={'lg'}
          />
        )}
      </Box>
    </footer>
  );
};

export default Footer;
