import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'

function BodyPart({item, setBodyPart, bodyPart}) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }} 
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:"1800",behavior:"smooth", left:"100"})
      }}   
    >
      <img src={Icon} alt="dumbbell" style={{height:"40px", width:"40px"}}/>
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>

    </Stack>
  )
}

export default BodyPart;