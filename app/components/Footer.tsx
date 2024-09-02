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
  useDisclosure
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaGlobe,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { BiSearch} from "react-icons/bi";
import { SimpleGrid } from '@chakra-ui/react';
import Chatbot from "./Chatbot";

export const Footer = () => {
  const pathname = usePathname();

  const [showScrollButton, setShowScrollButton] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef<HTMLButtonElement>(null);

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
      <Box p={30} bg={"#003060"} color={"white"}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={20}>
          <Flex direction={"column"} fontSize={"20px"}>
            <Heading
              fontWeight={900}
              fontFamily={'"PT Sans", sans-serif'}
              fontSize="30px"
            >
              PharmaInc
            </Heading>

            <Flex direction={"column"} fontSize={"md"} gap={"20px"}>
              <Flex align={"center"} gap={3}>
                <Icon as={FaPhoneAlt} />
                <Text>+233 50 924 6726</Text>
              </Flex>

              <Flex align={"center"} gap={3}>
                <Icon as={IoMdMail} />
                <Text>info@example.com</Text>
              </Flex>

              <Flex align={"center"} gap={3}>
                <Icon as={FaGlobe} />
                <Text>wwww.pharmainc.com</Text>
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
            fontSize={"md"}
            justifyContent={"space-around"}
          >
            <Heading fontWeight={900} fontSize={"30px"}>
              Company
            </Heading>
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
            <Heading fontWeight={900} fontSize={"30px"}>
              Help & Support
            </Heading>
            <Link
              _hover={{ color: "#A45F66", transition: "0.2s" }}
              as={NextLink}
              href="/support"
            >
              Support
            </Link>            
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
            <Heading fontWeight={900} fontSize={"30px"}>
              Newsletter
            </Heading>
            <Text>
              Subscribe our Newsletter to get the latest news and insights
            </Text>
            <Text>By subscribing, you accept the Privacy Policy</Text>

            <InputGroup width={"250px"}>
              <Input
                id="input-box"
                type="text"
                placeholder="search"
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

            <Flex>
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

    {/* Chatbot with infermedica Ai */}
        <Chatbot/>

 

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
            size={"lg"}
              />
        )}

    
      </Box>
    </footer>
  );
};

export default Footer;
