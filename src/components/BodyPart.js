import React from 'react'
import { Stack,Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"

    sx={{
      borderTop: bodyPart === item ? '4px solid #8300C4' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius:'20px',
          width:'270px',
          height:'270px',
          cursor:'pointer',
          gap:'47px;'
    }}
    //top horizontal line appeared when you click
     onClick={() =>{
      setBodyPart(item);
      window.scrollTo({top:1800, left:100, behavior:'smooth'})
      } }    
    >
        <img src={Icon} alt="dumbell" style={{width:'40px', height:'40px'}} />
        <Typography fontSize="24px" fontWeight="bold" color="#000"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart