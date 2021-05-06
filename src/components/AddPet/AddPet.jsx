import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Typography, Textfield, Button } from '@material-ui/core'

const AddPet = () => {
    //to dispatch
    const dispatch = useDispatch();
    //set local state for pet object
    const [ tempPet, setTempPet ] = useState({});

    const handlePetName = ( event ) =>{
        setTempPet( {...tempPet, pet: event.target.value } )
    }

    const handlePetColor = ( event ) =>{
        setTempPet( {...tempPet, color: event.target.value } )
    }

    const handlePetBreed = ( event ) =>{
        setTempPet( {...tempPet, breed: event.target.value } )
    }

    const handleOwner = ( event ) =>{
        setTempPet( {...tempPet, owner: event.target.value } )
    }

    const addPet = ( petObject ) =>{
        dispatch({ type: 'POST_NEWPET', payload: petObject })
    }

    //    { id: '1', owner: 'Chris', pet: 'Charlie', breed: 'Shih-tzu', color: 'Black', checkedin: 'no', actions: 'Delete | Check Out'},

    return (
        <>
            <input type="text" placeholder="Pet Name" onChange={handlePetName} />
            <input type="text" placeholder="Pet Color" onChange={handlePetColor} />
            <input type="text" placeholder="Pet Breed" onChange={handlePetBreed} />
            <select onChange={handleOwner}>
                <option value=''></option>
                <option>Joel</option>
                <option>Ben</option>
                <option>Pat</option>
            </select>
            <button onClick={()=>addPet( tempPet )}>Add</button>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={()=>addPet( tempPet )}
            >
            Add
            </Button>
        </>
    )
}

export default AddPet
