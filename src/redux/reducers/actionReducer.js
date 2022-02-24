import UUidv4 from "../../components/Util";

const INITIAL_STATE = {
  addedPosts: [
    {
      userName: "test2",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      img: "https://toppng.com/uploads/preview/tropical-fruits-11551052667p6wiwd8uuu.png",
      story:
        "https://toppng.com/uploads/preview/tropical-fruits-11551052667p6wiwd8uuu.png",
      postId: UUidv4(),
    },
    {
      userName: "test2",
      descripion:
        "consectetur adipisicing elit. Sint officiis facere ipsum cumque temporibus",
      img: "https://toppng.com/uploads/preview/tropical-fruits-11551052667p6wiwd8uuu.png",
      story:
        "https://toppng.com/uploads/preview/tropical-fruits-11551052667p6wiwd8uuu.png",
      postId: UUidv4(),
    },
  ],
  addedComment: [


    
  ],
  addedBiography: [
    {
      text: "biography",
    },
  ],
};

const postReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATEPOST":
      return {
        ...state,
        addedPosts: [action.payload, ...state.addedPosts],
      };
    case "CREATECOMMENT":
      return {
        ...state,
        addedComment: [...state.addedComment, action.payload],
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
export default postReduser;
