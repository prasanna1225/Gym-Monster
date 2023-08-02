import React from 'react';
import { Box,Stack,Typography,Button } from '@mui/material';
import BannerImg0 from '../assets/images/BannerImg0.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}} position="relative" p="20px">
        <Typography color="#8300c4" fontWeight="600" fontSize="26px">Gym Monster</Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt='30px'>Sweat, Getfit <br/> and be a Fitness Monster</Typography>
        <Typography fontSize="22px" mb={4} lineHeight="35px" >Check out most effective exercises</Typography>
         <Button  variant="contained" color="secondary" href='#exercises' sx={{backgroundColor:"#8300c4",padding:'10px'}}>Explore Exercises</Button>
         <Typography fontWeight={600} color="#8300c4" sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize="200px" >Exercises</Typography>
         <img src={BannerImg0} alt="banner" className='banner-img'/>
    </Box>
  )
}

export default HeroBanner;