import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import BuildSection from './components/BuildSection.js';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import {createTheme, ThemeProvider} from '@mui/material';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary:{
      main: '#0f2561'
    }
  },
  typography:{
    fontFamily: 'Lato',
    fontWeightLight: 400
  }

})

function App() {

  return (
    <div className="App">      
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
            <Routes>
              <Route path="/" element={<BuildSection />} />              
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </ThemeProvider>
      </BrowserRouter>          
  </div>
  );
}



export default App;
