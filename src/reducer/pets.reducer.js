const pets = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PETS':
        console.log(action)
        return action.payload;
      default:
        return state;
    }
  };
  

  export default pets;