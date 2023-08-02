import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
   <Box sx={{ mt:{lg:'100px',xs:'0'}}}>
   <Typography variant='h4' mb={5}>Similar <span style={{color:"#8300c4 "}}> Target Muscle</span> exercises</Typography>
   <Stack direction='row' sx={{p:'2',position:'relative'}}>
    {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>
    :<Loader/> }
   </Stack>
   <Typography variant='h4' mb={5}>Similar <span style={{color:"#8300c4"}}>Equipment</span> exercises</Typography>
   <Stack direction='row' sx={{p:'2',position:'relative'}}>
   {equipmentExercises.length ?
    <HorizontalScrollbar data={targetMuscleExercises}/>
    :<Loader/> }
   </Stack>
   </Box>
  )
}

export default SimilarExercises