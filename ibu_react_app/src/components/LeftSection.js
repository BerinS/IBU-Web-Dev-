import React from 'react';
import LeftPartList from './LeftPartList';
import PC_Scheme from './pc_scheme';
import './LeftSection.css';

function LeftSection({ assignCurrentComponent, selectedItem }) {
  return (
    <div className="left-section">   
      <PC_Scheme />
      <div className='heading'>
        <h1>Choose your PC parts:</h1>
      </div>
      
      <LeftPartList assignCurrentComponent={assignCurrentComponent} selectedItem={selectedItem}/>
      
    </div>
  );
}

export default LeftSection;
