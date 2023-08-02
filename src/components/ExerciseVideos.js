import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '10px' } }}>
      <Typography variant='h4' mb="33px">
        Watch <span style={{ color: "#8300c4", textTransform: "capitalize" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '50px', xs: '0' }
        }}
      >
        {Array.isArray(exerciseVideos) ? exerciseVideos.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box >
            <Typography varient='h5' color='#000'>
            {item.video.title}
            </Typography>
            <Typography varient='h6' color='#000'>
            {item.video.channelName}
            </Typography>
              
            </Box>
          </a>
        )) : null}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
