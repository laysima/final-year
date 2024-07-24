"use client";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import ScrollAnimationBox from "@/app/components/ScrollAnimationBox";
import PageWrap from "./components/PageWrap";
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
  Grid,
} from "@chakra-ui/react";
import { PiHandshakeLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPersonAdd } from "react-icons/go";
import { IoTrophyOutline } from "react-icons/io5";
import { FaCheckCircle, FaDumbbell, FaRegPlusSquare } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TbDentalBroken, TbActivityHeartbeat } from "react-icons/tb";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import "./globals.css";

/////////////////////// hoooks //////////////////////
import { Suspense } from "react";
import { BiX } from "react-icons/bi";
import { relative } from "path";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import login from "./login/page";
import { motion, useScroll } from "framer-motion";

export default function Home({ params }: any) {
  const [openedItemId, setOpenedItemId] = useState(null);
  // const router = useRouter()

  // const session = getCookie('session')

  // useEffect(() =>{
  //   if (!session)
  //     {router.replace('/login')}
  // }, [])


  const session = getCookie("session");
  const nSession = session && JSON.parse(session);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const images = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const ScrollAnimationComponent = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5, // Customize it based on when you want the animation to start
    });
  };

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
    <PageWrap>
      <Box>
        <Container maxW={1200} pb={40}>
          <Flex gap={6}>
            <Box mt={"90px"}>
              <Flex alignItems="center">
                <Flex>
                  <Box>
                    <Heading
                      as="div"
                      // className="typewriter-text"
                      fontFamily='"Outfit", sans-serif'
                      fontSize="4xl"
                    >
                      GREETINGS, {nSession ? nSession?.username : "Login"}👋  <br />
                    </Heading>
                    <Text maxW={400} mt={10} color={""} mb={10} fontSize="lg">
                      Your Compassionate Ally in Navigating the Path to Optimal
                      Health and Wellness is here.
                    </Text>
                  </Box>
                </Flex>
              </Flex>

              {/* Linking Buttons */}
              <Flex gap={5} mb={10} position="relative" zIndex="1">
                <Link as={NextLink} href="/shop">
                  <Button borderRadius={5} colorScheme="blue">
                    Shop Now
                  </Button>
                </Link>

                <Link as={NextLink} href="/">
                  <Button colorScheme="blue" variant="outline" borderRadius={5}>
                    Chat With A Bot
                  </Button>
                </Link>
              </Flex>
            </Box>

            <Flex
              direction={"column"}
              pl={"20px"}
              pt={"100px"}
              gap={10}
              display={{ base: "none", lg: "flex" }}
            >
              <Icon
                color={"#D9D9D9"}
                fontSize={"50px"}
                as={LiaHeartbeatSolid}
              />
              <Icon
                color={"#D9D9D9"}
                fontSize={"50px"}
                as={TbActivityHeartbeat}
                ml={"20px"}
              />
              <Icon
                color={"#D9D9D9"}
                transform="rotate(10deg)"
                fontSize={"50px"}
                as={FaRegPlusSquare}
              />
            </Flex>

            <Flex
              direction={"column"}
              gap={2}
              pt={"60px"}
              pl={"200px"}
              display={{ base: "none", lg: "flex" }}
            >
              <Flex gap={3} justify={"flex-end"}>
                <Flex
                  h={150}
                  w={150}
                  borderRadius={10}
                  bgImage={"sick1.jpg"}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Flex>
                <Flex
                  h={150}
                  w={150}
                  borderRadius={10}
                  bgImage={"sick5.jpg"}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Flex>
              </Flex>

              <Flex gap={3}>
                <Flex
                  h={150}
                  w={150}
                  borderRadius={10}
                  bgImage={"sick3.jpg"}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Flex>
                <Flex
                  h={150}
                  w={150}
                  borderRadius={10}
                  bgImage={"sick4.jpg"}
                  bgSize={"cover"}
                  bgPos={"center"}
                ></Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>

        {/*////////////////////////////////// Categories 2.000000 ////////////////////////////////// */}
        <Box pb={40}>
          <Box
            p={20}
            bgImage={"hbeds.jpg"}
            objectFit={"cover"}
            bgSize={"cover"}
          >
            <Flex
              direction={"column"}
              color={"white"}
              justify={"right"}
              align={"right"}
              textAlign={"right"}
              p={10}
              pos={"relative"}
            >
              <Text color={"#B8E0F7"}>THE BEST PHARMAY STORE</Text>
              <Text fontSize={"4xl"} fontWeight={500} letterSpacing={"0px"}>
                We Have The Most Complete Medicine And Vitamins
              </Text>

              <Text mt={5} color={"#B8E0F7"}>
                Pharmacy Web App is a life-saver. I can now manage my
                medications from the comfort of my home.{" "}
              </Text>

              <Link as={NextLink} href="/shop">
                <Button mt={5} bg="#E3E7F1">
                  SHOP NOW
                </Button>
              </Link>
            </Flex>
          </Box>

          <Flex
            justify={"center"}
            align={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <Box
              borderRadius={20}
              bg={"white"}
              mt={-10}
              p={5}
              boxShadow={"1px 1px 2px grey, 0 0 25px grey"}
              pos={"absolute"}
              h={"15vh"}
              w={"80%"}
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
          </Flex>
        </Box>

        {/* /////////////////////////////////////// Offers  Grids /////////////////////////////////*/}
        <Box bg={"#F8F8F8"} pt={20} pb={40}>
          <Container maxW={1200}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={2}>
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
                  <Link as={NextLink} href="/shop">
                    <Button
                      textDecorationLine={"none"}
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
                  <Link as={NextLink} href="/shop">
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
                  <Link as={NextLink} href="/shop" textAlign={"right"}>
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
                  <Link as={NextLink} href="/shop">
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
                  <Link as={NextLink} href="/">
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
          </Container>
        </Box>

        {/* ///////////////////////////////some other section  part 1/////////////////////////*/}
        <Container maxW={1200} pt={40} pb={10}>
          <Flex gap={5}>
            <Flex direction={"column"} display={{ base: "flex", lg: "flex" }}>
              <Box bg={"#0881DE"}>
                <Text
                  color={"white"}
                  p={5}
                  fontWeight={500}
                  fontFamily={'"Outfit", sans-serif'}
                  fontSize={"xl"}
                >
                  Excellent Medical Professionals With Significant Experience
                </Text>
              </Box>
              <Text mt={5} fontSize={"lg"}>
                Tristique senectus et netus et malesuada fames ac turpis. Turpis
                massa tincidunt dui ut ornare lectus sit amet. Viverra orci
                sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet
                proin fermentum leo vel orci porta non pulvinar.
              </Text>
              <Link as={NextLink} href="/">
                <Button
                  fontSize={"sm"}
                  mt={5}
                  width={"150px"}
                  bgColor="#B8E0F7"
                  borderRadius={"0px"}
                >
                  SHOP NOW
                </Button>
              </Link>

              <Flex mt={5} gap={"50px"}>
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

              <Flex mt={5} gap={"60px"}>
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
            <Box
              position="relative"
              borderRadius={"5px"}
              display={{ base: "none", lg: "flex" }}
            >
              <Box width={"700px"} height={"auto"}>
                <Image
                  borderRadius={"5%"}
                  width={"full"}
                  objectFit={"cover"}
                  src="m3.jpg"
                  bgRepeat={"no-repeat"}
                ></Image>
              </Box>

              <Box
                position="absolute"
                top="-60px"
                right="-5"
                bg="white"
                color="black"
                borderRadius="full"
                boxSize={"250px"}
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
                  <Text color={"#0881DE"} fontSize={"3xl"}>
                    25 +
                  </Text>
                  <Text fontSize={"2xl"}>Years of Experience</Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>

        {/* //////////////////////////////// hover list section ///////////////////////////////////////*/}
        <Container maxW={1200}>
          <Box>
            <Flex gap={5} textColor={"#0C1446"} _hover={{ cursor: "pointer" }}>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={20}>
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
                    <Text w={200} fontWeight={500} fontSize={"2xl"} zIndex={1}>
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
                    <Text w={200} fontWeight={500} fontSize={"2xl"} zIndex="1">
                      Acessibily Easier
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
                    <Text w={200} fontWeight={500} fontSize={"2xl"} zIndex="1">
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
                    <Text w={200} fontWeight={500} fontSize={"2xl"}>
                      Wellness Products
                    </Text>
                  </Flex>
                  <Divider
                    orientation="vertical"
                    borderColor={"black"}
                    height={"10vh"}
                  />
                </Flex>
              </SimpleGrid>
            </Flex>
          </Box>
        </Container>

        {/* ////////////////////////////////////Other products ////////////////////////// */}
        <Container maxW={1200} pt={40}>
          <Box>
            <Text
              textAlign={"center"}
              fontWeight={500}
              fontSize={"4xl"}
            >
              Shop Our Categories
              <Divider orientation="horizontal" color={'1px solid grey'}/>
            </Text>

            <Flex
              p={4}
              justifyContent={"space-evenly"}
              textColor={"#0C1446"}
              _hover={{ cursor: "pointer" }}
              alignItems="center"
            >
            <SimpleGrid columns={{base:1, md:2, xl:4}} gap={20} as={motion.div} variants={variants}
              initial="hidden"
              animate="show">
              <Box p={6} bg={"#F9F9F8"} border="1px" borderColor="#F9F9F8" as={motion.div} variants={images}>
                <Flex 
                  direction={"column"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src="funbact.rem.png"
                    width="150px"
                    height="200px"
                    borderRadius={"50px"}
                    mr={5}
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  ></Image>
                  <Heading
                    mt={2}
                    fontFamily={'"Outfit", sans-serif'}
                    fontSize={"xl"}
                  >
                    Ointment
                  </Heading>
                </Flex>
              </Box>

              <Box p={6} bg={"#F9F9F8"} border="1px" borderColor="#F9F9F8" as={motion.div} variants={images}>
                <Flex 
                  direction={"column"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src="gummies.png"
                    width="150px"
                    height="200px"
                    borderRadius={"50px"}
                    mr={5}
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  ></Image>
                  <Heading
                    mt={2}
                    fontFamily={'"Outfit", sans-serif'}
                    fontSize={"xl"}
                  >
                    Vitamins
                  </Heading>
                </Flex>
              </Box>

              <Box p={6} bg={"#F9F9F8"} border="1px" borderColor="#F9F9F8"  as={motion.div} variants={images}>
                <Flex
                  direction={"column"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src="panadol.png"
                    width="150px"
                    height="200px"
                    borderRadius={"50px"}
                    mr={5}
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  ></Image>
                  <Heading
                    mt={2}
                    fontFamily={'"Outfit", sans-serif'}
                    fontSize={"xl"}
                  >
                    Pain Capsules
                  </Heading>
                </Flex>
              </Box>

              <Box p={6} bg={"#F9F9F8"} border="1px" borderColor="#F9F9F8" as={motion.div} variants={images}>
                <Flex
                  direction={"column"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src="sleeve.png"
                    width="150px"
                    height="200px"
                    borderRadius={"50px"}
                    mr={5}
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  ></Image>
                  <Heading
                    mt={2}
                    fontFamily={'"Outfit", sans-serif'}
                    fontSize={"xl"}
                  >
                    Sleeve
                  </Heading>
                </Flex>
              </Box>
            </SimpleGrid>
            </Flex>
          </Box>
        </Container>

        {/* ///////////////////// some other section part part 2 ///////////////////////// */}
        <Container maxW={1200} pt={20} pb={20}>
          <Flex p={"20px"} gap={5} alignItems={"center"}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }}>
              <Flex mt={20}>
                <Box width={"500px"} height={"auto"}>
                  <Image
                    display={{ base: "none", md: "flex", lg: "flex" }}
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
            </SimpleGrid>
          </Flex>
        </Container>

        {/* section for newsletter and newsproduction section, based on current information or news that thr websites has gone through  */}
        <Container maxW={1200} pb={20}>
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

          <Flex gap={4} mb={5} justifyContent={"center"} id="section 2">
            <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap={10}>
              <Flex
                borderRadius={10}
                p={"30px"}
                bg={"#F9F9F8"}
                alignItems={"center"}
              >
                <Flex direction={"column"} alignItems={"center"}>
                  <Box border={"2px solid blue"} p={0.5} borderRadius={100}>
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
              </Flex>

              <Flex
                borderRadius={10}
                p={"30px"}
                bg={"#F9F9F8"}
                alignItems={"center"}
              >
                <Flex direction={"column"} alignItems={"center"}>
                  <Box border={"2px solid blue"} p={0.5} borderRadius={100}>
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
              </Flex>

              <Flex
                borderRadius={10}
                p={"30px"}
                bg={"#F9F9F8"}
                alignItems={"center"}
              >
                <Flex direction={"column"} alignItems={"center"}>
                  <Box border={"2px solid blue"} p={0.5} borderRadius={100}>
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
              </Flex>
            </SimpleGrid>
          </Flex>
        </Container>

        {/* <Box p={5}>
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
    </Box> */}
      </Box>
      </PageWrap>
    </>
  );
}
