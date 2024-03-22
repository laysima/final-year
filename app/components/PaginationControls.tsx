'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button, Box, Stack } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '8'

  

  return (
    <Stack spacing={4} direction="row" align="center" justifyContent="center" marginTop="4" p={10}>
      <button style={{backgroundColor:'teal',padding:'5px', color:'white', borderRadius:'5px', marginBottom:'5px'}}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/shop?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        Prev page
      </button>

      <Box>
        {page} / {Math.ceil(10 / Number(per_page))}
      </Box>

      <button style={{backgroundColor:'teal',padding:'5px', color:'white', borderRadius:'5px', marginBottom:'5px'}}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/shop?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next page
      </button>
    </Stack>
  )
}

export default PaginationControls