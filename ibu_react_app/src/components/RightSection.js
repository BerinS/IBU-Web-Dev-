import React, { useState, useEffect } from 'react';
import './RightSection.css';
import RightPartList from './RightPartList';
import CPU_Database from '../data/cpu.json'; 
import GPU_Database from '../data/video-card.json'; 
import MOBO_Database from '../data/motherboard.json'; 
import RAM_Database from '../data/memory.json'; 
import Case_Database from '../data/case.json'; 
import PSU_Database from '../data/power-supply.json'; 
import Storage_Database from '../data/internal-hard-drive.json'; 
import { Grid, Box } from '@mui/material';

function RightSection({ currentComponent, onAddItem, totalPrice }) {
  const [items, setItems] = useState([]);
  const ENTRIES_LIMIT = 500;


  useEffect(() => {
    if (currentComponent === 'CPU') {
      const fetchData = () => {
        
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = CPU_Database.slice(0, ENTRIES_LIMIT).map(cpu_record => ({
            name: cpu_record.name,
            price: cpu_record.price + '$',
            specification: cpu_record.boost_clock + ' GHz' 
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData();
    } 
    else if (currentComponent === 'GPU'){
      const fetchData = () => {
        
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = GPU_Database.slice(0, ENTRIES_LIMIT).map(gpu_record => ({
            name: gpu_record.name,
            price: gpu_record.price + '$',
            specification: 'VRAM ' +  gpu_record.memory + ' GB'
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData()
    }
    else if (currentComponent === 'Motherboard'){
      const fetchData = () => {
        
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = MOBO_Database.slice(0, ENTRIES_LIMIT).map(mobo_record => ({
            name: mobo_record.name,
            price: mobo_record.price + '$',
            specification: mobo_record.form_factor 
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData()
    }
    else if (currentComponent === 'RAM Kit'){
      const fetchData = () => {
        
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = RAM_Database.slice(0, ENTRIES_LIMIT).map(ram_record => ({
            name: ram_record.name,
            price: ram_record.price + '$',
            specification: ram_record.speed + ' MHz'
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData()
    }
    else if (currentComponent === 'Case'){
      const fetchData = () => {
        
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = Case_Database.slice(0, ENTRIES_LIMIT).map(case_record => ({
            name: case_record.name,
            price: case_record.price + '$',
            specification: case_record.type
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData()
    }
    else if (currentComponent === 'PSU'){
      const fetchData = () => {
        
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = PSU_Database.slice(0, ENTRIES_LIMIT).map(psu_record => ({
            name: psu_record.name,
            price: psu_record.price + '$',
            specification: psu_record.wattage + ' W'
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData()
    }
    else if (currentComponent === 'Storage'){
      const fetchData = () => {
        setTimeout(() => {
          // Filter or fetch data based on currentComponent
          const filteredData = Storage_Database.slice(0, ENTRIES_LIMIT).map(storage_record => ({
            name: storage_record.name,
            price: storage_record.price + '$',
            specification: storage_record.capacity + ' GB ' + storage_record.type
          }));
          setItems(filteredData);
        }, 400); 
      };

      fetchData()
    }
    else {
      setItems([]);
    }
  }, [currentComponent]);

  return (
    <div className="right-section">
      <Grid container>
        <Grid item xs={12} className='right_heading'>
          <h1>Choose a {currentComponent}</h1>
        </Grid>

        <Grid item xs={12}>
          <div className='right_part_list_container'>
            <RightPartList items={items}  onAdd={onAddItem}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className = 'count'>
            <h1>Total Price: </h1>
            <h2>{totalPrice + '$'} </h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default RightSection;
