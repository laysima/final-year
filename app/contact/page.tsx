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
  VStack,
} from "@chakra-ui/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaClock } from "react-icons/fa"; // Added import for FaClock

const about = () => {
  return (
    <>
      <Box bg={"#F9F9F8"}>
        <Container maxW={"container.xl"}>
          <Flex gap={5} justifyContent={"center"} p={12}>
          <SimpleGrid columns={{base:1, md:2, xl:4}} spacing={8} py={12}>
            {[
              { title: "Address", icon: FaLocationDot, content: ["P.O.BOX CT6924", "GREATER ACCRA"] },
              { title: "Call Us", icon: FaPhone, content: ["+233 50 924 6726"] },
              { title: "Mail Id", icon: MdMail, content: ["opokoi89@gmail.com"] },
              { title: "Working Hours", icon: FaClock, content: ["Monday - Saturday:", "08:00 - 22:00", "Sunday - Holiday"] },
            ].map((item, index) => (
              <Box
                key={index}
                bg="white"
                boxShadow="md"
                borderRadius="lg"
                p={6}
                transition="all 0.3s"
                _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
              >
                <Icon as={item.icon} boxSize={8} color="blue.500" mb={4} />
                <Text fontWeight={400} fontSize={'30px'} size="lg" mb={4} color="blue.700">
                  {item.title}
                </Text>
                {item.content.map((line, i) => (
                  <Text key={i} fontSize="md">
                    {line}
                  </Text>
                ))}
              </Box>
            ))}
          </SimpleGrid>
          </Flex>
        </Container>
      </Box>

      <Container maxW={1200}>
        <Flex mt={20}>
          <Flex p={"30px"} direction={"column"}>
            <Text
              fontWeight={500}
              color={"#175873"}
              fontFamily={'"Outfit", sans-serif'}
              fontSize={"30px"}
            >
              Get In Touch With Our Team
            </Text>
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
                variant='filled'
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Email*"
                size="md"
                p={8}
                variant='filled'
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                placeholder="Phone Number*"
                type="tel"
                size="md"
                p={8}
                variant='filled'
                borderRadius={"none"}
                border={"none"}
              />
              <Input
                h={"12vh"}
                placeholder="Comment*"
                size="md"
                p={8}
                variant='filled'
                borderRadius={"none"}
                border={"none"}
              />
            </Stack>

            <Button
              borderRadius={"none"}
              mt={5}
              colorScheme="blackAlpha"
              color={"white"}
            >
              SEND
            </Button>
          </Flex>
          <Box w={'100%'} border={0} display={{base:'none', md:'flex', lg:'flex'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.431350241399!2d-0.19879932497302927!3d5.650567332691439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1724794987494!5m2!1sen!2sgh"  width="600" ></iframe>
          </Box>
        </Flex>
      </Container>

      {/* ////////////////////////////////////our Branches At section ///////////////////////////////// */}
      <Container maxW={1200} py={20}>
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading
              fontFamily='"Outfit", sans-serif'
              color="#175873"
              fontSize="4xl"
              mb={4}
            >
              Our Locations
            </Heading>
            <Text fontSize="xl" maxW="2xl" mx="auto">
              Find us at these convenient locations to serve you better.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {[
              {
                title: "Main Branch",
                address: "58 A, East Madison Street, Baltimore, MD, USA 4508",
                phone: "000 - 123 - 45678",
                email: "info@example.com",
              },
              {
                title: "Downtown Office",
                address: "123 City Center, New York, NY, USA 10001",
                phone: "000 - 987 - 65432",
                email: "downtown@example.com",
              },
              {
                title: "West Coast Branch",
                address: "456 Ocean Avenue, San Francisco, CA, USA 94122",
                phone: "000 - 789 - 01234",
                email: "westcoast@example.com",
              },
            ].map((branch, index) => (
              <Box
                key={index}
                bg={'#EAEFF2'}
                p={6}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
              >
                <Heading
                  fontSize="2xl"
                  fontFamily='"Outfit", sans-serif'
                  mb={4}
                >
                  {branch.title}
                </Heading>
                <VStack align="start" spacing={3}>
                  <Flex align="center">
                    <Icon as={FaLocationDot}  mr={2} />
                    <Text fontSize="md">{branch.address}</Text>
                  </Flex>
                  <Flex align="center">
                    <Icon as={FaPhone}  mr={2} />
                    <Text fontSize="md">{branch.phone}</Text>
                  </Flex>
                  <Flex align="center">
                    <Icon as={MdMail}  mr={2} />
                    <Text fontSize="md">{branch.email}</Text>
                  </Flex>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Box textAlign="center">
            <Heading
              fontFamily='"Outfit", sans-serif'
              color="#175873"
              fontSize="3xl"
              mb={4}
            >
              Need Assistance?
            </Heading>
            <Text fontSize="xl" mb={6}>
              Our customer support team is available 24/7 to help you.
            </Text>
            <Button
              colorScheme="blue"
              size="lg"
              leftIcon={<FaPhone />}
              onClick={() => window.location.href = 'tel:+233509246726'}
            >
              Call Us Now
            </Button>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default about;
