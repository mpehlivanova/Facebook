const INITIAL_STATE = {
  biography: "",
  coverPhoto:
    "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
  avatar: 
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGEBIOGRAPHY":
      return {
        ...state,
        biography: action.payload,
      };

    case "CHANGECOVER":
      return {
        ...state,
        coverPhoto: [action.payload],
      };

    case "CHANGEAVATAR":
      return {
        ...state,
        avatar: action.payload,
      };

    default:
      return state;
  }
};
export default profileReducer;
