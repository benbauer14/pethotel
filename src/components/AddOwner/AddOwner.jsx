import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

const AddOwner = () => {
    //needed for dispatch
    const dispatch = useDispatch();
    //local state for owner
    const [ tempOwner, setTempOwner ] = useState( {} );
    //needed to handle input
    const handleOwner = ( event ) =>{
        setTempOwner( { ...tempOwner, name: event.target.value })
    }
    //send to saga for POST
    const addOwner = ( ownerObject ) =>{
        dispatch( { type:'POST_NEWOWNER', payload: ownerObject })
    }

    return (
        <>
            <h2>Add Owner</h2>
            <input type="text" placeholder="Owner" value={tempOwner.name} onChange={handleOwner} />
            <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={()=>addOwner( tempOwner )}
            >
            Submit
            </Button>
        </>
    )
}

export default AddOwner
