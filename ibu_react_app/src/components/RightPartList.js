import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataGridPremium, GridToolbar } from '@mui/x-data-grid-premium';


function RightPartList({ items, onAdd }) {
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'specification', headerName: 'Specification', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <IconButton onClick={() => onAdd(params.row.name, params.row.price)}>
          <AddCircleOutlineIcon fontSize='small' />
        </IconButton>
      ),
    },
  ];

  const rows = items.map((item, index) => ({
    id: index,
    name: item.name,
    price: item.price,
    specification: item.specification,
  }));

  return (
    <div>
      <DataGrid
        sx={{ '&, [class^=MuiDataGrid]': { border: 'none' } }}
        rows={rows}
        columns={columns}
        autoHeight        
        disableRowSelectionOnClick 
        slots={{ toolbar: GridToolbar }}
        pageSize={5}
      />
    </div>
  );
}

export default RightPartList;
