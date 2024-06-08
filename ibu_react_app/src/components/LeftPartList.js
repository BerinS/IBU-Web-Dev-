import React from 'react';
import Button from '@mui/material/Button';
import './LeftPartList.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



function LeftPartList({ assignCurrentComponent, selectedItem })  {
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
          <li className='list_item'>
            <div className='list_item_content'>
                <p>
                  {selectedItem ? (<p>{selectedItem.name}</p>):('CPU')}
                </p>
            </div>
            <div className='list_item_content'>
                <p>
                  {selectedItem ? (<p>{selectedItem.price}</p>):('$$$')}
                </p>
            </div>
            <div className='list_item_content'>
              <p>....</p>
            </div>
            <div className='list_item_content'>
              <Button variant="contained" onClick={() => assignCurrentComponent('CPU')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
            </div>
          </li>
          <li className='list_item'>
              <div className='list_item_content'>
              <p>
                  {selectedItem ? (<p>{selectedItem.name}</p>):('GPU')}
                </p>
              </div>
              <div className='list_item_content'>
              <p>
                  {selectedItem ? (<p>{selectedItem.price}</p>):('$$$')}
                </p>
              </div>
              <div className='list_item_content'>
                <p>....</p>
            </div>
            <div className='list_item_content'>
              <Button variant="contained" onClick={() => assignCurrentComponent('GPU')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
            </div>
          </li>
          <li className='list_item'>
              <div className='list_item_content'>
                  <p>Mobo</p>
              </div>
              <div className='list_item_content'>
                <p>$$$</p>
              </div>
              <div className='list_item_content'>
                <p>....</p>
              </div>
              <div className='list_item_content'>
                <Button variant="contained" onClick={() => assignCurrentComponent('Motherboard')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
              </div>
          </li>
          <li className='list_item'>
              <div className='list_item_content'>
                  <p>RAM</p>
              </div>
              <div className='list_item_content'>
                <p>$$$</p>
              </div>
              <div className='list_item_content'>
                <p>....</p>
              </div>
              <div className='list_item_content'>
                <Button variant="contained" onClick={() => assignCurrentComponent('RAM Kit')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
              </div>            
          </li>
          <li className='list_item'>
              <div className='list_item_content'>
                  <p>Case</p>
              </div>
              <div className='list_item_content'>
                <p>$$$</p>
              </div>
              <div className='list_item_content'>
                <p>....</p>              
              </div>
              <div className='list_item_content'>
                <Button variant="contained" onClick={() => assignCurrentComponent('Case')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
              </div>
          </li>
          <li className='list_item'>
              <div className='list_item_content'>
                  <p>PSU</p>
              </div>
              <div className='list_item_content'>
                <p>$$$</p>
              </div>
              <div className='list_item_content'>
                <p>....</p>
              </div>
              <div className='list_item_content'>
                <Button variant="contained" onClick={() => assignCurrentComponent('PSU')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
              </div>
          </li>
          <li className='list_item'>
              <div className='list_item_content'>
                  <p>Storage</p>
              </div>
              <div className='list_item_content'>
                <p>$$$</p>
              </div>
              <div className='list_item_content'>
                <p>....</p>
              </div>
              <div className='list_item_content'>
                <Button variant="contained" onClick={() => assignCurrentComponent('Storage')}>ADD <AddCircleOutlineIcon fontSize='small'/></Button>
              </div>
          </li>
        </ul>      
    </div>
  );
}

export default LeftPartList;


