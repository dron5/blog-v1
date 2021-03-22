import { combineReducers } from "redux";
import articlesReduser from "./articlesReduser";

const rootReduser = combineReducers({
  articlesReduser,
});

export default rootReduser;
