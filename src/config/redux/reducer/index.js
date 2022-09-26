import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlogReducer";
import detailBlogReducer from "./detailBlogReducer";

const reducer = combineReducers({
  globalReducer,
  homeReducer,
  createBlogReducer,
  detailBlogReducer,
});
export default reducer;
