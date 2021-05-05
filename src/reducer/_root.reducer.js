import { combineReducers } from 'redux';
import newpet from './newpet.reducer'
import pets from './pets.reducer'

const rootReducer = combineReducers({
    newpet,
    pets
  });
  
  export default rootReducer;