
const INITIAL_STATE = {
    addedPosts:[
       {
           text:"text"
       }
  ],
  addedComments: [
    {
      text:"comment"
    }
  ]
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
          addedComments: [...state.addedComments, action.payload],
        };

      default:
        return state;
    }
  };
  export default postReduser;
  