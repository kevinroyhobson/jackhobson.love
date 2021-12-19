import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileNavigation(props) {

  const [isMobileNavDrawerOpen, setIsMobileNavDrawerOpen] = useState(false);
  const drawerWidth = 90;

  let navigate = useNavigate();

  const handleDrawerToggle = () => {
    setIsMobileNavDrawerOpen(!isMobileNavDrawerOpen);
  };

  const handleLinkClick = (url) => {
    navigate(url);
    setIsMobileNavDrawerOpen(false);
  }

  return (

    <Box sx={{ display: 'flex' }}>

      <Toolbar>
        <IconButton color='inherit'
                    aria-label='open-navigation'
                    edge='start'
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none'} }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Box component='nav'
           sx={{ width: {sm: drawerWidth }, flexShrink: { sm: 0 }}}
           aria-label='navigation'>

        <Drawer variant='temporary'
                open={isMobileNavDrawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{ display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>

          <div>

            <Toolbar>
              <IconButton color='inherit'
                          aria-label='close-navigation'
                          edge='start'
                          onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
            <Divider />

            <List>

              <ListItem button>
                <ListItemText onClick={() => handleLinkClick('/')}>Jack</ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemText onClick={() => handleLinkClick('/story')}>Story</ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemText onClick={() => handleLinkClick('/eulogy')}>Eulogy</ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemText onClick={() => handleLinkClick('/legacy')}>Legacy</ListItemText>
              </ListItem>

            </List>
          </div>

        </Drawer>

      </Box>

    </Box>

  );
}


