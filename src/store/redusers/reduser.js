import { combineReducers } from "redux";
import articlesReduser from "./articlesReduser";
import userReduser from "./userReduser";

const rootReduser = combineReducers({
  articlesReduser,
  userReduser,
});

export default rootReduser;
