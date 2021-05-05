import { all } from 'redux-saga/effects';
import newpetSaga from './newpet.saga'

export default function* rootSaga() {
    yield all([
        newpetSaga(),
    ]);
  }
  