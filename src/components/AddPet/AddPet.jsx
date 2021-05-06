import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Typography, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

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
            label: 'True',
        },
        {
            value: 'False',
            label: 'False',
        },
    ];

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

    //    { id: '1', owner: 'Chris', pet: 'Charlie', breed: 'Shih-tzu', color: 'Black', checkedin: 'no', actions: 'Delete | Check Out'},

    return (
        <>
            <form className={classes.root} noValidate>
            <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size= 'medium'
                    fullwidth
                    id="owner"
                    label="Owner"
                    autoFocus
                    onChange={handleOwner}
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

                <TextField
                    id="pet-checked-in"
                    select
                    label="Select"
                    value={checkedIn}
                    onChange={handleCheckIn}
                    helperText="Pet Checked In"
                    variant="outlined"
                >
                    {checkedIn.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                </form>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={()=>addPet( tempPet )}
                    >
                    Add
                </Button>
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
        </>
    )
}

export default AddPet
