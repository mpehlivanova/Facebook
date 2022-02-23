const INITIAL_STATE = {
    addedPosts:[
      //  {
          //  userName:"test2",
          //  descripion:"consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
          //  idPost:"89",
          //  img:"https://toppng.com/uploads/preview/tropical-fruits-11551052667p6wiwd8uuu.png",
          //  story:"https://toppng.com/uploads/preview/tropical-fruits-11551052667p6wiwd8uuu.png",
          //  addedComment: [
          //   {
          //     comment:"aaaa",
          //     idComment:"1"
          //   },
          //   {
          //     comment:"bbbb",
          //     idComment:"2"
          //   },
          
          // ]
       
      //  },
     
  ],
  // addedCommented: [
  //   {
  //     comment:"comment",
  //     idComment:""
  //   }
  // ],
  addedBiography: [
    {
      text: "biography",

    }
  ]
  };
  
  
 
const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATEPOST":
      return {
        ...state,
        addedPosts: [...state.addedPosts, action.payload],
      };
    // case "CREATECOMMENT":
    //   return {
    //     ...state,
    //     addedComments: [...state.addedComments, action.payload],
    //   };
    case "CREATEBIOGRAPHY":
      return {
        ...state,
        addedBiography: [...state.addedBiography, action.payload],
      };

    default:
      return state;
  }
};
export default postReducer;
