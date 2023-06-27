import React from 'react';
import { Box, Stack, Typography } from '@mui/material'
import Logo from "../assets/images/Logo-1.png"

function Footer() {
  return (
    <Box mt={"80x"} bgcolor={"#fff3f4"} >
      <Stack gap="40px"  alignItems={"center"} px={"40px"} pt={"24px"}>
        <img src={Logo} alt='logo' width={"200px"} height={"40px"}/>
      </Stack>
      <Typography variant='h5' mt={"20px"} pb={"40px"}>
        Made with ❤️ by Abbas Khed
      </Typography>
    </Box>
  )
}

export default Footer;