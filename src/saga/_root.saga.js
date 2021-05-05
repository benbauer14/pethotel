import { all } from 'redux-saga/effects';
import newpetSaga from './newpet.saga'
import pets from './pets.saga'

export default function* rootSaga() {
    yield all([
        newpetSaga(),
        pets(),
    ]);
  }
  