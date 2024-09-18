"use client";
import React from "react";
import {
  Flex,
  Icon,
  Heading,
  Button,
  Text,
  Image,
  Box,
  Stack,
  Input,
  Link,
  Divider,
  Container,
  SimpleGrid,
  Circle,
  VStack,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import NextLink from "next/link";
import { TbDentalBroken } from "react-icons/tb";
import { FaDumbbell } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { motion, useScroll } from "framer-motion";
import ScrollProgressBar from "../components/ScrollProgressBar";

const About = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  // No need for eslint-disable comment as we're not using hooks here

  return (
    <>
      {/* ///////////////////////////////some other section  part 1/////////////////////////*/}
      <ScrollProgressBar/>
      <Container maxW={1200} as={motion.div} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <Flex p={30} gap={10}>
          <Box position={"relative"} display={{base:'none', md:'none', lg:'none'}}>
            <Box width={"600px"}>
              <Image borderRadius={10} src="healthprof.jpg" w={"full"} alt="health"></Image>
            </Box>

            <Box
              pos={"absolute"}
              bg={"#0881DE"}
              color={"white"}
              mt={"-200px"}
              ml={-30}
              p={7}
              borderRadius={10}
            >
              <Flex alignItems={"center"} p={2} gap={2}>
                <Icon color={"green"} as={FaCheck} />
                <Text>General lab</Text>
              </Flex>
              <Divider orientation="vertical" border={"1px solid white"} />

              <Flex alignItems={"center"} p={2} gap={2}>
                <Icon color={"green"} as={FaCheck} />
                <Text>General Medicine</Text>
              </Flex>
              <Divider orientation="vertical" border={"1px solid white"} />

              <Flex alignItems={"center"} p={2} gap={2}>
                <Icon color={"green"} as={FaCheck} />
                <Text>Freee Delivery</Text>
              </Flex>
              <Divider orientation="vertical" border={"1px solid white"} />

              <Flex alignItems={"center"} p={2} gap={2}>
                <Icon color={"green"} as={FaCheck} />
                <Text>Pharmacy Support</Text>
              </Flex>
            </Box>
          </Box>

          <Flex direction={"column"} >
            <Box>
              <Text
                mt={5}
                mb={5}
                fontWeight={500}
                fontFamily={'"Outfit", sans-serif'}
                fontSize={"3xl"}
              >
                Excellent Medical Professionals With Significant Experience
              </Text>
            </Box>
            <Text mt={5} fontSize={"ll"}>
              Tristique senectus et netus et malesuada fames ac turpis. Turpis
              massa tincidunt dui ut ornare lectus sit amet. Viverra orci
              sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet
              proin fermentum leo vel orci porta non pulvinar.
            </Text>

            <Text mt={5} fontSize={"ll"}>
              Tristique senectus et netus et malesuada fames ac turpis. Turpis
              massa tincidunt dui ut ornare lectus sit amet. Viverra orci
              sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet
              proin fermentum leo vel orci porta non pulvinar.
            </Text>

            <Link as={NextLink} href="/">
              <Button mt={5} width={"200px"} bgColor="#B8E0F7">
                SHOP NOW
              </Button>
            </Link>
          </Flex>
        </Flex>

        {/* /////////////////////////////// Core Values ///////////////////////////////////////*/}
        <Box py={16} bg="gray.50">
          <Container maxW="container.xl">
            <VStack spacing={8} mb={12}>
              <Heading
                fontFamily='"Outfit", sans-serif'
                color="#175873"
                fontSize={{ base: "2xl", md: "3xl" }}
                textAlign="center"
              >
                Our Core Values
              </Heading>
              <Text fontSize="lg" textAlign="center" maxW="2xl">
                Mauris porttitor condimentum libero, quis elementum nisi tempor ut.
                Nulla facilisi. Aenean ante nisl, cursus a pretium eget gravida eget sem. Nunc quis purus.
              </Text>
            </VStack >

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {[
                { icon: TbDentalBroken, title: "Medicines" },
                { icon: FaHandsHoldingChild, title: "Beauty Care" },
                { icon: MdOutlineHealthAndSafety, title: "Health Products" },
                { icon: FaDumbbell, title: "Cardio Care" },
              ].map((item, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  overflow="hidden"
                  transition="transform 0.3s"
                  _hover={{ transform: "translateY(-5px)" }}
                >
                  <VStack spacing={4} p={6}>
                    <Circle size="80px" bg="#378ba4" color="white">
                      <Icon as={item.icon} fontSize="3xl" />
                    </Circle>
                    <Heading
                      fontFamily='"Outfit", sans-serif'
                      fontSize="xl"
                      color="#175873"
                    >
                      {item.title}
                    </Heading>
                    <Text fontSize="md" textAlign="center">
                      Mauris porttitor condimentum libero, quis elementum nisi tempor ut. Nulla facilisi.
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* /////////////////////////////// Staff Reach Out/////////////////////////*/}
        <Flex mt={20} gap={10} pb={10}>
          <Flex direction={"column"}>
            <Heading
              color={"#175873"}
              fontFamily={'"Outfit", sans-serif'}
              fontSize={"3xl"}
            >
              Reach Out To Our Staff
            </Heading>
            <Text mt={5} fontSize={"l"}>
              Tristique senectus et netus et malesuada fames ac turpis. Turpis
              massa tincidunt dui ut ornare lectus sit amet. Viverra orci
              sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet
              proin fermentum leo vel orci porta non pulvinar.
            </Text>

            <Stack spacing={5} mt={5} border={"0px"}>
              <Input
                placeholder="Name*"
                h={"7.5vh"}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Email*"
                h={"7.5vh"}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Phone Number*"
                type="tel"
                h={"7.5vh"}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Comment*"
                h={"7.5vh"}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
            </Stack>

            <Button
              borderRadius={"none"}
              mt={5}
              w={"70px"}
              color={"white"}
              bg="#0394ED"
            >
              SEND
            </Button>
          </Flex>
          <Image display={{base:'none', md:'none', lg:'flex'}} src="reach.jpg" alt="reach" mr={12} height={"70vh"}></Image>
        </Flex>
      </Container>
    </>
  );
};

export default About;
