import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Home from './Home';
import Story from './Story';
import Legacy from './Legacy';
import Eulogy from './Eulogy';
import Navigation from './Navigation';


function App() {

  ReactGA.initialize('G-YXC1S3LN8R');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#004080'
      },
    },
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    }
  });

  return (
    <div className="App">

      <ThemeProvider theme={theme}>

        <BrowserRouter>

          <Navigation />

          <Box sx={{ pt: 8 }}></Box>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/story' element={<Story />} />
            <Route path='/legacy' element={<Legacy />} />
            <Route path='/eulogy' element={<Eulogy />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>

        </BrowserRouter>

      </ThemeProvider>

    </div>
  );
}

export default App;
