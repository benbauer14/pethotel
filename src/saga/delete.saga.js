import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deletePetSaga(action) {

  try {
    console.log( 'payload:', action.payload )
    yield axios.delete('/api/pets/' + action.payload.id );
    yield put({ type:'FETCH_PET'})
  } catch (error) {
    console.log('Pet DELETE request failed', error);
  }
}


function* deletePet() {
  yield takeLatest('DELETE_PET', deletePetSaga);
}

export default deletePet;