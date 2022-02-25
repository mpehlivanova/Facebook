const INITIAL_STATE = {
  biography: "",
  coverPhoto:
    "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
  avatar: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
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
        avatar: [action.payload],
      };

    default:
      return state;
  }
};
export default profileReducer;
