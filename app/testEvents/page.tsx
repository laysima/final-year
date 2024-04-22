'use client'
import { Button, Input, useColorModeValue } from '@chakra-ui/react';
import { color } from 'framer-motion';
import React from 'react'
import { useState } from 'react';

const testEvent = () => {
    const pressKey = () => {
        console.log('Key pressed')
    }


  return (
    <>
     <Input onKeyDown={pressKey} placeholder='typed' />
    </>

  )
}

export default testEvent