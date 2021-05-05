import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postNewPet(action) {

  try {
    yield axios.post('/api/pet/', { owner: action.owner, pet: action.pet, breed: action.breed, color: action.color, checkedin: action.checkedin});
  } catch (error) {
    console.log('Pet POST request failed', error);
  }
}

function* newpetSaga() {
  yield takeLatest('POST_NEWPET', postNewPet);
}

export default newpetSaga;