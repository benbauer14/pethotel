import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';

function Pet(props) {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'owner', headerName: 'Owner', width: 130 },
    { field: 'pet', headerName: 'Pet', width: 130 },
    { field: 'breed', headerName: 'Breed', width: 130 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'checkedin', headerName: 'Checked In', width: 130 },
    { field: 'actions', headerName: 'Actions', width: 200 },
  ];
  
  const rows = [
    { id: '1', owner: 'Chris', pet: 'Charlie', breed: 'Shih-tzu', color: 'Black', checkedin: 'no', actions: 'Delete | Check Out'},
    { id: '2', owner: 'Chris', pet: 'Thorin', breed: 'Rabbit', color: 'White', checkedin: 'no', actions: 'Delete | Check Out'},
    { id: '3', owner: 'asdf', pet: 'sdf', breed: 'sdfasdf', color: 'asdf', checkedin: 'no', actions: 'Delete | Check Out'},
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default Pet;