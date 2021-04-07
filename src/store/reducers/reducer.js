import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import articlesReducer from "./articlesReducer";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};

const rootReduser = combineReducers({
  articlesReducer,
  userReducer,
});

export default persistReducer(persistConfig, rootReduser);
