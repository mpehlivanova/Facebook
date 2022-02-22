const INITIAL_STATE = {
  logged: false,
  currLogged: null,
  registered: [
    {
      email: "asd@mail.com",
      password: "a",
      firstName: "Ivan",
      lastName: "Ivanov",
      gender: "male",
      dateOfBirth: "11.07.1976",
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
