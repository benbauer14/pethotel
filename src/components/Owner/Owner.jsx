import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AddOwner from '../AddOwner/AddOwner';

function Owner(props) {

    return (
    <div>
        <h2>This is Owner</h2>
        <AddOwner />
    </div>
    );
}

export default Owner;