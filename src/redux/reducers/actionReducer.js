
const INITIAL_STATE = {
    addedPosts:[
    
       {
           text:"text",
           idPost:"89"
       }
    
    ],
   
    addedComment:[
        {
            comment:"comment",
            
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
              addedComment: [...state.addedComment, action.payload],
            };
      
  
      default:
        return state;
    }
  };
  export default postReduser;
  