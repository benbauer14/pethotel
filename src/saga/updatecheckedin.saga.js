import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* updateCheckedInSaga(action) {

  try {
    yield axios.put('/api/pets/', action.payload);
    yield put({ type:'FETCH_PET'})
  } catch (error) {
    console.log('CHECKED IN PUT request failed', error);
  }
}


function* updateCheckedIn() {
  yield takeLatest('UPDATE_CHECKEDIN', updateCheckedInSaga);
}

export default updateCheckedIn;