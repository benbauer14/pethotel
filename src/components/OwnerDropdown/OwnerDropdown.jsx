import React from 'react'
import { 
    FormControl,
    InputLabel,
    Select, 
    } from '@material-ui/core/';

const OwnerDropdown = ( { owners, handleOwner }) => {

    if(!Array.isArray(owners)){
        return(<p>Loading...</p>)
    }else{
        return (
        <>
        <FormControl>
            <InputLabel>Owner</InputLabel>
            <Select onChange={handleOwner} color="secondary" label="state">
                <option value='' />
                { owners.map( ( owner )=> <option value={owner.id} key={owner.id} >{owner.name}</option>) }
            </Select>
        </FormControl>
        </>
        )
}
}

export default OwnerDropdown
