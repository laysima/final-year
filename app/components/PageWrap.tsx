import React from 'react';
import { SlideFade, Box, ScaleFade } from '@chakra-ui/react';
import { motion, AnimatePresence } from "framer-motion"

const PageWrap = ({ children }:any) => {

  return (
    <AnimatePresence>
    <motion.div
    initial={{opacity:0, y:15}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:15}}
    transition={{delay:0.25}}
    >{children}</motion.div>
    </AnimatePresence>
  );
};

export default PageWrap;
