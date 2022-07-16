import { Box, Typography } from '@mui/material'
import React from 'react'
import CardVideo from './CardVideo'

function Video() {
  return (
    <Box flex={5} p={2}>
      <Typography variant="h6" mt={2} mb={1}>Video</Typography>
      <CardVideo />
      <CardVideo />
      <CardVideo />
    </Box>
  )
}

export default Video
