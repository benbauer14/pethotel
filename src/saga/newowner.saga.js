import { ownerDocument } from '@material-ui/core';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postNewOwner(action) {

  try {
    yield axios.post( '/api/owners/', action.payload );
    yield put({ type:'FETCH_OWNERS'})
  } catch (error) {
    console.log('Owner POST request failed', error);
  }
}

function* newOwnerSaga() {
  yield takeLatest('POST_NEWOWNER', postNewOwner);
}

export default newOwnerSaga;