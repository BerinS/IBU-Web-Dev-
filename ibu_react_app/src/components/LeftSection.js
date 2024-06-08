import React from 'react';
import LeftPartList from './LeftPartList';
import PC_Scheme from './pc_scheme';
import './LeftSection.css';

function LeftSection({ assignCurrentComponent, selectedItem, setSelectedItem , currentComponent, setTotalPrice}) {
  return (
    <div className="left-section">   
      <PC_Scheme />
      <div className='heading'>
        <h1>Choose your PC parts:</h1>
      </div>
      
      <LeftPartList assignCurrentComponent={assignCurrentComponent} selectedItem={selectedItem} setSelectedItem={setSelectedItem} currentComponent={currentComponent} setTotalPrice={setTotalPrice}/>
      
    </div>
  );
}

export default LeftSection;
