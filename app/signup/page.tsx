"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  useToast
} from "@chakra-ui/react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
// import Link from 'next/link'
import { useState } from "react";
import NextLink from "next/link";
import React from "react";
import { SignupSchema, SignupType } from "@/schemas";
import { Controller } from 'react-hook-form';
import { SignInUser } from "@/api";
import { useRouter } from "next/navigation";

const signup = () => {
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter()
  const toast = useToast()

  

  const {
    control, 
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>({
    resolver:zodResolver(SignupSchema)
  })

  const onSubmit = async (payload:SignupType) => {
    setLoading(true)
    try {
      await SignInUser(payload).then(() => {
       router.push('/login')
      })
      toast({
       title: 'Success',
       status: 'success',
       isClosable: true,
     })
     setLoading(false)
     } 
     catch (e:any) {
       toast({
         title: e.message,
         status: 'error',
         isClosable: true,
       })
     }
  }

  return (
    <>
      <Box
        bgImage={"url('./hexagon.jpg')"}
        width={"full"}
        bgSize={"cover"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
      >
        {/* <Flex justify={"center"} w={"full"}>
          <Box w={"300px"} mt={"40px"}>
            <Image objectFit={"cover"} src="pharmainc.svg"></Image>
          </Box>
        </Flex> */}

        <Flex justify={"center"} w={"full"} mt={3}>
          <FormControl
          pb={10}
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
                <Controller
                control={control}
                name='name'
                render={({ field }) => (
                  <Input
                  variant={'flushed'} bg={'#F0F8FF'}
                  borderRadius={0}
                  type="name"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                )}
                /> 
                 <FormHelperText color={errors.name? 'red' : ''}>
                  { errors.name ? errors.name.message: 'Please Enter Your Required name'}
                  </FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Email</FormLabel>
                <Controller
                control={control}
                name='email'
                render={({ field }) => (
                  <Input
                  variant={'flushed'} bg={'#F0F8FF'}
                  borderRadius={0}
                  type="email"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                )}
                />
      
                 <FormHelperText color={errors.email? 'red' : ''}>
                  { errors.email ? errors.email.message: 'Please Enter Your Email'}
                  </FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Username</FormLabel>
                <Controller
                control={control}
                name='username'
                render={({ field }) => (
                  <Input
                  variant={'flushed'} bg={'#F0F8FF'}
                  borderRadius={0}
                  type="username'"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                )}
                />
                 <FormHelperText color={errors.username? 'red' : ''}>
                  { errors.username ? errors.username.message: 'Please Enter Your username'}
                  </FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Controller
                  control={control}
                  name={"password"}
                  render={({field}) => (
                    <Input
                    variant={'flushed'} bg={'#F0F8FF'}
                    borderRadius={0}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
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
                  fontWeight: "bold",
                }}
              >
                {loading? 'Signing Up.....':  "Sign Up"}
              </button>
            </Flex>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
};

export default signup;
