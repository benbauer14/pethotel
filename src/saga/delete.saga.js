import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deletePetSaga(action) {

  try {
    yield axios.delete('/api/pets/', action.payload );
    yield put({ type:'FETCH_PET'})
  } catch (error) {
    console.log('Pet DELETE request failed', error);
  }
}


function* deletePet() {
  yield takeLatest('DELETE_PET', deletePetSaga);
}

export default deletePet;