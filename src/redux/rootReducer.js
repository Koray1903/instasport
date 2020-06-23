import {combineReducers} from "redux";
import clubReducer from "./Reducers/Reducer";

const rootReducer = combineReducers({
  reducerClub: clubReducer
});

export default rootReducer;