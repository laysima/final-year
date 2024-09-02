"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Stack,
  Button,
  AspectRatio,
  Icon,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const about = () => {
  return (
    <>
      <Box bg={"#F9F9F8"}>
        <Container maxW={"container.xl"}>
          <Flex gap={5} justifyContent={"center"} p={12}>
          <SimpleGrid columns={{base:1, md:2, xl:4}} gap={20}>
            <Box
              border={"1px solid #0881DE"}
              p={"50px"}
              borderRadius={"5px"}
              _hover={{
                border: "2px solid #0881DE",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Heading
                textColor={"#0881DE"}
                fontSize={"3xl"}
                fontFamily={'"Outfit", sans-serif'}
              >
                Address
              </Heading>
              <Text fontSize={"20px"}>P.O.BOX CT6924</Text>
              <Text fontSize={"20px"}>GREATER ACCRA</Text>
            </Box>

            <Box
              border={"1px solid #0881DE"}
              p={"50px"}
              borderRadius={"5px"}
              _hover={{
                border: "2px solid #0881DE",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Heading
                textColor={"#0881DE"}
                fontSize={"3xl"}
                fontFamily={'"Outfit", sans-serif'}
              >
                Call Us
              </Heading>
              <Text fontSize={"20px"}>+233 50 924 6726</Text>
              <Text fontSize={"20px"}>+233 59 811 9295</Text>
            </Box>

            <Box
              border={"1px solid #0881DE"}
              p={"50px"}
              borderRadius={"5px"}
              _hover={{
                border: "2px solid #0881DE",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Heading
                textColor={"#0881DE"}
                fontSize={"3xl"}
                fontFamily={'"Outfit", sans-serif'}
              >
                Mail Id
              </Heading>
              <Text fontSize={"20px"}>shakur@gmail.com</Text>
              <Text fontSize={"20px"}>example@gmail.com</Text>
            </Box>

            <Box
              border={"1px solid #0881DE"}
              p={"50px"}
              borderRadius={"5px"}
              _hover={{
                border: "2px solid #0881DE",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Heading
                textColor={"#0881DE"}
                fontSize={"3xl"}
                fontFamily={'"Outfit", sans-serif'}
              >
                {" "}
                Working Hours
              </Heading>
              <Text fontSize={"20px"}> Monday - Saturday : </Text>
              <Text fontSize={"20px"}>08:00 - 22:00</Text>
              <Text fontSize={"20px"}>Sunday - Holiday</Text>
            </Box>
            </SimpleGrid>
          </Flex>
        </Container>
      </Box>

      <Container maxW={1200}>
        <Flex mt={20}>
          <Flex p={"30px"} direction={"column"}>
            <Heading
              color={"#175873"}
              fontFamily={'"Outfit", sans-serif'}
              fontSize={"3xl"}
            >
              Get In Touch With Our Team
            </Heading>
            <Text mt={5} fontSize={"xl"}>
              Tristique senectus et netus et malesuada fames ac turpis. Turpis
              massa tincidunt dui ut ornare lectus sit amet. Viverra orci
              sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet
              proin fermentum leo vel orci porta non pulvinar.
            </Text>

            <Stack spacing={5} mt={5} border={"0px"}>
              <Input
                placeholder="Name*"
                size="md"
                p={8}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Email*"
                size="md"
                p={8}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Phone Number*"
                type="tel"
                size="md"
                p={8}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                h={"12vh"}
                placeholder="Comment*"
                size="md"
                p={8}
                bg={"#B8E0F7"}
                borderRadius={"none"}
                border={"none"}
              />
            </Stack>

            <Button
              borderRadius={"none"}
              mt={5}
              w={"70px"}
              bg="#0394ED"
              color={"white"}
            >
              SEND
            </Button>
          </Flex>
          <Box w={'100%'} border={0} display={{base:'none', md:'flex', lg:'flex'}}>


          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.431350241399!2d-0.19879932497302927!3d5.650567332691439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1724794987494!5m2!1sen!2sgh"  width="600" height="70dvh"></iframe>

          </Box>
        </Flex>
      </Container>

      {/* ////////////////////////////////////our Branches At section ///////////////////////////////// */}
      <Container maxW={1200}>
        <Box mt={15}>
          <Heading
          mt={20}
            fontFamily={'"Outfit", sans-serif'}
            color={"#175873"}
            fontSize={"3xl"}
            textAlign={"center"}
          >
            Our Branches At
          </Heading>
          <Text fontSize={"xl"} textAlign={"center"}>
            Yet to be commuincated
          </Text>

          <Flex gap={5} justifyContent={"center"} mt={3} p={12}>
          <SimpleGrid columns={{base:1, md:2, xl:2}} gap={20}>
            <Box
              border={"1px solid #0881DE"}
              p={"50px"}
              bg={"#D9EEFA"}
              borderRadius={"5px"}
              _hover={{
                border: "2px solid #0881DE",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Heading
                textColor={"teal"}
                fontSize={"2xl"}
                fontFamily={'"Outfit", sans-serif'}
              >
                Address
              </Heading>

              <Flex alignItems={"center"} gap={2}>
                <Icon as={FaLocationDot} />
                <Text fontSize={"20px"}>
                  {" "}
                  No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                </Text>
              </Flex>

              <Flex alignItems={"center"} gap={2}>
                <Icon as={FaPhone} />
                <Text fontSize={"20px"}>000 - 123 - 45678</Text>
              </Flex>

              <Flex alignItems={"center"} gap={2}>
                <Icon as={MdMail} />
                <Text fontSize={"20px"}>info@example.com</Text>
              </Flex>
            </Box>

            <Box
              border={"1px solid teal"}
              p={"50px"}
              bg={"#D9EEFA"}
              borderRadius={"5px"}
              _hover={{
                border: "2px solid #29A0B1",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Heading
                textColor={"teal"}
                fontSize={"2xl"}
                fontFamily={'"Outfit", sans-serif'}
              >
                Call Us
              </Heading>
              <Text fontSize={"20px"}>+233 50 924 6726</Text>
              <Text fontSize={"20px"}>+233 59 811 9295</Text>
            </Box>
            </SimpleGrid>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default about;
