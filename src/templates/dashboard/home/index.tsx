'use client';


import { withAuth } from "@/hoc/withAuth"
import { Box, Typography } from "@mui/material"

const HomeTemplate = () => {
  return (
    <Box>
      <Typography>
        Home page
      </Typography>
    </Box>
  )
}

export default withAuth(HomeTemplate);