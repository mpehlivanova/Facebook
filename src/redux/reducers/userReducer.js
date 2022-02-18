const INITIAL_STATE = {
    logged: false,
    username: null
};

 const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: true
      };

    case "LOGOUT":
      return {
        ...state,
        logged: false
      };

    default:
      return state;
  }
};
export default reducer


