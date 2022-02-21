
const INITIAL_STATE = {
    addedPosts:[
    
       {
           text:"text"
       }
    
    ],
   
    
  };
  
  const postReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
     
      case "CREATEPOST":
        return {
          ...state,
          addedPosts: [...state.addedPosts, action.payload],
        };
  
      default:
        return state;
    }
  };
  export default postReduser;
  