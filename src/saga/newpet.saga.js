import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postNewPet(action) {

  try {

    const response = yield axios.post('/api/chat/?pet=' + action.pet + '&owner=' + action.owner);
  } catch (error) {
    console.log('Pet POST request failed', error);
  }
}


function* messagesSaga() {
  yield takeLatest('POST_NEWPET', postNewPet);
}

export default messagesSaga;