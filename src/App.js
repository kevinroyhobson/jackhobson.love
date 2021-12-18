import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Story from './Story';
import Legacy from './Legacy';
import Eulogy from './Eulogy';


function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/story' element={<Story />} />
          <Route path='/legacy' element={<Legacy />} />
          <Route path='/eulogy' element={<Eulogy />} />
          <Route path='*' element={<Navigate replace to='/' />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
