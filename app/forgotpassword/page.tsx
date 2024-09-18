"use client";
import {
  Text, Input, Box, FormControl, FormLabel, Flex, useToast, Button, PinInput, PinInputField,
  HStack, InputGroup, InputRightElement,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { SendOtp, VerifyOtp, ResetPassword } from "../api";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const toast = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter') {
      action();
    }
  };

  const onSubmitEmail = async () => {
    setLoading(true);
    try {
      const {success} = await SendOtp({email});

      if (success) {
        toast({
          title: 'Password reset email sent',
          status: 'success',
          isClosable: true,
        });
        setStep(2);
      }
    } catch (e: any) {
      toast({
        title: e.message || 'An error occurred',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmitOtp = async () => {
    setLoading(true);
    try {
      const {success} = await VerifyOtp({email, code: otp});

      if (success) {
        toast({
          title: 'OTP verified',
          status: 'success',
          isClosable: true,
        });
        setStep(3);
      }
    } catch (e: any) {
      toast({
        title: e.message || 'An error occurred',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmitNewPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const {success} = await ResetPassword({email, newPassword});

      if (success) {
        toast({
          title: 'Password reset successfully',
          status: 'success',
          isClosable: true,
        });
        router.push('/login');
      }
    } catch (e: any) {
      toast({
        title: e.message || 'An error occurred',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
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
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (step === 1) onSubmitEmail();
            else if (step === 2) onSubmitOtp();
            else onSubmitNewPassword();
          }}
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
              {step === 1 ? "Forgot Password" : step === 2 ? "Enter OTP" : "Set New Password"}
            </Text>
            <Text>
              {step === 1
                ? "Enter your email to reset your password"
                : step === 2
                ? "Enter the 6-digit OTP sent to your email"
                : "Enter your new password"}
            </Text>
          </Flex>

          {step === 1 ? (
            <>
              <Flex mt={10} direction={"column"} w={"full"} align={"center"}>
                <Flex direction={"column"} align={"start"} w={"full"}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    variant={'flushed'} bg={'#F0F8FF'}
                    type="email"
                    p={2}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, onSubmitEmail)}
                  />
                </Flex>
              </Flex>

              <Flex justify={"center"} mt={10}>
                <Button type="submit" isLoading={loading} colorScheme="blue">
                  {loading ? 'Sending...' : "Reset Password"}
                </Button>
              </Flex>
            </>
          ) : step === 2 ? (
            <>
              <HStack mt={10} align={"center"} gap={2} justify={"center"}>
                <PinInput otp size="lg" value={otp} onChange={setOtp} onComplete={onSubmitOtp}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>

              <Flex justify={"center"} mt={10}>
                <Button type="submit" colorScheme="blue" isLoading={loading}>
                  Verify OTP
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <Flex mt={10} direction={"column"} w={"full"} align={"center"}>
                <Flex direction={"column"} align={"start"} w={"full"}>
                  <FormLabel>New Password</FormLabel>
                  <InputGroup>
                    <Input
                      variant={'flushed'}
                      bg={'#F0F8FF'}
                      type={showPassword ? "text" : "password"}
                      p={2}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      onKeyDown={(e) => handleKeyPress(e, onSubmitNewPassword)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Flex direction={"column"} align={"start"} w={"full"} mt={4}>
                  <FormLabel>Confirm New Password</FormLabel>
                  <Input
                    variant={'flushed'}
                    bg={'#F0F8FF'}
                    type="password"
                    p={2}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, onSubmitNewPassword)}
                  />
                </Flex>
              </Flex>

              <Flex justify={"center"} mt={10}>
                <Button type="submit" isLoading={loading} colorScheme="blue">
                  {loading ? 'Resetting...' : "Reset Password"}
                </Button>
              </Flex>
            </>
          )}

          <Flex justify={"center"} mt={10}>
            <Text>Remember your password?</Text>
            <NextLink href="/login" passHref>
              <Text as="a" ml={1} color="#0881DE" _hover={{ textDecoration: "underline" }}>
                Login
              </Text>
            </NextLink>
          </Flex>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
