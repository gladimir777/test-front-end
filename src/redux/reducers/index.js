import { combineReducers } from "redux";
import hotels from "./hotels";
import notifications from "./notifications";
import payments from "./payments";
export default combineReducers({ hotels, notifications, payments });
