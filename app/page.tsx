'use client'
import { useState } from 'react'
import NextLink from 'next/link'
import { Box, Button, Flex, Text, SimpleGrid, GridItem, Divider, Image, Heading, Link, LinkOverlay, Icon, Center} from '@chakra-ui/react'
import { PiHandshakeLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPersonAdd } from "react-icons/go";
import { IoTrophyOutline } from "react-icons/io5";
import { FaCheckCircle, FaDumbbell } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { TbDentalBroken } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import './globals.css'  

/////////////////////// hoooks //////////////////////
import { Suspense } from 'react';
import { BiX } from 'react-icons/bi';


export default function Home({params}:any) {
  const [openedItemId, setOpenedItemId] = useState(null);
  
  const toggleItem = (itemId:any) => {
    if (openedItemId === itemId) {
      // If the clicked item is already open, close it
      setOpenedItemId(null);
    } else {
      // Open the clicked item and close others
      setOpenedItemId(itemId);
    }
  }

  const faqItems = [
    { id: 1, question: "What kind of services do you offer?", answer: "Track orders and deliveries: Provide real-time updates on the status of prescriptions and medication deliveries, keeping patients informed and reducing anxiety." },
    { id: 2, question: "Is your clinic open 24hrs?", answer: "Yes, our clinic operates 24/7 to ensure you receive the medical care you need at any time." },
    { id: 3, question: "How can I book an appointment?", answer: "You can book an appointment through our website or by calling our customer service hotline." },
    { id: 4, question: "Do you offer online consultations?", answer: "Yes, we provide online consultations with our medical specialists to ensure your health concerns are addressed promptly." }
  ];
  
  return (
    <>
    <Box bg={'#F9F9F8'}>
    <Box position="relative" width="100%" height="100%">
      {/* Background Image */}
      <Box
        bgImage="url('image.jpg')"
        objectFit="cover"
        width="100%"
        height="100%"
        bgSize="cover"
        position="absolute"
        zIndex="0"
        backgroundColor="rgba(0, 0, 0, 0.5)"
       // Adjust this value to control the visibility of the background image
      />

      {/* Content */}
      <Flex p={30} alignItems="center" px={10} position="relative" zIndex="1">
        <Flex shrink={0} width="60%">
          <Box>
            <Heading color="White" fontFamily='"Outfit", sans-serif' fontSize="4xl" as="b">
              WELCOME TO PHARMANINC: <br />Your Compassionate Ally in Navigating the Path to Optimal Health and Wellness
            </Heading>
            <Text mt={10} color={'white'} mb={10} fontSize="xl">
              At PharmaInc, we understand that managing health is a personal journey that requires trust, support, and reliable resources.
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* Linking Buttons */}
      <Box p={10} position="relative" zIndex="1">
        <Link as={NextLink} href='/shop'>
          <Button mx={10} colorScheme="teal" borderRadius={0}>SHOP NOW</Button>
        </Link>
        <Button colorScheme="teal" borderRadius={0} >
          <Link  as={NextLink} href="/">CHAT WITH A BOT</Link>
        </Button>
      </Box>
    </Box>


    {/* /////////////////////////////////////// Offers  Grids /////////////////////////////////*/}
    <Box mt={10}>
    <SimpleGrid p={'30px'}
    spacing={'20px'}
    minChildWidth={{ base: "50%", md: "300px" }} 
    columns={{base:6, md:2, xl:1}}
        h='600px'
        gap={3}>
          {/* grid 1 */}
        <GridItem p={2} rowSpan={2} bgImage="koflet_coughMixture.png"  color={'white'} bgColor={"rgba(0, 0, 0, 0.9)"} bgSize={'cover'} bgPos={'center'} >
          <Heading alignItems={'center'} p={5} fontFamily={'"Outfit", sans-serif'} fontSize='3xl'>SPECIAL OFFERS ON</Heading>
          <Text mr={3}  textAlign={'right'}  fontSize={'xl'} >Cough Syrup</Text>
          <Flex justifyContent="flex-end">
            <Link as={NextLink} href="/shop" w={'40%'}>
              <Button textDecorationLine={'none'} mr={3} colorScheme="teal" borderRadius={'20px'} mt={5}>SHOP NOW</Button>
            </Link>
          </Flex>
        </GridItem>

        {/* grid 2 */}
        <GridItem p={2} rowSpan={2} bgImage="vitamins.png" color={'white'} bgColor={"rgba(0, 0, 0, 0.9)"} bgSize={'cover'} bgPos={'center'} >
          <Heading mr={3} mt={5} alignItems={'right'} fontFamily={'"Outfit", sans-serif'} fontSize='3xl'>MULTIVITAMIN</Heading>
          <Heading mr={3} alignItems={'right'} fontFamily={'"Outfit", sans-serif'} fontSize='3xl'>TABLETS</Heading>
            <Text mr={3} textAlign={'right'} fontSize={'xl'}  mt={10}>Get 20% off and Stabilize</Text>
            <Flex justifyContent="flex-end">
              <Link as={NextLink} href='/shop' w={'40%'}>
                <Button textDecorationLine={'none'} mr={2} colorScheme="purple" borderRadius={'20px'} mt={7} >SHOP NOW</Button>
              </Link>
            </Flex>
        </GridItem>

        {/* grid 3 */}
        <GridItem p={2} colSpan={{base:2, }} bgImage="paracetamol2.jpg" color={'white'} bgColor={"rgba(0, 0, 0, 0.5)"} bgSize={'cover'} bgPos={'center'} >
          <Heading fontFamily={'"Outfit", sans-serif'} fontSize='3xl' mt={5} mr={3} textAlign={'right'}>30% DISCOUNT ON</Heading>
            <Text mr={2} textAlign={'right'} fontSize={'xl'} >Paracetamol</Text>
            <Flex justifyContent="flex-end">
              <Link as={NextLink} href="/shop" w={'40%'} textAlign={'right'}>
                <Button mr={2} colorScheme="blackAlpha" borderRadius={'20px'} mt={5}>SHOP NOW</Button>
              </Link>
            </Flex>
        </GridItem>

        {/* grid 4 */}
        <GridItem p={2} rowSpan={1} bgImage="VC.webp" color={'white'}  bgColor={"green"} bgSize={'cover'} bgPos={'center'} >
          <Heading fontFamily={'"Outfit", sans-serif'} fontSize='3xl' mt={5} mr={3} textAlign={'right'}>30% DISCOUNT ON</Heading>
            <Text mr={2} textAlign={'right'} fontSize={'xl'} >Paracetamol</Text>
            <Flex justifyContent="flex-end">
              <Link as={NextLink} href="/shop" w={'40%'}>
                <Button mr={2} colorScheme="blackAlpha" borderRadius={'20px'}mt={5}>SHOP NOW</Button>
              </Link>
          </Flex>

        </GridItem>

         {/* grid 5 */}
          <GridItem p={2} colSpan={1} bgImage="capsules.jpg" color={'white'} bgColor={"red"} bgSize={'cover'} bgPos={'center'} >
            <Text mr={3} mt={12} textAlign={'right'} fontSize={'xl'} fontWeight={'900'} >Cough Syrup</Text>
            <Heading fontFamily={'"Outfit", sans-serif'} fontSize='3xl' mt={5} mr={3} textAlign={'right'}>30% DISCOUNT ON</Heading>
            <Flex justifyContent="flex-end">
              <Link as={NextLink}  href="/" w={'40%'} >
                <Button mr={2} colorScheme="linkedin" borderRadius={'20px'} mt={15}>SHOP NOW</Button>
              </Link>
            </Flex>
        </GridItem>
    </SimpleGrid>
    </Box>


    {/* /////////////////////////////////////options buttons ///////////////////////////////////////////// */}

    <Box p={{ base: '50px', md: '30px' }} mt={{ base: 37, md: 30 }} >
      <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 5, md: 10 }} justifyContent={'space-evenly'} textColor={'#0C1446'} _hover={{cursor:'pointer'}}>
      <Flex direction={{ base: 'row', lg: 'row', md: 'row' }} align="center">
        <Image src='capsule.image.jpeg' width={'70px'} height={'70px'} borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
      <Flex direction={'column'}>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={{ base: 'xl', md: '2xl' }} >Medicines</Heading>
        <Text>Paracetamol</Text>
      </Flex>
      </Flex>

      <Flex direction={{ base: 'row', lg: 'row', md: 'row' }} align="center">
        <Image src='cerave.webp' width={'70px'} height={'70px'} borderRadius={'50px'} mr={5} _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
      <Flex direction={'column'}>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={{ base: 'xl', md: '2xl' }} >Beauty Care</Heading>
        <Text>Beauty care</Text>
      </Flex>
      </Flex>

      <Flex direction={{ base: 'row', lg: 'row', md: 'row' }} align="center">
        <Image objectFit={'cover'}  src='natural.jpg' width={'70px'} height={'70px'} borderRadius={'50px'} mr={5} bgSize={'cover'} _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
      <Flex direction={'column'}>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={{ base: 'xl', md: '2xl' }} >Health Products</Heading>
        <Text>Health Products</Text>
      </Flex>
      </Flex>

      <Flex direction={{ base: 'row', lg: 'row', md: 'row' }} align="center">
        <Image src='wellman.jpg' width={'70px'} height={'70px'} borderRadius={'50px'} mr={5} _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
      <Flex direction={'column'}>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={{ base: 'xl', md: '2xl' }}>Wellness Products</Heading>
        <Text>Wellman/ Wellwoman</Text>
      </Flex>
      </Flex>

      </Flex>
    </Box>
    </Box>

      {/*////////////////////////////////// Categories ////////////////////////////////// */}

    <Box p={{ base: '20px', md: '30px' }} mt={{ base: 10, md: 15 }}>
      <Heading textAlign={'center'} fontFamily={'"Outfit", sans-serif'} fontSize={'4xl'} color={'#175873'}>Shop Our Categories</Heading>

      <Flex direction={{ base: 'column', md: 'row' }} p={6} gap={{ base: 5, md: 5 }} mt={{ base: 5, md: 10 }} justifyContent={'center'} textColor={'#0C1446'} _hover={{ cursor: 'pointer' }} wrap="wrap" alignItems="center">
        
      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='funbact.rem.png' width="200px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >Ointment</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='gummies.png' width="200px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'}  >Vitamins</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='panadol.png' width="200px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >Pain Capsules</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='bp.png' width="200px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >BP Monitors</Heading>
      </Flex>
      </Box>

      <Box p={6} bg={'#F9F9F8'} border="1px" borderColor='#F9F9F8' >
      <Flex direction={'column'} alignItems="center" justifyContent="center"  >
      <Image src='sleeve.png' width="200px" height="200px" borderRadius={'50px'} mr={5}  _hover={{transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out'}} ></Image>
        <Heading mt={2} fontFamily={'"Outfit", sans-serif'} fontSize={'xl'} >Sleeve</Heading>
      </Flex>
      </Box>

      </Flex>

    </Box>


    {/* ///////////////////////////////some other section  part 1/////////////////////////*/}
    <Flex mt={20}>
    <Flex p={'30px'} direction={'column'} maxW={'50%'} >
      <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'} fontSize={'4xl'}>
        Excellent Medical Professionals With Significant 
        Experience
      </Heading>
      <Text mt={5} fontSize={'xl'}>
      Tristique senectus et netus et malesuada fames ac turpis.
       Turpis massa tincidunt dui ut ornare lectus sit amet. 
       Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      Imperdiet proin fermentum leo vel orci porta non pulvinar.
      </Text>
      <Link as={NextLink}  href="/">
      <Button mt={5} width={'200px'} mr={3} colorScheme="teal" borderRadius={'0px'} >SHOP NOW</Button>
      </Link>
      
      <Flex mt={10}>
        <Flex>
      <PiHandshakeLight fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'}>200k +</Heading>
        <Text color={'ash'}>Happy clients</Text>
      </Flex>
      </Flex>

      <Flex ml={20}>
      <IoMdHeartEmpty fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading color={'#175873'}  fontFamily={'"Outfit", sans-serif'}>50k +</Heading>
        <Text color={'ash'}>Orders delivered</Text>
      </Flex>
      </Flex>
      </Flex>

      <Flex mt={10}>
        <Flex>
      <GoPersonAdd fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading  color={'#175873'} fontFamily={'"Outfit", sans-serif'}>80 +</Heading>
        <Text color={'ash'}>Area Served</Text>
      </Flex>
      </Flex>

      <Flex ml={24}>
      <IoTrophyOutline fontSize={'45px'} />
      <Flex direction={'column'}>
        <Heading color={'#175873'} fontFamily={'"Outfit", sans-serif'}>5L</Heading>
        <Text color={'ash'}>Medicines</Text>
      </Flex>
      </Flex>
      </Flex>
      
    </Flex>
     <Image src='doctors.avif' mr={12} width={'50%'} height={'70vh'}></Image>
    </Flex>

      {/* //////////////////////////////// hover list section ///////////////////////////////////////*/}
    <Box p={{ base: '20px', md: '30px' }} mt={{ base: 10, md: 15 }}> 
      <Flex gap={5} justifyContent={'space-evenly'}  textColor={'#0C1446'} _hover={{cursor:'pointer'}}>

        {/* float 1 */}
      <Flex position="relative" height={'10vh'}
      _before={{content: '""',position: "absolute",right: 0, height: "100%",width: "0%",bgColor: ' #ECECEB',
      transition:'width 0.5s ease-in-out',zIndex: 0}} _hover={{ border:'0.5px solid',_before: { width: "100%", },
        }}>
      <Flex p={2} alignItems={'center'}>
      <Flex position={'relative'} borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
        <TbDentalBroken />
        </Flex>
        <Heading fontFamily={'"PT Sans", sans-serif'} fontSize={'2xl'} zIndex={1} >DENTAL WELLNESS</Heading>
      </Flex>
      <Divider orientation='vertical' borderColor={'black'} height={'10vh'} />
      </Flex>


      {/* Float 2 */}
      <Flex position="relative" height={'10vh'}
      _before={{content: '""',position: "absolute",right: 0, height: "100%",width: "0%",bgColor: ' #ECECEB',
      transition:'width 0.5s ease-in-out',zIndex: 0, }} _hover={{ border:'0.5px solid',_before: { width: "100%", },
        }}>
      <Flex p={2} alignItems={'center'}>
      <Flex position={'relative'} borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
        <FaHandsHoldingChild />
        </Flex>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={'2xl'}  zIndex="1">BEAUTY CARE</Heading>
      </Flex>
      <Divider orientation='vertical' borderColor={'black'} height={'10vh'} />
      </Flex> 

    {/* float 3 */}
      <Flex position="relative" height={'10vh'}
      _before={{content: '""',position: "absolute",right: 0, height: "100%",width: "0%",bgColor: ' #ECECEB',
        transition:'width 0.5s ease-in-out',zIndex: 0, }} _hover={{ border:'0.5px solid',_before: { width: "100%", },
          }}>
      <Flex p={2} alignItems={'center'}>
      <Flex position={'relative'} borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
      <MdOutlineHealthAndSafety />
        </Flex>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={'2xl'} zIndex="1" >HEALTH PRODUCTS</Heading>
      </Flex>
      <Divider orientation='vertical' borderColor={'black'} height={'10vh'} />
      </Flex>
     
      {/* float 4 */}
      <Flex position="relative" height={'10vh'}
      _before={{content: '""',position: "absolute",right: 0, height: "100%",width: "0%",bgColor: ' #ECECEB',
        transition: 'width 0.5s ease-in-out', zIndex: 0, }}_hover={{border:'0.5px solid',_before: {width: "100%", },
        }} > 
      <Flex p={2} zIndex="1" alignItems={'center'}>
      <Flex position={'relative'} borderRadius={'50%'} mr={3} p={3} alignItems={'center'} fontSize={'50px'} bg={'#87ACA3'} color={'white'}>
      <FaDumbbell />
        </Flex>
        <Heading fontFamily={'"Outfit", sans-serif'} fontSize={'2xl'}>WELLNESS PRODUCTS</Heading>
      </Flex>
      <Divider orientation='vertical' borderColor={'black'} height={'10vh'} />
      </Flex>

      </Flex>
    </Box>


  {/* ///////////////////// some other section part part 2 ///////////////////////// */}
      <Flex p={'30px'} gap={10} >
      <Flex mt={20}>
      <Image src='stet.jpeg' bgRepeat={'no-repeat'} ></Image>
    </Flex>

    <Flex direction={'column'} mt={20} width={'90%'} justifyContent={'space-between'}>
    {faqItems.map((item) => (
        <Box key={item.id}>
          <Flex bg={'#F9F9F8'} p={'30px'} fontSize={'xl'} _hover={{color: 'teal'}}
              justifyContent={'space-between'} onClick={() => toggleItem(item.id)} cursor="pointer">
                <Box>
                  <Text as={'b'}>{item.question}</Text>
                </Box>  
                <FaCheckCircle />
          </Flex>
          {openedItemId === item.id && <Box p={'30px'} bg={'#F9F9F8'} fontSize={'xl'}>{item.answer}</Box>}
        </Box>
      ))}

    </Flex>
      
    </Flex>

    {/* section for newsletter and newsproduction section, based on current information or news that thr websites has gone through  */}

    <Heading textAlign={'center'} p={'30px'} fontFamily={'"Outfit", sans-serif'} >Newsletter and More information on customer support</Heading>
 
    <Flex gap={4} h={'25vh'} mb={5} justifyContent={'center'} p={'30px'} id='section 2'>
      <Box border={'1px solid teal'} w={'50%'} p={'15px'}>
        <Flex>
          <Text >
            we need payers to mane the encyclopedia and do not need ot engaege in the particualr sections of tyhe news brinswicj institution, pleas do not resist
          </Text>
          <Icon as={GoPersonAdd}  /> 
        </Flex>
      </Box>

      <Box border={'1px solid teal'} w={'50%'} p={'15px'}>
        <Flex>
          <Text>
            we need payers to mane the encyclopedia and do not need ot engaege in the particualr sections of tyhe news brinswicj institution, pleas do not resist
          </Text>
          <Icon as={GoPersonAdd}  /> 
        </Flex>
      </Box>

      <Box border={'1px solid teal'} w={'50%'} p={'15px'}>
        <Flex>
          <Text>
            we need payers to mane the encyclopedia and do not need ot engaege in the particualr sections of tyhe news brinswicj institution, pleas do not resist
          </Text>
          <Icon as={GoPersonAdd}  /> 
        </Flex>
      </Box>

      <Box border={'1px solid teal'} w={'50%'} p={'15px'}>
        <Flex>
          <Text>
            we need payers to mane the encyclopedia and do not need ot engaege in the particualr sections of tyhe news brinswicj institution, pleas do not resist
          </Text>
          <Icon as={GoPersonAdd}  /> 
        </Flex>
      </Box>


    </Flex>
    </>
  )
}
