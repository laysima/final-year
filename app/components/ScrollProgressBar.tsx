"use client";
import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Box
      as={motion.div}
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="4px"
      backgroundColor="blue.500"
      zIndex="banner"
    />
  );
};

export default ScrollProgressBar;