import React, { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import './LeftPartList.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import random from 'random';


function LeftPartList({ assignCurrentComponent, selectedItem, currentComponent, setTotalPrice }) {
  let store = '.......';
  const stores = ['Amazon.com', 'Ebay.com', 'NewEgg.com', 'Target.com'];
  const [components, setComponents] = useState({
    CPU: { name: 'CPU', price: '$$$' },
    GPU: { name: 'GPU', price: '$$$' },
    Motherboard: { name: 'Motherboard', price: '$$$' },
    'RAM Kit': { name: 'RAM Kit', price: '$$$' },
    Case: { name: 'Case', price: '$$$' },
    PSU: { name: 'PSU', price: '$$$' },
    Storage: { name: 'Storage', price: '$$$' },
  });

  const previousSelectedItem = useRef(selectedItem);

  useEffect(() => {
    if (selectedItem && currentComponent) {
      if (selectedItem.name !== previousSelectedItem.current.name || selectedItem.price !== previousSelectedItem.current.price) {
        setComponents((prevComponents) => ({
          ...prevComponents,
          [currentComponent]: { name: selectedItem.name, price: selectedItem.price,  store: random.choice(stores)},
          
        }));        
      }
      previousSelectedItem.current = selectedItem;
    }
  }, [selectedItem, currentComponent]);

  useEffect(() => {
    // We calc total price
    const total = Object.values(components).reduce((acc, component) => {
      // Extract number
      const numericPrice = parseFloat(component.price.replace(/[^\d.]/g, ''));
      
      if (!isNaN(numericPrice)) {
        return acc + numericPrice;
      }
      return acc;
    }, 0);
    setTotalPrice(total);
    console.log('Total Price:', total);
  }, [components, setTotalPrice]);

  return (
    <div className="left-part-list">
      <ul>
        <li className='list_item_meaning'>
          <div className='list_item_content'>
            <p>Component</p>
          </div>
          <div className='list_item_content'>
            <p>Price</p>
          </div>
          <div className='list_item_content'>
            <p>Where?</p>
          </div>
          <div className='list_item_content'>
            <p>Add</p>
          </div>
        </li>
        {Object.keys(components).map((componentKey) => (
          <li key={componentKey} className='list_item'>
            <div className='list_item_content'>
              <p>{components[componentKey].name}</p>
            </div>
            <div className='list_item_content'>
              <p>{components[componentKey].price}</p>
            </div>
            <div className='list_item_content'>
              <p>{components[componentKey].store}</p>
            </div>
            <div className='list_item_content'>
              <Button variant="contained" onClick={() => assignCurrentComponent(componentKey)}>
                ADD <AddCircleOutlineIcon fontSize='small' />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftPartList;