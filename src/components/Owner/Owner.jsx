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
        //{ field: 'count', headerName: 'Count', width: 90 },
        { field: 'name', headerName: 'Name', width: 130 },
    ];
    
    if(!Array.isArray(owners)){
    return (
        <>
            <AddOwner />
            <p>Loading ...</p>
        </>
    )
    } else {
        return ( 
            <>
                <div style={{ height: 400, width: '100%' }}>
                    <AddOwner />
                    {/* <p>{JSON.stringify(owners)}</p> */}
                    <DataGrid rows={owners} columns={columns} pageSize={5} checkboxSelection />
                    
                </div>
            </>
        )
    }
}

export default Owner;