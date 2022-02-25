const INITIAL_STATE = {
  logged: false,
  currLogged: null,
  registered: [
    {
      email: "kristina@mail.com",
      password: "123",
      firstName: "Кристина",
      lastName: "Георгиева",
      gender: "female",
      avatar:
        "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
      dateOfBirth: "11.07.1986",
      coverPhoto:
        "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
      
      id:"111",
      request:["test1"],
      friends:["priqteli"]
    },
    {
      email: "asd1@mail.com",
      password: "aа",
      firstName: "Mimeto",
      lastName: "S",
      gender: "female",
      avatar:
        "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
      dateOfBirth: "11.07.1976",
      id:"222"
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: true,
      };

    case "LOGOUT":
      return {
        ...state,
        logged: false,
      };

    case "REGISTER":
      return {
        ...state,
        registered: [...state.registered, action.payload],
      };

    default:
      return state;
  }
};
export default userReducer;
