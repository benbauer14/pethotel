import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Owner(props) {

const pets = useSelector((store) => store.pets)
const dispatch = useDispatch()

const getPets = () => {
    dispatch({type:'FETCH_PET'})
}

    return (
    <div>
        <h2>This is Owner</h2>
        <button onClick={() => {getPets()}}>Click Me</button>
        {JSON.stringify(pets)}
    </div>
    );
}

export default Owner;