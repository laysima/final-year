"use client";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import NextLink from "next/link";
import ScrollAnimationBox from '@/app/components/ScrollAnimationBox'
import { CiChat1 } from "react-icons/ci";

import {
  Box,
  Button,
  Flex,
  Text,
  SimpleGrid,
  GridItem,
  Divider,
  Image,
  Heading,
  Link,
  Icon,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { PiHandshakeLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPersonAdd } from "react-icons/go";
import { IoTrophyOutline } from "react-icons/io5";
import { FaCheckCircle, FaDumbbell, FaArrowRight } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TbDentalBroken } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import "./globals.css";

/////////////////////// hoooks //////////////////////
import { Suspense } from "react";
import { BiX } from "react-icons/bi";
import { relative } from "path";
import { getCookie } from 'cookies-next';




export default function Home({ params }: any) {
  const [openedItemId, setOpenedItemId] = useState(null);
  
  const ScrollAnimationComponent = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5, // Customize it based on when you want the animation to start
    })};

  const toggleItem = (itemId: any) => {
    if (openedItemId === itemId) {
      // If the clicked item is already open, close it
      setOpenedItemId(null);
    } else {
      // Open the clicked item and close others
      setOpenedItemId(itemId);
    }
  };

  const faqItems = [
    {
      id: 1,
      question: "What kind of services do you offer?",
      answer:
        "Track orders and deliveries: Provide real-time updates on the status of prescriptions and medication deliveries, keeping patients informed and reducing anxiety.",
    },
    {
      id: 2,
      question: "Is your clinic open 24hrs?",
      answer:
        "Yes, our clinic operates 24/7 to ensure you receive the medical care you need at any time.",
    },
    {
      id: 3,
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment through our website or by calling our customer service hotline.",
    },
    {
      id: 4,
      question: "Do you offer online consultations?",
      answer:
        "Yes, we provide online consultations with our medical specialists to ensure your health concerns are addressed promptly.",
    },
  ];

  return (
    <>
      <Box>
        <Box bg={"#F9F9F8"} >
          <Flex
            bgImage={"url('./hexagon.jpg')"}
            width={"full"}
            bgSize={"cover"}
            objectFit={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Box>
              <Flex
                p={30}
                alignItems="center"
                px={"100px"}
                position="relative"
                zIndex="1"
              >
                <Flex>
                  <Box>
                    <Heading as="div" className="typewriter-text" maxW="800px"
                      color=""
                      fontFamily='"Outfit", sans-serif'
                      fontSize="5xl"
                    >
                      WELCOME TO PHARMANINC: <br />
                    </Heading>
                    <Text maxW={600} mt={10} color={""} mb={10} fontSize="xl">
                      Your Compassionate Ally in Navigating the Path to Optimal
                      Health and Wellness At PharmaInc, we understand that
                      managing health is a personal journey that requires trust,
                      support, and reliable resources.
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              {/* Linking Buttons */}
              <Flex
                gap={5}
                p={30}
                px={"100px"}
                mb={10}
                position="relative"
                zIndex="1"
              >
                <Link as={NextLink} href="/shop">
                  <Button bg="#E3E7F1" borderRadius={0}>
                    SHOP NOW
                  </Button>
                </Link>

                <Button bg="#E3E7F1" borderRadius={0}>
                  <Link as={NextLink} href="/">
                    CHAT WITH A BOT
                  </Link>
                </Button>
              </Flex>
            </Box>

            <Box width={"700px"} height={"auto"} mr={20}>
              <Image
                width={"full"}
                objectFit={"cover"}
                src="3danim.png"
                bgRepeat={"no-repeat"}
              ></Image>
            </Box>
          </Flex>

          {/* /////////////////////////////////////// Offers  Grids /////////////////////////////////*/}
          <Box mt={10} mb={"100px"}>

            
            <SimpleGrid
              p={30}
              px={"100px"}
              spacing={"20px"}
              minChildWidth={{ base: "50%", md: "300px" }}
              columns={{ base: 6, md: 2, xl: 1 }}
              h="700px"
              gap={3}
            >
              {/* grid 1 */}

              
              <GridItem
                p={2}
                rowSpan={2}
                bgImage="koflet_coughMixture.png"
                color={"white"}
                bgColor={"rgba(0, 0, 0, 0.9)"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={40}
              >
                <Heading
                  alignItems={"center"}
                  p={5}
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize="2xl"
                >
                  SPECIAL OFFERS ON
                </Heading>
                <Text mr={3} textAlign={"right"} fontSize={"xl"}>
                  Cough Syrup
                </Text>
                <Flex justifyContent="flex-end">
                  <Link as={NextLink} href="/shop" w={"40%"}>
                    <Button
                      textDecorationLine={"none"}
                      mr={3}
                      color="#378ba4"
                      borderRadius={"20px"}
                      mt={5}
                    >
                      SHOP NOW
                    </Button>
                  </Link>
                </Flex>
              </GridItem>
            


              {/* grid 2 */}
              <GridItem
                p={2}
                rowSpan={2}
                bgImage="vitamins.png"
                color={"white"}
                bgColor={"rgba(0, 0, 0, 0.9)"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={40}
              >
                <Heading
                  mr={3}
                  mt={5}
                  alignItems={"right"}
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize="2xl"
                >
                  MULTIVITAMIN
                </Heading>
                <Heading
                  mr={3}
                  alignItems={"right"}
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize="2xl"
                >
                  TABLETS
                </Heading>
                <Text mr={3} textAlign={"right"} fontSize={"xl"} mt={10}>
                  Get 20% off and Stabilize
                </Text>
                <Flex justifyContent="flex-end">
                  <Link as={NextLink} href="/shop" w={"40%"}>
                    <Button
                      textDecorationLine={"none"}
                      mr={2}
                      colorScheme="purple"
                      borderRadius={"20px"}
                      mt={7}
                    >
                      SHOP NOW
                    </Button>
                  </Link>
                </Flex>
              </GridItem>

              {/* grid 3 */}
              <GridItem
                p={2}
                colSpan={{ base: 2 }}
                bgImage="paracetamol2.jpg"
                color={"white"}
                bgColor={"rgba(0, 0, 0, 0.5)"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={40}
              >
                <Heading
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize="2xl"
                  mt={5}
                  mr={3}
                  textAlign={"right"}
                >
                  30% DISCOUNT ON
                </Heading>
                <Text mr={2} textAlign={"right"} fontSize={"xl"}>
                  Paracetamol
                </Text>
                <Flex justifyContent="flex-end">
                  <Link
                    as={NextLink}
                    href="/shop"
                    w={"40%"}
                    textAlign={"right"}
                  >
                    <Button
                      mr={2}
                      colorScheme="blackAlpha"
                      borderRadius={"20px"}
                      mt={5}
                    >
                      SHOP NOW
                    </Button>
                  </Link>
                </Flex>
              </GridItem>

              {/* grid 4 */}
              <GridItem
                p={2}
                rowSpan={1}
                bgImage="sth.jpg"
                color={"white"}
                bgColor={"green"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={40}
              >
                <Heading
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize="2xl"
                  mt={5}
                  mr={3}
                  textAlign={"right"}
                >
                  30% DISCOUNT ON
                </Heading>
                <Text mr={2} textAlign={"right"} fontSize={"xl"}>
                  Paracetamol
                </Text>
                <Flex justifyContent="flex-end">
                  <Link as={NextLink} href="/shop" w={"40%"}>
                    <Button mr={2} bg={"#05abc4"} borderRadius={"20px"} mt={5}>
                      SHOP NOW
                    </Button>
                  </Link>
                </Flex>
              </GridItem>

              {/* grid 5 */}
              <GridItem
                p={2}
                colSpan={1}
                bgImage="capsules.jpg"
                color={"white"}
                bgColor={"red"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={40}
              >
                <Text
                  mr={3}
                  mt={12}
                  textAlign={"right"}
                  fontSize={"xl"}
                  fontWeight={"900"}
                >
                  Cough Syrup
                </Text>
                <Heading
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize="2xl"
                  mt={5}
                  mr={3}
                  textAlign={"right"}
                >
                  30% DISCOUNT ON
                </Heading>
                <Flex justifyContent="flex-end">
                  <Link as={NextLink} href="/" w={"40%"}>
                    <Button
                      mr={2}
                      colorScheme="linkedin"
                      borderRadius={"20px"}
                      mt={15}
                    >
                      SHOP NOW
                    </Button>
                  </Link>
                </Flex>
              </GridItem>
            </SimpleGrid>
  
          </Box>
        </Box>

        {/*////////////////////////////////// Categories ////////////////////////////////// */}

        {/* <Box p={{ base: '20px', md: '30px' }} mt={{ base: 15, md: 15 }} px={'100px'}>
      <Text fontWeight={500} textAlign={'center'} fontFamily={'"Outfit", sans-serif'} mt={30} fontSize={'3xl'} color={'#0881DE'}>
       Categories
      </Text>

      <Flex direction={{ base: 'column', md: 'row' }} p={4} gap={{ base: 5, md: 5 }} mt={{ base: 5, md: 10 }} justifyContent={'space-evenly'} textColor={'#0C1446'} _hover={{ cursor: 'pointer' }} wrap="wrap" alignItems="center">
        
      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='funbact.rem.png' width="150px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >Ointment</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='gummies.png' width="150px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'}  >Vitamins</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='panadol.png' width="150px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >Pain Capsules</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='bp.png' width="150px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >BP Monitors</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='sleeve.png' width="150px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >Sleeve</Heading>
      </Flex>
      </Box>

      </Flex>

    </Box> */}

        {/*////////////////////////////////// Categories 2.000000 ////////////////////////////////// */}
        <Box position={"relative"}>
          <Box>
            <Image
              objectFit={"cover"}
              w={"full"}
              h={"50vh"}
              src="hbeds.jpg"
            ></Image>
          </Box>

          <Box
            pos={"absolute"}
            color={"white"}
            top={"10%"}
            left={"50%"}
            w={"500px"}
          >
            <Text color={"#B8E0F7"}>THE BEST PHARMAY STORE</Text>
            <Text fontSize={"4xl"} fontWeight={500} letterSpacing={"0px"}>
              We Have The Most Complete Medicine And Vitamins
            </Text>

            <Text mt={5} color={"#B8E0F7"}>
              Pharmacy Web App is a life-saver. I can now manage my medications
              from the comfort of my home.{" "}
            </Text>

            <Link as={NextLink} href="/shop">
              <Button mt={5} bg="#E3E7F1">
                SHOP NOW
              </Button>
            </Link>
          </Box>

          <Box
            ml={20}
            borderRadius={20}
            bg={"white"}
            mt={-10}
            p={5}
            boxShadow={"1px 1px 2px grey, 0 0 25px grey"}
            pos={"absolute"}
            h={"15vh"}
            w={"90%"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Flex direction={"column"}>
                <Text color={"#0881DE"} fontWeight={500} fontSize={"4xl"}>
                  123+
                </Text>

                <Text>Professional Staff</Text>
              </Flex>
              <Divider
                orientation="vertical"
                h={"8vh"}
                border={"0.5px solid grey"}
              />

              <Flex direction={"column"} alignItems={"center"}>
                <Text color={"#0881DE"} fontWeight={500} fontSize={"4xl"}>
                  587+
                </Text>

                <Text>Kind Of Medicine</Text>
              </Flex>
              <Divider
                orientation="vertical"
                h={"8vh"}
                border={"0.5px solid grey"}
              />

              <Flex direction={"column"} alignItems={"center"}>
                <Text color={"#0881DE"} fontWeight={500} fontSize={"4xl"}>
                  40+
                </Text>

                <Text>Doctor Specialist</Text>
              </Flex>
              <Divider
                orientation="vertical"
                h={"8vh"}
                border={"0.5px solid grey"}
              />

              <Flex direction={"column"} alignItems={"center"}>
                <Text color={"#0881DE"} fontWeight={500} fontSize={"4xl"}>
                  12+
                </Text>

                <Text>Active Members</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>

        {/* ///////////////////////////////some other section  part 1/////////////////////////*/}
        <Flex mt={"200px"} mb={"100px"} px={"100px"}>
          <Flex direction={"column"} maxW={"50%"}>
            <Box borderRadius={"full"} bg={"#0881DE"}>
              <Text
                color={"white"}
                ml={5}
                mt={5}
                mb={5}
                fontWeight={500}
                fontFamily={'"Outfit", sans-serif'}
                fontSize={"3xl"}
              >
                Excellent Medical Professionals With Significant Experience
              </Text>
            </Box>
            <Text mt={5} fontSize={"xl"}>
              Tristique senectus et netus et malesuada fames ac turpis. Turpis
              massa tincidunt dui ut ornare lectus sit amet. Viverra orci
              sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet
              proin fermentum leo vel orci porta non pulvinar.
            </Text>
            <Link as={NextLink} href="/">
              <Button
                mt={5}
                width={"200px"}
                bgColor="#B8E0F7"
                borderRadius={"0px"}
              >
                SHOP NOW
              </Button>
            </Link>

            <Flex mt={10} gap={"50px"}>
              <Flex alignItems={"center"} gap={2}>
                <PiHandshakeLight fontSize={"45px"} />
                <Flex direction={"column"}>
                  <Heading
                    color={"#175873"}
                    fontSize={"2xl"}
                    fontFamily={'"Outfit", sans-serif'}
                  >
                    200k +
                  </Heading>
                  <Text color={"ash"}>Happy clients</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={2}>
                <IoMdHeartEmpty fontSize={"45px"} />
                <Flex direction={"column"}>
                  <Heading
                    color={"#175873"}
                    fontSize={"2xl"}
                    fontFamily={'"Outfit", sans-serif'}
                  >
                    50k +
                  </Heading>
                  <Text color={"ash"}>Orders delivered</Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex mt={10} gap={"60px"}>
              <Flex alignItems={"center"} gap={2}>
                <GoPersonAdd fontSize={"45px"} />
                <Flex direction={"column"}>
                  <Heading
                    color={"#175873"}
                    fontSize={"2xl"}
                    fontFamily={'"Outfit", sans-serif'}
                  >
                    80 +
                  </Heading>
                  <Text color={"ash"}>Area Served</Text>
                </Flex>
              </Flex>

              <Flex alignItems={"center"} gap={2}>
                <IoTrophyOutline fontSize={"45px"} />
                <Flex direction={"column"}>
                  <Heading
                    color={"#175873"}
                    fontSize={"2xl"}
                    fontFamily={'"Outfit", sans-serif'}
                  >
                    5L
                  </Heading>
                  <Text color={"ash"}>Medicines</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Box position="relative" p={5} borderRadius={"5px"}>
            <Box width={"750px"} height={"auto"}>
              <Image
                borderRadius={"full"}
                width={"full"}
                objectFit={"cover"}
                src="m3.jpg"
                bgRepeat={"no-repeat"}
              ></Image>
            </Box>

            <Box
              position="absolute"
              top="-60px"
              right="-10"
              bg="white"
              color="black"
              borderRadius="full"
              boxSize={"300px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
            >
              <Flex
                direction={"column"}
                color={""}
                textAlign={"center"}
                fontWeight={500}
              >
                <Text color={"#0881DE"} fontSize={"5xl"}>
                  25 +
                </Text>
                <Text fontSize={"3xl"}>Years of Experience</Text>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* //////////////////////////////// hover list section ///////////////////////////////////////*/}
        <Box
          p={{ base: 30, md: "30px" }}
          mt={{ base: 10, md: 15 }}
          px={"100px"}
        >
          <Flex
            justifyContent={"center"}
            gap={5}
            textColor={"#0C1446"}
            _hover={{ cursor: "pointer" }}
          >
            {/* float 1 */}
            <Flex
              position="relative"
              height={"10vh"}
              _before={{
                content: '""',
                position: "absolute",
                right: 0,
                height: "100%",
                width: "0%",
                bgColor: "#ECECEB",
                transition: "width 0.5s ease-in-out",
                zIndex: 0,
              }}
              _hover={{ border: "0.5px solid", _before: { width: "100%" } }}
            >
              <Flex p={2} alignItems={"center"}>
                <Flex
                  position={"relative"}
                  borderRadius={"50%"}
                  mr={3}
                  p={3}
                  alignItems={"center"}
                  fontSize={"50px"}
                  bg={"#05abc4"}
                  color={"white"}
                >
                  <TbDentalBroken />
                </Flex>
                <Text fontWeight={500} fontSize={"2xl"} zIndex={1}>
                  Dental Wellness
                </Text>
              </Flex>
              <Divider
                orientation="vertical"
                borderColor={"black"}
                height={"10vh"}
              />
            </Flex>

            {/* Float 2 */}
            <Flex
              position="relative"
              height={"10vh"}
              _before={{
                content: '""',
                position: "absolute",
                right: 0,
                height: "100%",
                width: "0%",
                bgColor: " #ECECEB",
                transition: "width 0.5s ease-in-out",
                zIndex: 0,
              }}
              _hover={{ border: "0.5px solid", _before: { width: "100%" } }}
            >
              <Flex p={2} alignItems={"center"}>
                <Flex
                  position={"relative"}
                  borderRadius={"50%"}
                  mr={3}
                  p={3}
                  alignItems={"center"}
                  fontSize={"50px"}
                  bg={"#05abc4"}
                  color={"white"}
                >
                  <FaHandsHoldingChild />
                </Flex>
                <Text fontWeight={500} fontSize={"2xl"} zIndex="1">
                  Beauty Care
                </Text>
              </Flex>
              <Divider
                orientation="vertical"
                borderColor={"black"}
                height={"10vh"}
              />
            </Flex>

            {/* float 3 */}
            <Flex
              position="relative"
              height={"10vh"}
              _before={{
                content: '""',
                position: "absolute",
                right: 0,
                height: "100%",
                width: "0%",
                bgColor: " #ECECEB",
                transition: "width 0.5s ease-in-out",
                zIndex: 0,
              }}
              _hover={{ border: "0.5px solid", _before: { width: "100%" } }}
            >
              <Flex p={2} alignItems={"center"}>
                <Flex
                  position={"relative"}
                  borderRadius={"50%"}
                  mr={3}
                  p={3}
                  alignItems={"center"}
                  fontSize={"50px"}
                  bg={"#05abc4"}
                  color={"white"}
                >
                  <MdOutlineHealthAndSafety />
                </Flex>
                <Text fontWeight={500} fontSize={"2xl"} zIndex="1">
                  Health Products
                </Text>
              </Flex>
              <Divider
                orientation="vertical"
                borderColor={"black"}
                height={"10vh"}
              />
            </Flex>

            {/* float 4 */}
            <Flex
              position="relative"
              height={"10vh"}
              _before={{
                content: '""',
                position: "absolute",
                right: 0,
                height: "100%",
                width: "0%",
                bgColor: " #ECECEB",
                transition: "width 0.5s ease-in-out",
                zIndex: 0,
              }}
              _hover={{ border: "0.5px solid", _before: { width: "100%" } }}
            >
              <Flex p={2} zIndex="1" alignItems={"center"}>
                <Flex
                  position={"relative"}
                  borderRadius={"50%"}
                  mr={3}
                  p={3}
                  alignItems={"center"}
                  fontSize={"50px"}
                  bg={"#05abc4"}
                  color={"white"}
                >
                  <FaDumbbell />
                </Flex>
                <Text fontWeight={500} fontSize={"2xl"}>
                  Wellness Products
                </Text>
              </Flex>
              <Divider
                orientation="vertical"
                borderColor={"black"}
                height={"10vh"}
              />
            </Flex>
          </Flex>
        </Box>

        {/* ///////////////////// some other section part part 2 ///////////////////////// */}
        <Flex p={"20px"} px={"100px"} gap={5} alignItems={"center"}>
          <Flex mt={20}>
            <Box width={"500px"} height={"auto"}>
              <Image
                width={"full"}
                objectFit={"cover"}
                src="questions.jpg"
                bgRepeat={"no-repeat"}
              ></Image>
            </Box>
          </Flex>

          <Flex direction={"column"} mt={20} width={"90%"} gap={10}>
            {faqItems.map((item) => (
              <Box key={item.id}>
                <Flex
                  bg={"#F9F9F8"}
                  p={"20px"}
                  fontSize={"xl"}
                  justifyContent={"space-between"}
                  onClick={() => toggleItem(item.id)}
                  cursor="pointer"
                >
                  <Box>
                    <Text>{item.question}</Text>
                  </Box>
                  <FaCheckCircle />
                </Flex>
                {openedItemId === item.id && (
                  <Box
                    p={"30px"}
                    bg={"#F9F9F8"}
                    color={"#0394ED"}
                    fontSize={"xl"}
                  >
                    {item.answer}
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
        </Flex>

        {/* section for newsletter and newsproduction section, based on current information or news that thr websites has gone through  */}
        <ScrollAnimationBox>
        <Text
          textAlign={"center"}
          fontFamily={'"Outfit", sans-serif'}
          color={"#0881DE"}
          fontWeight={500}
          mt={10}
        >
          Testimonials{" "}
        </Text>
       </ScrollAnimationBox>

       <ScrollAnimationBox>
        <Text
          textAlign={"center"}
          fontFamily={'"Outfit", sans-serif'}
          fontSize={"3xl"}
          fontWeight={500}
        >
          Member Feedback And Reviews
        </Text>
        </ScrollAnimationBox>

        <Flex
          p={30}
          px={"100px"}
          gap={4}
          mb={5}
          justifyContent={"center"}
          id="section 2"
        >
          
          <ScrollAnimationBox>
          <Box
            borderRadius={10}
            p={"30px"}
            bg={"#F9F9F8"}
            alignItems={"center"}
          >
            <Flex direction={"column"} w={"350px"} alignItems={"center"}>
              <Box border={"2px solid white"} p={0.5} borderRadius={100}>
                <Image
                  boxSize={50}
                  borderRadius={"100%"}
                  align={"center"}
                  objectFit={"cover"}
                  src="w1.jpg"
                ></Image>
              </Box>
              <Text textAlign={"center"}>
                Pharmacy Web App is a game-changer in the pharmacy industry.
                It's easy to use, fast, and reliable. I can now order my
                medications with just a few clicks, and service is also
                top-notch. I highly recommend Pharmacy Web App to anyone who
                wants to save time and money on their medications.
              </Text>

              <Text
                mt={5}
                fontStyle={"italic"}
                fontWeight={500}
                textAlign={"center"}
              >
                Shakur
              </Text>

              <Text
                fontStyle={"italic"}
                color={"#0881DE"}
                fontWeight={500}
                textAlign={"center"}
              >
                Ghana
              </Text>
            </Flex>
          </Box>
          </ScrollAnimationBox>

          <ScrollAnimationBox>
          <Box
            borderRadius={10}
            p={"30px"}
            bg={"#F9F9F8"}
            alignItems={"center"}
          >
            <Flex direction={"column"} w={"350px"} alignItems={"center"}>
              <Box border={"2px solid white"} p={0.5} borderRadius={100}>
                <Image
                  boxSize={50}
                  borderRadius={"100%"}
                  align={"center"}
                  objectFit={"cover"}
                  src="m2.jpg"
                ></Image>
              </Box>
              <Text textAlign={"center"}>
                Pharmacy Web App is a game-changer in the pharmacy industry.
                It's easy to use, fast, and reliable. I can now order my
                medications with just a few clicks, and service is also
                top-notch. I highly recommend Pharmacy Web App to anyone who
                wants to save time and money on their medications.
              </Text>

              <Text
                mt={5}
                fontStyle={"italic"}
                fontWeight={500}
                textAlign={"center"}
              >
                Calvin
              </Text>

              <Text
                fontStyle={"italic"}
                color={"#0881DE"}
                fontWeight={500}
                textAlign={"center"}
              >
                United Kingdom
              </Text>
            </Flex>
          </Box>
          </ScrollAnimationBox>

          
          <ScrollAnimationBox>
          <Box
            borderRadius={10}
            p={"30px"}
            bg={"#F9F9F8"}
            alignItems={"center"}
          >
            <Flex direction={"column"} w={"350px"} alignItems={"center"}>
              <Box border={"2px solid white"} p={0.5} borderRadius={100}>
                <Image
                  boxSize={50}
                  borderRadius={"100%"}
                  align={"center"}
                  objectFit={"cover"}
                  src="m1.jpg"
                ></Image>
              </Box>
              <Text textAlign={"center"}>
                Pharmacy Web App is a game-changer in the pharmacy industry.
                It's easy to use, fast, and reliable. I can now order my
                medications with just a few clicks, and service is also
                top-notch. I highly recommend Pharmacy Web App to anyone who
                wants to save time and money on their medications.
              </Text>

              <Text
                mt={5}
                fontStyle={"italic"}
                fontWeight={500}
                textAlign={"center"}
              >
                Jessie
              </Text>

              <Text
                fontStyle={"italic"}
                color={"#0881DE"}
                fontWeight={500}
                textAlign={"center"}
              >
                United States Of America
              </Text>
            </Flex>
          </Box>
          </ScrollAnimationBox>
        </Flex>
        


        <Box p={5}>
      <ScrollAnimationBox>
        <Text fontSize="2xl" p={5} bg="blue.500" color="white" textAlign="center">
          This content slides in from the bottom!
        </Text>
      </ScrollAnimationBox>
      <ScrollAnimationBox>
        <Text fontSize="2xl" p={5} bg="green.500" color="white" textAlign="center">
          More sliding content!
        </Text>
      </ScrollAnimationBox>
    </Box>


      </Box>

    </>
  );
}
