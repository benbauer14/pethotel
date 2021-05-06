import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Typography, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
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
            <form className={classes.root} noValidate>
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
                </form>
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
