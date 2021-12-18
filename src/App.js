import React from 'react';
import shuffle from 'shuffle-array';

import jackContemplative from './img/jack-contemplative.jpg';
import jackHearsAboutHisNamesake from './img/jack-hears-about-his-namesake.jpg';
import jackIsASoxFan from './img/jack-is-a-sox-fan.jpg';
import jackLookingLikeRocky from './img/jack-looking-like-rocky.jpg';
import jackLovesHisMom from './img/jack-loves-his-mom.jpg';
import jackMakesContact from './img/jack-makes-contact.jpg';
import jackMeetsHisGrandparents from './img/jack-meets-his-grandparents.jpg';
import jacksParentsAreTired from './img/jacks-parents-are-tired.jpg';
import jackTakesASelfie from './img/jack-takes-a-selfie.jpg';
import './App.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Carousel } from "react-responsive-carousel";

// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


function App() {

  let images = [
    {src: jackHearsAboutHisNamesake, alt: "Jack hears about his namesake"},
    {src: jackIsASoxFan, alt: "Jack is a Sox fan"},
    {src: jackLookingLikeRocky, alt: "Jack looks like Rocky"},
    {src: jackLovesHisMom, alt: "Jack loves his mom"},
    {src: jackMakesContact, alt: "Jack makes contact"},
    {src: jackMeetsHisGrandparents, alt: "Jack meets his grandparents"},
    {src: jacksParentsAreTired, alt: "Jack's parents are tired"},
    {src: jackTakesASelfie, alt: "Jack takes a selfie"}
  ];

  shuffle(images);
  images.unshift({src: jackContemplative, alt: "Jack is contemplative"});

  return (
    <div className="App">

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

          <Box sx={{py: 3}}>
            <Carousel autoPlay={true}
                      interval={5000}
                      infiniteLoop={true}
                      stopOnHover={false}
                      showThumbs={false}
                      useKeyboardArrows={true}
                      emulateTouch={true}>

              {images.map(image => {
                return (
                  <Box sx={{height: '75vh'}}>
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

    </div>
  );
}

export default App;
