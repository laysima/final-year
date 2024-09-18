"use client";
import {
  Text, Input, Box, FormControl, FormLabel, FormHelperText, Link, Flex, InputRightElement, InputGroup,
  useToast,
  Button,
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import React from "react";
import { LoginSchema, LoginType } from "@/schemas";
import { LoginUser } from "@/app/api";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const toast = useToast()

  const router = useRouter();

  const user = getCookie('user');

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      router.replace('/')
    }
  }, [user, router])

  const { control, handleSubmit, formState: { errors }, } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema)
  })

  const onSubmit = async (payload: LoginType) => {
    setLoading(true)

    try {
      const data = await LoginUser(payload)
      if (data) router.replace('/')
      toast({
        title: 'Success',
        status: 'success',
        isClosable: true,
      })
    }
    catch (e: any) {
      toast({
        title: e.message,
        status: 'error',
        isClosable: true,
      })
    }
    finally {
      setLoading(false)  // Reset loading state regardless of success or failure
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

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
        <Flex justify={"center"} w={"full"} mt={5} mb={10}>
          <FormControl
            w={"30rem"}
            boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"}
            p={"62px 28px"}
            borderRadius={7}
            onKeyDown={handleKeyPress}
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
              <Text>Welcome! Please enter your details</Text>
            </Flex>

            <Flex mt={10} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Email </FormLabel>
                <Controller
                  control={control}
                  name={"email"}
                  render={({ field }) => (
                    <Input
                      variant={'flushed'} bg={'#F0F8FF'}
                      type="text"
                      p={2}
                      placeholder="example"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                  )}
                />
                <FormHelperText color={errors.email ? 'red' : ''}>
                  {errors.email ? errors.email.message : 'Please Enter Your Email'}
                </FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={8} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Controller
                    control={control}
                    name={"password"}
                    render={({ field }) => (
                      <Input
                        variant={'flushed'} bg={'#F0F8FF'}
                        pr="4.5rem"
                        placeholder="*****"
                        p={2}
                        type={show ? "text" : "password"}
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        onKeyDown={handleKeyPress}
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
                <FormHelperText color={errors.password ? 'red' : ''}>
                  {errors.password ? errors.password.message : 'Please Enter Your Password'}
                </FormHelperText>
              </Flex>
            </Flex>


            <Flex mt={10}>
              <Link href='/forgotpassword'>
              Forgot Password?
              </Link>
            </Flex>

            <Flex justify={"center"} mt={10}>
              <Button onClick={handleSubmit(onSubmit)} type="submit" isLoading={loading} colorScheme="blue">
              {loading? 'Signing In.....':  "Sign In"}
              </Button>
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

export default Login;
