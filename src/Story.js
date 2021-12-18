import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import carmensFavorite from './img/carmens-favorite.jpg';
import kevinsFavorite from './img/kevins-favorite.jpg';
import daniellesFavorite from './img/danielles-favorite.jpg';
import laurasFavorite from './img/lauras-favorite.jpg';


export default function Story(props) {

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '3rem',
                          textTransform: 'uppercase' }}>
          Jack's Story
        </Typography>

      </Box>

      <Box sx={{ px: { xs: 1, md: '20%' }}}>

        <Typography sx={{ pt: 5, textAlign: 'left' }}>
          A beautiful baby boy named Jack was born on Monday, September 20, 2021 at 6:20pm under a full moon at Norwalk Hospital in Connecticut.
          Due to a difficult labor ending in a dramatic cesarian delivery, Jack came into the world with a sizable cut over his left eye.
          Kevin held the 7 lb, 13oz bundle of joy while Danielle shook off the general anaesthesia.
          Once Jack and Danielle were properly introduced, they were able to nurse briefly before Jack was taken away to have his scalpel injury stitched up by a plastic surgeon.
          The family had only settled into their postpartum recovery room for a couple of hours before a nurse noticed that baby Jack was not doing so well.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          Jack was transferred to Yale New Haven Children's Hospital in the wee hours of September 21 where he was diagnosed with a congenital heart defect called Transposition of the Great Arteries.
          The open-heart surgery Jack needed to save his life was not immediately feasible because he was also suffering from severe pulmonary hypertension.
          Over the next 24 days, Jack's doctors worked to stabilize him enough for the surgery.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          As Jack grew stronger, Kevin read to him from his namesake's autobiography -- Jackie Robinson's <i>I Never Had It Made</i>.
          Danielle drew illustrations of the animals waiting to meet Jack back at their home in Village Creek.
          The arterial switch surgery was performed on October 14, but Jack suffered a stroke in the days following the operation.
          On Tuesday, October 19 -- under the next full moon -- Jack went outside for the first time and died in his parents' arms.
          He was surrounded by the love of his parents, his grandparents and his dedicated care team.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          Jack was Kevin and Danielle's first child, and was the first grandchild of Laura, Ira, Sara and Geoff.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          He will be forever missed and always loved.
        </Typography>

      </Box>

      <Box sx={{pt: 5}}>

        <Grid container spacing={2}>

          <Grid item xs={12} md={3}>
            <img src={carmensFavorite} width='100%' alt="Carmen's favorite" />
          </Grid>

          <Grid item xs={12} md={3}>
            <img src={kevinsFavorite} width='100%' alt="Kevin's favorite"  />
          </Grid>

          <Grid item xs={12} md={3}>
            <img src={daniellesFavorite} width='100%' alt="Danielle's favorite"  />
          </Grid>

          <Grid item xs={12} md={3}>
            <img src={laurasFavorite} width='100%' alt="Laura's favorite"  />
          </Grid>

        </Grid>

      </Box>

    </Box>
  );
}
