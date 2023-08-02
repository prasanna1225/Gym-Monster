import React from 'react'
import { Box,Stack, Typography } from '@mui/material';
import Contact from './Contact';
import Logo from '../assets/images/logoname.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ECC9EE">
  <Stack gap="20px" alignItems="center" px="40px" pt="24px"> 
   <img src={Logo} alt="logo" width="60px" height="60px"/><span style={{fontWeight:'bolder', fontFamily:'sans-serif'}}>Gym Monster</span>
   <Contact/>
   <Typography pb="40px"  color="#8300c4">
   &copy; {new Date().getFullYear()} Made by Prasanna
   </Typography>
</Stack> </Box>
  )
}

export default Footer;