'use client'
// import React from 'react'
import React, { useState, useEffect } from 'react';
import {Button, HStack} from '@chakra-ui/react'

const pagination = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });
  return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Add 
    </button>

    <button onClick={() => setCount(count - 1)}>
      Reduce
    </button>
  </div>
  )
}

export default pagination