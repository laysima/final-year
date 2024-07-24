import React from 'react';
import { SlideFade, Box, ScaleFade } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationBox = ({ children }:any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 50% of the component is in view
  });

  return (
    <Box ref={ref}>
      <SlideFade offsetY="40px" in={inView}>
        {children}
      </SlideFade>
    </Box>
  );
};

export default ScrollAnimationBox;
