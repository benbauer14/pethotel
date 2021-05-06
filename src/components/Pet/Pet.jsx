import AddPet from '../AddPet/AddPet';
import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Pet(props) {

const pets = useSelector((store) => store.pets)
const dispatch = useDispatch()

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'owner', headerName: 'Owner', width: 130 },
    { field: 'pet', headerName: 'Pet', width: 130 },
    { field: 'breed', headerName: 'Breed', width: 130 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'checkedin', headerName: 'Checked In', width: 130 },
    { field: 'actions', headerName: 'Actions', width: 200 },
  ];
  
  const rows = pets;

  const getPets = () => {
    dispatch({type:'FETCH_PET'})
  }

  useEffect(() => {getPets();}, []);

  if(!Array.isArray(pets)){
    return(<p>Loading...</p>)
  }else{
    return (
      <>
      <div style={{ height: 400, width: '100%' }}>
        <AddPet />
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
      </>
    );
  }
}

export default Pet;