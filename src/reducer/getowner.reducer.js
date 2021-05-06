
const getOwner = (state = [], action) => {
  console.log( 'in owners reducer with:', action.payload );
    switch (action.type) {
      case 'SET_OWNERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default getOwner;

