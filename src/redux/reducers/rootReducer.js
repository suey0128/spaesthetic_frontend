import { combineReducers } from "redux";
import businessReducer from "./businessReducer";
import ccReducer from "./ccReducer";
import campaignReducer from "./campaignReducer";
import otherReducer from "./otherReducer";
import userReducer from "./userReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({ businessReducer, ccReducer, campaignReducer, otherReducer, userReducer, reviewReducer })