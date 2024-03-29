import React from 'react';
import shuffle from 'shuffle-array';

import jackContemplative from './img/jack-contemplative.jpg';
import jacksDadIsConcerned from './img/jacks-dad-is-concerned.jpg';
import jackHearsAboutHisNamesake from './img/jack-hears-about-his-namesake.jpg';
import jackIsASoxFan from './img/jack-is-a-sox-fan.jpg';
import jackLookingLikeRocky from './img/jack-looking-like-rocky.jpg';
import jackLovesHisMom from './img/jack-loves-his-mom.jpg';
import jackMakesContact from './img/jack-makes-contact.jpg';
import jackMeditates from './img/jack-meditates.jpg';
import jackMeetsHisGrandparents from './img/jack-meets-his-grandparents.jpg';
import jacksParentsAreTired from './img/jacks-parents-are-tired.jpg';
import jackReads from './img/jack-reads.jpg';
import jackTakesASelfie from './img/jack-takes-a-selfie.jpg';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';

// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home(props) {

  let images = [
    {src: jacksDadIsConcerned, alt: "Jack's dad is concerned"},
    {src: jackHearsAboutHisNamesake, alt: "Jack hears about his namesake"},
    {src: jackIsASoxFan, alt: "Jack is a Sox fan"},
    {src: jackLookingLikeRocky, alt: "Jack looks like Rocky"},
    {src: jackLovesHisMom, alt: "Jack loves his mom"},
    {src: jackMakesContact, alt: "Jack makes contact"},
    {src: jackMeditates, alt: "Jack meditates"},
    {src: jackMeetsHisGrandparents, alt: "Jack meets his grandparents"},
    {src: jacksParentsAreTired, alt: "Jack's parents are tired"},
    {src: jackReads, alt: "Jack reads"},
    {src: jackTakesASelfie, alt: "Jack takes a selfie"}
  ];

  shuffle(images);
  images.unshift({src: jackContemplative, alt: "Jack is contemplative"});

  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: { xs: '3rem', sm: '3rem', lg: '4rem' } }}>
          Jack Robert Hobson
        </Typography>

        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '1.5rem', lg: '2rem' } }}>
          September 20 - October 19, 2021
        </Typography>
      </Box>

      <Box sx={{pt: { xs: 0, sm: 3 },
                pb: 3 }}>
        <Carousel autoPlay={true}
                  interval={5000}
                  infiniteLoop={true}
                  stopOnHover={false}
                  showThumbs={false}
                  showStatus={false}
                  useKeyboardArrows={true}
                  emulateTouch={true}>

          {images.map(image => {
            return (
              <Box sx={{height: {xs: '45vh', sm: '70vh'} }}>
                <img src={image.src} alt={image.alt} style={{objectFit: 'contain'}} height='100%' />
              </Box>
            );
          })}
        </Carousel>
      </Box>

      <Box>
        <Typography>
          "It is only with the heart that one can see rightly; what is essential is invisible to the eye."
        </Typography>
        <Typography>
          --Antoine de Saint-Exupéry, <i>The Little Prince</i>
        </Typography>
      </Box>

    </Box>
  );
}
