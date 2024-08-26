// "use client";
// import {
//   Box,
//   Button,
//   Flex,
//   Image,
//   Text,
//   background,
//   HStack,
//   ResponsiveValue,
//   TextProps,
//   Stack,
//   Heading,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   Input,
//   DrawerFooter,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import React, { useState, useRef } from "react";

// const carousel = () => {

//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = useRef<HTMLButtonElement>(null);

//   const arrowStyles: Partial<TextProps> = {
//     cursor: "pointer",
//     pos: "absolute" as ResponsiveValue<"absolute">,
//     top: "50%",
//     w: "auto",
//     mt: "-22px",
//     p: "16px",
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "18px",
//     transition: "0.6s ease",
//     borderRadius: "0 3px 3px 0",
//     userSelect: "none",
//     _hover: {
//       opacity: 0.8,
//       bg: "black",
//     },
//   };

//   const slides = [
//     {
//       component: (
//         <Flex>
//           <Flex direction={"column"}>
//             <Flex>
//               <Flex direction={"column"}>
//                 <Heading
//                   color={"black"}
//                   fontFamily='"Outfit", sans-serif'
//                   fontSize="5xl"
//                 >
//                   WELCOME TO PHARMANINC: <br />
//                 </Heading>
//                 <Text color={"black"} fontSize="xl">
//                   Your Compassionate Ally in Navigating the Path to Optimal
//                   Health and Wellness At PharmaInc, we understand that managing
//                   health is a personal journey that requires trust, support, and
//                   reliable resources.
//                 </Text>
//               </Flex>
//             </Flex>

//             {/* Linking Buttons */}
//             <Flex gap={3} p={'50px'}>
//               <Link href="/shop">
//                 <Button bg="#E3E7F1" borderRadius={0}>
//                   SHOP NOW
//                 </Button>
//               </Link>

//               <Button bg="#E3E7F1" borderRadius={0}>
//                 <Link href="/">CHAT WITH A BOT</Link>
//               </Button>
//             </Flex>
//           </Flex>
//         </Flex>
//       ),
//     },
//     {
//       img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       label: <Text  fontSize={'60px'}> Second Slide</Text> ,
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slidesCount = slides.length;

//   // const prevSlide = () => {
//   //   setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
//   // };

//   // const nextSlide = () => {
//   //   setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
//   // };

//   const setSlide = (slide: React.SetStateAction<number>) => {
//     setCurrentSlide(slide);
//   };

//   const carouselStyle = {
//     transition: "all .8s",
//     ml: `-${currentSlide * 100}%`,
//   };
//   return (
//     <>
//     <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
//         Open
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement='right'
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>

//           <DrawerBody>
//             <Input placeholder='Type here...' />
//           </DrawerBody>

//           <DrawerFooter>
//             <Button variant='outline' mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme='blue'>Save</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     <Flex
//       w="full"
//       bg="#edf3f8"
//       _dark={{
//         bg: "#3e3e3e",
//       }}
//     >
//       <Flex w="full" pos="relative" overflow="hidden">
//         <Flex h="600px" w="full" {...carouselStyle}>
//           {slides.map((slide, sid) => (
//             <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
//               <Text color="white" fontSize="xs" pos="absolute" top="0">
//                 {sid + 1} / {slidesCount}
//               </Text>

//               <Image
//                 src={slide.img}
//                 alt="carousel image"
//                 boxSize="full"
//                 backgroundSize="cover"
//               />

//               <Stack
//                 p={"20px"}
//                 pos="absolute"
//                 bottom="300px"
//                 w="full"
//                 color="white"
//               >
//                 <Text fontSize="30px">{slide.label}</Text>
//                 <Text color={"red"}>{slide.description}</Text>
//                 <Flex>{slide.component}</Flex>
//               </Stack>
//             </Box>
//           ))}

//         </Flex>
//         {/* <Text {...arrowStyles} left="0" onClick={prevSlide}>
//           &#10094;
//         </Text>
//         <Text {...arrowStyles} right="0" onClick={nextSlide}>
//           &#10095;
//         </Text> */}
//         <HStack justify="center" pos="absolute" bottom="8px" w="full">
//           {Array.from({
//             length: slidesCount,
//           }).map((_, slide) => (
//             <Box
//               key={`dots-${slide}`}
//               cursor="pointer"
//               boxSize={["7px", null, "15px"]}
//               m="0 2px"
//               bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
//               rounded="50%"
//               display="inline-block"
//               transition="background-color 0.6s ease"
//               _hover={{
//                 bg: "blackAlpha.800",
//               }}
//               onClick={() => setSlide(slide)}
//             ></Box>
//           ))}
//         </HStack>
//       </Flex>
//     </Flex>
//     </>
//   );
// };

// export default carousel;
