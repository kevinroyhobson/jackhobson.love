import React from 'react';


import jackPhoto1 from './img/jack-photo-1.jpg';
import './App.css';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">

      <Grid container>

        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8}>

          <Box>
            <Typography sx={{ fontSize: '3rem',
                              textTransform: 'uppercase' }}>
              Jack Robert Hobson
            </Typography>

            <Typography sx={{ fontSize: '2rem',
                              textTransform: 'uppercase' }}>
              September 20 - October 19, 2021
            </Typography>
          </Box>

          <img src={jackPhoto1} width={'100%'} />

          <Box xs={{ pt: 3 }}>
            <Typography sx={{ fontSize: '1rem' }}>
              "It is only with the heart that one can see rightly; what is essential is invisible to the eye."
            </Typography>
            <Typography sx={{ fontSize: '1rem' }}>
              Antoine de Saint-Exupéry, <i>The Little Prince</i>
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={1} md={2} lg={3}></Grid>


      </Grid>


    </div>
  );
}

export default App;
