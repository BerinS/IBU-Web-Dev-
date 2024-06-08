import React from 'react';
import { useState } from 'react';
import './BuildSection.css';
import LeftSection from './LeftSection.js';
import RightSection from './RightSection.js';
import RightPartList from './RightPartList.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftPartList from './LeftPartList.js';


function BuildSection() {  

  const [curComponent, setCurrentComponent] = useState('...');
  const [selectedItem, setSelectedItem] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  console.log("Total Price from Build Section: " + totalPrice);

  const assignCurrentComponent = (component) => {
    setCurrentComponent(component);
    console.log('Currently viewing: ' + component);
   
  };

  const handleAddItem = (name, price) => {
    console.log('Adding item:', name, price);
    setSelectedItem({ name, price });
    toast.success('Item added!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",      
      });
      
  };

  return (
    <div className="build-section">
      <LeftSection assignCurrentComponent={assignCurrentComponent} selectedItem={selectedItem} currentComponent={curComponent} setTotalPrice={setTotalPrice}/>
      <RightSection currentComponent={curComponent} onAddItem={handleAddItem} totalPrice={totalPrice}/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"       
        />
    </div>
  );
}

export default BuildSection;
