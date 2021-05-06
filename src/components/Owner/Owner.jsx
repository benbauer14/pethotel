import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AddOwner from '../AddOwner/AddOwner';
import { DataGrid } from '@material-ui/data-grid';

function Owner(props) {
    //needed for dispatch
    const dispatch = useDispatch()
    //run GET route on load
    useEffect( ()=>{
        dispatch({ type: 'FETCH_OWNERS'})
    }, [] )
    //get owners from redux store
    const owners = useSelector( ( store )=>{
        return store.ownerReducer;
    })
    //to rows
    const rows = owners;
    //data grid columns
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'owner', headerName: 'Owner', width: 130 },
    ];

    return (
    <div>
        <h2>This is Owner</h2>
        <AddOwner />
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    );
}

export default Owner;