"use client";
// import Link from 'next/link'
import {
  Text,
  Input,
  Box,
  Grid,
  GridItem,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Link,
  Flex,
  Center,
  Heading,
  Divider,
  InputRightElement,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
// import Link from 'next/link'
import { useState } from "react";
import NextLink from "next/link";
import React from "react";

const signup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box
        bgImage={"url('./hexagon.jpg')"}
        width={"full"}
        bgSize={"cover"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Flex justify={"center"} w={"full"}>
          <Box w={"300px"} mt={"40px"}>
            <Image objectFit={"cover"} src="pharmainc.svg"></Image>
          </Box>
        </Flex>

        <Flex justify={"center"} w={"full"} mt={3} mb={10}>
          <FormControl
            w={"30rem"}
            boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"}
            p={"62px 28px"}
            borderRadius={7}
          >
            <Flex textAlign={"center"} direction={"column"} gap={1}>
              <Text
                fontWeight={500}
                color={"#0881DE"}
                fontFamily={'"Outfit", sans-serif'}
                fontSize={"3xl"}
              >
                Sign Up
              </Text>
              <Flex justify={"center"} mt={5}>
                <Text> Already have An Account? </Text>
                <Link
                  as={NextLink}
                  href="/login"
                  _hover={{
                    color: "#0881DE",
                    transition: "0.5s",
                    cursor: "pointer",
                  }}
                >
                  <Text>Login</Text>
                </Link>
              </Flex>
            </Flex>

            <Flex mt={10} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Name</FormLabel>
                <Input
                  border={"1px solid #EAEFF2"}
                  placeholder="First Name"
                  type="email"
                />
              </Flex>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Email</FormLabel>
                <Input
                  border={"1px solid #EAEFF2"}
                  type="email"
                  placeholder="Please Enter Your email"
                />
                <FormHelperText>Please Enter Your Email</FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Username</FormLabel>
                <Input
                  border={"1px solid #EAEFF2"}
                  type="email"
                  placeholder="Enter your email"
                />
              </Flex>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <button
                      style={{
                        height: "1.75rem",
                        fontSize: "m",
                        backgroundColor: "none",
                      }}
                      onClick={handleClick}
                    >
                      {show ? <BsEye /> : <BsEyeSlash />}
                    </button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Flex>

            <Flex justify={"center"} mt={10}>
              <button
                style={{
                  background: "#0881DE",
                  padding: "10px",
                  borderRadius: "7px",
                  color: "white",
                  width: "60%",
                  fontWeight: "bold",
                }}
              >
                CREATE
              </button>
            </Flex>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
};

export default signup;
