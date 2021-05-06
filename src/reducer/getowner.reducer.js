
const getOwner = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_OWNERS':
        console.log(action)
        return action.payload;
      default:
        return state;
    }
  };
  
  export default getOwner;

