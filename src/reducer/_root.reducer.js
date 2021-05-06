import { combineReducers } from 'redux';
import newpet from './newpet.reducer'
import pets from './pets.reducer'
import ownerReducer from './getowner.reducer'

const rootReducer = combineReducers({
    newpet,
    pets,
    ownerReducer,
  });
  
  export default rootReducer;