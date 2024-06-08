import React from 'react';
import { useState } from 'react';
import './BuildSection.css';
import LeftSection from './LeftSection.js';
import RightSection from './RightSection.js';
import RightPartList from './RightPartList.js';


function BuildSection() {  

  const [curComponent, setCurrentComponent] = useState('...');
  const [selectedItem, setSelectedItem] = useState({
    CPU: null,
    GPU: null,
    Motherboard: null,
    RAM: null,
    Case: null,
    PSU: null,
    Storage: null,
  });

  const assignCurrentComponent = (component) => {
    setCurrentComponent(component);
    console.log('Currently viewing: ' + component);
  };

  const handleAddItem = (name, price) => {
    console.log('Adding item:', name, price);
    setSelectedItem({ name, price });
  };

  return (
    <div className="build-section">
      <LeftSection assignCurrentComponent={assignCurrentComponent} selectedItem={selectedItem} />
      <RightSection currentComponent={curComponent} onAddItem={handleAddItem}/>
    </div>
  );
}

export default BuildSection;
