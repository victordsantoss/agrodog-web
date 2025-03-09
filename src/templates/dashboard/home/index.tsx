'use client';



import { withAuth } from "@/hoc/with-auth.hoc";
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