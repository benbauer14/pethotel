import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getOwnerName() {

  try {
    const response = yield axios.get('/api/owners/');
    yield put({ type:'SET_OWNERS', payload: response.data})
  } catch (error) {
    console.log('OWNER GET request failed', error);
  }
}


function* getOwner() {
  yield takeLatest('FETCH_OWNERS', getOwnerName);
}

export default getOwner;