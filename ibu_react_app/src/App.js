import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import BuildSection from './components/BuildSection.js';


function App() {

  return (
    <div className="container">
      <Navbar />
      <BuildSection />      
  </div>
  );
}



export default App;
