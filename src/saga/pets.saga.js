import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getPet() {

  try {
    const response = yield axios.get('/api/pets');
    yield put({ type:'SET_PETS', payload: response.data})
  } catch (error) {
    console.log('Pet GET request failed', error);
  }
}


function* getSaga() {
  yield takeLatest('FETCH_PET', getPet);
}

export default getSaga;