import React from "react";
import './pc_scheme.css';
import PcCaseImage from '../images/pc_case_side_view.png';

function PC_Scheme(){
  return(
    <div className='pc_scheme'>
      <img src={PcCaseImage} ></img> 
    </div>
  );
}

export default PC_Scheme;
