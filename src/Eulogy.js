import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import theSound from './img/the-sound.jpg';


export default function Eulogy(props) {

  return (
    <Box sx={{ position: 'fixed',
               top: 0,
               bottom: 0,
               left: 0,
               right: 0}}>

      <img src={theSound} height='100%' width='100%' style={{objectFit: 'cover'}} alt="Green's Ledge Light" />

      <Box sx={{position: 'absolute',
                left: '45%',
                right: '5%',
                top: '25%',
                backgroundColor: 'rgba(140, 157, 175, 0.6)',
                p: 2,
                borderRadius: 2 }}>

        <Typography sx={{ textAlign: 'right' }}>
          10/28/21
        </Typography>

        <Typography sx={{ pb: 1.5, textAlign: 'left' }}>
          Jack --
        </Typography>

        <Typography sx={{ pb: 1.5, textAlign: 'left' }}>
          I'm so sorry that you were dealt such an unfair hand. I'm sorry that we didn't get to spend more time together.
          I'm sorry that you never got to experience the good things the world has to offer -- the things that make
          life worth living. You deserved better. And so we're scattering part of your ashes out here on The Sound, in
          nature -- one of those good things you can enjoy.
        </Typography>

        <Typography sx={{ pb: 1.5, textAlign: 'left' }}>
          I also want to say thank you. I am so grateful for the time we were able to spend together as a family.
          Enjoying that time so immensely, while also feeling the paralyzing fear of what was waiting around every next
          corner, seared into me how precious moments of happiness and togetherness are. They are everything. And so the
          other part of your ashes will stay with us in our home -- first, as a reminder of how important it is to be
          present in those precious, fleeting moments -- but also so that as your mother and I continue to grow our
          family you will always be with us as a part of that journey -- never forgotten.
        </Typography>

        <Typography sx={{ pb: 1.5, textAlign: 'left' }}>
          My Super Strong Baby Jack! You were such an impressive little guy. You faced incredible adversity, and you
          kept fighting right down to the bitter end. I could not be more proud of you.
        </Typography>

        <Typography sx={{ pb: 1.5, textAlign: 'left' }}>
          I love you and I'll miss you always.
        </Typography>

        <Typography sx={{ textAlign: 'left', textIndent: '55%' }}>
          -Dad
        </Typography>

      </Box>

    </Box>
  );
}
