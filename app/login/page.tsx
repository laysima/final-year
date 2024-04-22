"use client";
import {
  Text,
  Input,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Link,
  Flex,
  InputRightElement,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
// import Link from 'next/link'
import { useState } from "react";
import NextLink from "next/link";

import React from "react";
import { LoginSchema, LoginType } from "@/schemas";

const login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  
  //reat hook forms
  const {
    control, 
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver:zodResolver(LoginSchema)
  })

  const onSubmit = (payload:LoginType) => {
    console.log('payload', payload);
  }

  return (
    <>
      <Box
        bgImage={"url('./hexagon.jpg')"}
        width={"full"}
        h={"100vh"}
        bgSize={"cover"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Flex justify={"center"} w={"full"}>
          <Box w={"300px"} mt={"60px"}>
            <Image objectFit={"cover"} src="pharmainc.svg"></Image>
          </Box>
        </Flex>

        <Flex justify={"center"} w={"full"} mt={5} mb={10}>
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
                Sign In
              </Text>
              <Text>Welcome Back! Please enter your details</Text>
            </Flex>

            <Flex mt={10} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Username</FormLabel>
                <Controller 
                  control={control}
                  name={"username"}
                  render={({ field }) => (
                    <Input
                    border={"1px solid #EAEFF2"}
                    type="email"
                    placeholder="Enter your email"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  )}
                />
              
                <FormHelperText color={errors.username? 'red' : ''}>
                  { errors.username ? errors.username.message: 'Please Enter Your Username'}</FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={8} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Controller
                  control={control}
                  name={"password"}
                  render={({field}) => (
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                  
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
                <FormHelperText color={errors.password? 'red' : ''}>
                  { errors.password ? errors.password.message: 'Please Enter Your Password'}
                  </FormHelperText>
              </Flex>
            </Flex>

            <Flex justify={"center"} mt={10}>
              <button
              onClick={handleSubmit(onSubmit)}
                style={{
                  background: "#0881DE",
                  padding: "10px",
                  borderRadius: "7px",
                  color: "white",
                  width: "60%",
                }}
              >
                {" "}
                Sign In
              </button>
            </Flex>

            <Flex justify={"center"} mt={10}>
              <Text> Dont have an Account?</Text>
              <Link
                as={NextLink}
                href="/signup"
                _hover={{
                  color: "#0881DE",
                  transition: "0.5s",
                  cursor: "pointer",
                  fontWeight: 200,
                }}
              >
                <Text> SignUp</Text>
              </Link>
            </Flex>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
};

export default login;
