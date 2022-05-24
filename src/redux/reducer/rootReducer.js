import { combineReducers } from "redux";
import authReducer from './Auth'
import goalReducer from "./goals";

const rootReducer = combineReducers({
	auth: authReducer,
	goals:goalReducer

});

export default rootReducer