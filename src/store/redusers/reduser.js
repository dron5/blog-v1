import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import userReducer from "./userReducer";

const rootReduser = combineReducers({
  articlesReducer,
  userReducer,
});

export default rootReduser;
