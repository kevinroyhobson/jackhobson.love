import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import footprint from './img/footprint.png';
import heartDrawing from './img/heart-drawing.png';


export default function Legacy(props) {

  return (
    <Box sx={{ px: { xs: 1, md: '20%' }}}>
      <Box>
        <Typography sx={{ fontSize: '3rem',
                          textTransform: 'uppercase' }}>
          Jack's Legacy
        </Typography>

      </Box>

      <Box>

        <Typography sx={{ pt: 5, textAlign: 'left' }}>
          Kevin and I had a very difficult entry into the world of parenthood. During the 29 days Jack was in the
          hospital, we put all of our effort into being his best possible advocates. We learned the intricate details of
          his medical conditions by asking countless questions of dozens of doctors. We had to learn how to parent a
          newborn who we could not hold or feed, but who we could surround with the sound of our voices and the strength
          and love of our spirits. We attended to his needs in response to the beeps of his vitals monitors rather than
          the sound of his cries. We helped the nurses change and bath him while trying not to disrupt the critical IVs
          and equipment surrounding him. Bonding for us involved a lot of finger holding and intense eye contact in
          those moments that he was awake and alert. We pushed ourselves to stay positive and hopeful throughout it all.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          Today we find ourselves as bereaved parents struggling to come to terms with our new reality. How do we
          continue to parent a child whose crib is empty and whose diapers go unused? How do we honor the life he had
          and carry him with us into our future? What can we do to prevent this from happening to others or to help
          anyone who finds themselves in a similar situation?
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          We are fortunate to be surrounded by an incredible collection of family and friends who have reached out with
          support in the days since Jack's death. We ask that you always remember him and do not hesitate to speak of
          him in the days and years to come.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          Jack will always be our first child and an important presence in our family.
        </Typography>

        <Typography sx={{ pt: 3, textAlign: 'left' }}>
          Donations can be made in Jack's name to the following charities:
        </Typography>

        <Box sx={{ pt: 3 }}>

          <Typography sx={{ pb: 1, textAlign: 'left'}}>
            <Link href='https://www.childrensheartfoundation.org/'
                  target='_blank'
                  rel='noopener'
                  underline='hover'>
              The Children's Heart Foundation
            </Link>:
            advancing the diagnosis, treatment and prevention of congenital heart defects by funding the most promising research.
          </Typography>

          <Typography sx={{ pb: 1, textAlign: 'left' }}>
            <Link href='https://www.rmhc-ctma.org/'
                  target='_blank'
                  rel='noopener'
                  underline='hover'>
              Ronald McDonald House Charities of Connecticut and Western Massachusetts
            </Link>:
            providing a home-away-from-home for families who must travel far for their child's healthcare.
          </Typography>

          <Typography sx={{ pb: 1, textAlign: 'left' }}>
            <Link href='https://mendedhearts.org/about-us/about-mended-little-hearts/'
                  target='_blank'
                  rel='noopener'
                  underline='hover'>
              Mended Little Hearts
            </Link>:
            providing hope and support to "the littlest heart patients of all" and their families.
          </Typography>

          <Typography sx={{ pb: 1, textAlign: 'left' }}>
            <Link href='https://www.hopeafterloss.org/'
                  target='_blank'
                  rel='noopener'
                  underline='hover'>
              Hope After Loss
            </Link>:
            helping those who experience pregnancy or infant loss to find the inspiration of hope by providing
            connections, comfort and care.
          </Typography>

        </Box>

      </Box>

      <Box sx={{ pt: {'xs': 1, 'md': 5 }}}>

        <Grid container spacing={2}>

          <Grid item xs={12} md={5.5}>
            <img src={footprint} width='100%' alt="Jack's footprint" />
          </Grid>

          <Grid item xs={0} md={1}></Grid>

          <Grid item xs={12} md={5.5}>
            <Box sx={{pt: {'md': 6}}}>
              <img src={heartDrawing} width='100%' alt="Not Jack's heart"/>
            </Box>
          </Grid>

        </Grid>

      </Box>

    </Box>
  );
}
