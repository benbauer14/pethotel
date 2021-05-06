import { all } from 'redux-saga/effects';
import newpetSaga from './newpet.saga'
import pets from './pets.saga'
import newOwnerSaga from './newowner.saga'
import updatecheckedin from './updatecheckedin.saga'
import getOwners from './getowner.saga'

export default function* rootSaga() {
    yield all([
        newpetSaga(),
        pets(),
        newOwnerSaga(), 
        updatecheckedin(),
        getOwners()
    ]);
  }
  