import { createStore } from "redux";
import { combineReducers } from "redux";

import dataReducer from "./reducers/userReducer";

// import rootReducer from "./rootReducer";

const rootReducer = combineReducers({
  userData: dataReducer,
});

const store = createStore(rootReducer);


export default store;
