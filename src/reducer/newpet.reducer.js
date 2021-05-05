const newpet = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NEWPET':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default newpet;