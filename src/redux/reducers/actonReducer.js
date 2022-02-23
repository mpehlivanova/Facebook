const INITIAL_STATE = {
  addedPosts: [
    {
      text: "text",
    },
  ],
  addedComments: [
    {
      text: "comment",
    },
  ],
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
    case "CREATECOMMENT":
      return {
        ...state,
        addedComments: [...state.addedComments, action.payload],
      };
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
