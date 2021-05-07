import AddPet from '../AddPet/AddPet';
import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Pet(props) {

const pets = useSelector((store) => store.pets)
const [newPets, setNewPet] = useState([])
const dispatch = useDispatch()

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Owner', width: 130 },
    { field: 'pet', headerName: 'Pet', width: 130 },
    { field: 'breed', headerName: 'Breed', width: 130 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'checkedin', headerName: 'Checked In', width: 130 },
    {
      field: "action",
      width: 260,
      headerName: "Action",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
  
          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          if(thisRow.checkedin === true){
            console.log('in true')
            return dispatch({type: 'UPDATE_CHECKEDIN', payload: {id: thisRow.id, checkedin: false} })
          }else{
            console.log('in false')
            return dispatch({type: 'UPDATE_CHECKEDIN', payload: {id: thisRow.id, checkedin: true} })
          }

        };

        const onDelete = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
  
          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });

            return dispatch({type: 'DELETE_PET', payload: {id: thisRow.id, pet: thisRow.pet} })

        };

        if(pets.checkedin === false){
        return <><p><button onClick={onClick}>CheckIn</button></p><p><button onClick={onDelete}>Delete</button></p></>;
        }else{
          return <><p><button onClick={onClick}>CheckOut</button></p><p><button onClick={onDelete}>Delete</button></p></>;
        }
      }
    }
  ];
  
  const rows = pets;

  const fireoff = (id) => {
    dispatch({type: 'UPDATE_CHECKEDIN', payload: {id: id, checkedin: true} });
  }

  const getPets = () => {
    dispatch({type:'FETCH_PET'})
}

  useEffect(() => {getPets();}, []);

  if(!Array.isArray(pets)){
    return(
      <>
        <AddPet />
        <p>Loading...</p>
      </>
    )
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