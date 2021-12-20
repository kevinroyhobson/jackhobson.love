import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import _ from 'lodash';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';

import moon from './img/moon-work.png';


export default function DesktopNavigation(props) {

  const navigate = useNavigate();

  const links = [
    { name: 'Jack', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Eulogy', path: '/eulogy' },
    { name: 'Legacy', path: '/legacy' }
  ];

  const handleChange = (event, newValue) => {
    navigate(links[newValue].path);
  };

  let currentPath = useLocation().pathname;
  let activeLinkIndex = _.filter([0, 1, 2, 3], index => links[index].path === currentPath)[0];

  return (

    <Box sx={{ position: 'fixed',
               width: '100%',
               display: 'flex',
               backgroundColor: '#bad0e8',
               boxShadow: 3 }}>

      <Box sx={{ pt: '1px', mx: 2, cursor: 'pointer' }}
           onClick={() => navigate('/')}>
        <img src={moon} height={44} alt='The moon'/>
      </Box>

      <Box sx={{ pt: 1.85,
                 px: 1 }}>
        <Link color='primary'
              underline='never'
              sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => navigate('/')}>
          jackhobson.love
        </Link>
      </Box>

      <Box sx={{ marginLeft: 'auto',
                 px: 2 }}>
        <Tabs value={activeLinkIndex} onChange={handleChange}>
          {links.map(link => {
            return (
              <Tab label={link.name} sx={{ textTransform: 'none',
                                           fontSize: 16,
                                           fontWeight: 'bold' }} />
            );
          })
          }

        </Tabs>

      </Box>

    </Box>
  );
}


