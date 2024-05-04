"use client";
import {
  Box,
  Link,
  IconButton,
  Flex,
  Grid,
  Image,
  Text,
  Icon,
  Container,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaExternalLinkAlt,
  FaHamburger,
} from "react-icons/fa";
import NextLink from "next/link";
import React from "react";
// import { useRouter } from 'next/navigation';
import { BsCart2 } from "react-icons/bs";
import { MdEditNotifications, MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiSearch, BiFilter, BiLogOut, BiRepeat } from "react-icons/bi";
import { Button, Input, InputGroup, Stack } from "@chakra-ui/react";
import Home from "../page";
import { deleteCookie, getCookie } from "cookies-next";
import { redirect } from "next/navigation";

import { useCartStore } from "@/zustand/store";
import cart from "../shop/[id]/cart/page";
import { IoAddCircleOutline } from "react-icons/io5";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const session = getCookie("session");
  const nSession = session && JSON.parse(session);

  // TODO: get type from response

  // useEffect(()=> {
  //   if (!session) {
  //     router.replace('/login')
  //   }
  // }, [])

  const handleLogout = () => {
    deleteCookie("session");
    router.replace("/login");
  };

  const products = require("../datasource.json");

  // Determine if the link is active based on the current path
  // Close dropdown when clicking outside
  // Function to show the dropdown menu
  const showMenu = () => setIsOpen(true);

  // Function to hide the dropdown menu
  const hideMenu = () => setIsOpen(false);

  const { cart } = useCartStore();

  /////////////////////////// search button available keywords////////////////////////////////////////////

  return (
    <Box position={"sticky"} top={0} zIndex={10}>
      <Flex
        bg={"#003060"}
        color={"white"}
        p={"10px"}
        display={{ base: "none", lg: "flex" }}
      >
        <Container maxW={1200}>
          <HStack gap={10}>
            <Flex gap={10} grow={1} color={"#0881DE"}>
              <IconButton
                size={"sm"}
                aria-label="direct right"
                icon={<FaTwitter />}
                borderRadius={"50%"}
                bgColor={"white"}
              />
              <IconButton
                size={"sm"}
                aria-label="direct right"
                icon={<FaFacebookF />}
                borderRadius={"50%"}
                bgColor={"white"}
              />
              <IconButton
                size={"sm"}
                aria-label="direct right"
                icon={<FaInstagram />}
                borderRadius={"50%"}
                bgColor={"white"}
              />
              <IconButton
                size={"sm"}
                aria-label="direct right"
                icon={<FaYoutube />}
                borderRadius={"50%"}
                bgColor={"white"}
              />
            </Flex>

            <Text>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</Text>
          </HStack>
        </Container>
      </Flex>

      <Box
        style={{
          zIndex: 10,
          fontSize: "18px",
          background: "white",
          padding: 5,
        }}
      >
        <Container maxW={1200}>
          <Flex alignItems={"center"} >
            <Flex alignItems={"center"} display={{ base: "flex", md:'flex', lg: "flex" }} grow={1}>
              <Image
                width={"auto"}
                h={"30px"}
                objectFit={"contain"}
                alt="pharmainc"
                src="pharmainc.svg"
              ></Image>
            </Flex>

            <Flex display={{ lg:'none'}} shrink={0}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<MdOutlineMenu />}
                  variant="outline"
                />
                <MenuList borderRadius={0}>
                  <MenuItem >
                  <Link _hover={{background:"teal", transition:'0.5s'}} as={NextLink} href="/" p={2}>Home</Link>
                  </MenuItem>
                  <MenuItem  >
                  <Link _hover={{background:"teal", transition:'0.5s'}} as={NextLink} href="/about" p={2} >About</Link>
                  </MenuItem>
                  <MenuItem >
                  <Link _hover={{background:"teal", transition:'0.5s'}} as={NextLink} href="/signup" p={2} >Login</Link>
                  </MenuItem>
                  <MenuItem >
                  <Link _hover={{background:"teal", transition:'0.5s'}} as={NextLink} href="/signup" p={2} >Signup</Link> 
                  </MenuItem>
                  <MenuItem >
                  <Link _hover={{background:"teal", transition:'0.5s'}} as={NextLink} href="/shop" p={2} >Shop</Link> 
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <Flex
              grow={1}
              gap={30}
              align={"center"}
              justifyContent={"center"}
              fontSize="md"
              display={{ base: "none", lg: "flex" }}
            >
              <Link
                _hover={{
                  color: "#B8E0F7",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
                as={NextLink}
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home{" "}
              </Link>
              <Link
                _hover={{
                  color: "#B8E0F7",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
                as={NextLink}
                className={`link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                About{" "}
              </Link>
              <Link
                _hover={{
                  color: "#B8E0F7",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
                as={NextLink}
                className={`link ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact
              </Link>
              <Link
                _hover={{
                  color: "#B8E0F7",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
                as={NextLink}
                className={`link ${pathname === "/shop" ? "active" : ""}`}
                href="/shop"
              >
                Shop
              </Link>
            </Flex>

            <Flex
              shrink={0}
              alignItems={"center"}
              justifyContent={"center"}
              gap={10}
              display={{ base: "none", lg: "flex" }}
            >

              <Flex gap={5} align={"center"}>
                <Box position={"relative"}>
                  <Link
                    fontSize="26px"
                    _hover={{ color: "#B8E0F7", transition: "0.2s" }}
                    as={NextLink}
                    className={`link ${
                      pathname === "/shop/identifier/cart" ? "active" : ""
                    }`}
                    href="/shop/identifier/cart"
                  >
                    <LiaShoppingBagSolid />
                  </Link>
                  {cart.map((product: any, index: any) => (
                    <Flex
                      key={index}
                      justifyContent={"center"}
                      align={"center"}
                      position={"absolute"}
                      bg={"#0881DE"}
                      top={"-7px"}
                      right={"-7px"}
                      width="22px"
                      height="22px"
                      borderRadius="100%"
                    >
                      <Text color={"white"} p={3} fontSize={"12px"}>
                        {`${cart.reduce(
                          (sum: number, current: any) => sum + current.quantity,
                          0
                        )}`}
                      </Text>
                    </Flex>
                  ))}
                </Box>
                <Link
                  fontSize="26px"
                  _hover={{ color: "#B8E0F7", transition: "0.2s" }}
                  as={NextLink}
                  className={`link ${pathname === "/shop" ? "active" : ""}`}
                  href="/shop"
                >
                  <BsCart2 />
                </Link>
                <Button
                  fontSize="26px"
                  _hover={{ color: "#B8E0F7", transition: "0.2s" }}
                  as={NextLink}
                  className={`link ${pathname === "/login" ? "active" : ""}`}
                  href="/login"
                >
                  <Flex
                    align={"center"}
                    bg={"#0881DE"}
                    p={"5px "}
                    borderRadius={5}
                  >
                    <Icon as={GoPerson} color={"white"} fontSize={"17px"} />
                    <Text
                      color={"white"}
                      fontWeight={500}
                      ml={2}
                      fontSize={"17px"}
                    >
                      {nSession ? nSession?.username : "Login"}
                    </Text>
                  </Flex>
                </Button>
                {nSession && (
                  <Button
                    fontSize="26px"
                    colorScheme="red"
                    onClick={handleLogout}
                    type="submit"
                  >
                    <Flex
                      align={"center"}
                      bg={"crimson"}
                      p={"5px "}
                      borderRadius={5}
                    >
                      <Icon as={BiLogOut} color={"#fff"} fontSize={"17px"} />
                      <Text
                        color={"#fff"}
                        fontWeight={500}
                        ml={2}
                        fontSize={"17px"}
                      >
                        Log out
                      </Text>
                    </Flex>
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
