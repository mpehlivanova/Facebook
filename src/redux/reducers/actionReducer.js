
const INITIAL_STATE = {
    addedPosts:[
       {
           text:"text",
           idPost:"777"
       }

  ],
  addedCommented: [
    {
      comment:"comment",
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

        case "CREATECOMMENT":
            return {
              ...state,
              addedCommented: [...state.addedCommented, action.payload],
            };
      
  

    

      default:
        return state;
    }
  };
  export default postReduser;
  