import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import OwnerDropdown from '../OwnerDropdown/OwnerDropdown';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '20ch',
        },
      },
    }));

const AddPet = () => {
    // for styles
    const classes = useStyles();
    //to dispatch
    const dispatch = useDispatch();
    //set local state for pet object
    const [ tempPet, setTempPet ] = useState({});

    //for the checked in option
    const checkedIn = [
        {
            value: 'True',
            label: 'Checked In',
        },
        {
            value: 'False',
            label: 'Checked Out',
        },
    ];
    //handle inputs
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

    const handleCheckIn = ( event ) =>{
        setTempPet( {...tempPet, checkedIn: event.target.value } )
    }

    const addPet = ( petObject ) =>{
        dispatch({ type: 'POST_NEWPET', payload: petObject })
    }

    //get owner data from redux for dropdown
    const owners = useSelector( ( store )=>{
        return store.ownerReducer
    })

    //    { id: '1', owner: 'Chris', pet: 'Charlie', breed: 'Shih-tzu', color: 'Black', checkedin: 'no', actions: 'Delete | Check Out'},

    return (
        <>
            <form className={classes.root} noValidate>

            <OwnerDropdown
                    owners ={owners}
                    handleOwner={handleOwner}
                />
            <TextField

                    variant="outlined"
                    margin="normal"
                    required
                    size= 'medium'
                    fullwidth
                    id="petname"
                    label="Pet Name"
                    autoFocus
                    onChange={handlePetName}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size= 'medium'
                    fullwidth
                    id="petcolor"
                    label="Pet Color"
                    autoFocus
                    onChange={handlePetColor}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size= 'medium'
                    fullwidth
                    id="petbreed"
                    label="Pet Breed"
                    autoFocus
                    onChange={handlePetBreed}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={()=>addPet( tempPet )}
                    >
                    Add
                </Button>
                </form>
            {/* <input type="text" placeholder="Pet Name" onChange={handlePetName} />
            <input type="text" placeholder="Pet Color" onChange={handlePetColor} />
            <input type="text" placeholder="Pet Breed" onChange={handlePetBreed} />
            <select onChange={handleOwner}>
                <option value=''></option>
                <option>Joel</option>
                <option>Ben</option>
                <option>Pat</option>
            </select>
            <button onClick={()=>addPet( tempPet )}>Add</button> */}
        </>
    )
}

export default AddPet
