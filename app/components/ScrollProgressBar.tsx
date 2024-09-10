"use client";
import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="4px"
      zIndex={9999}
      background="linear-gradient(to right, #0881DE, #05abc4)"
      width={`${scrollProgress}%`}
    />
  );
};

export default ScrollProgressBar;