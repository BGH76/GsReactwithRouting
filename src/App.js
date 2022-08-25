import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blue from './pages/Blue';
import Green from './pages/Green';
import Red from './pages/Red';
import Yellow from './pages/Yellow';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/red' exact element={<Red />} />
          <Route path='/blue' exact element={<Blue />} />
          <Route path='/green' exact element={<Green />} />
          <Route path='/yellow' exact element={<Yellow />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
