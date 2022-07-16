import { Box } from '@mui/material'
import React from 'react'
import Card1 from './Card1'

function Feed() {
  return (
    <Box flex={5} p={2}>
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
    </Box >
  )
}

export default Feed
