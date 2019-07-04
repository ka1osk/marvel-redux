import { connectRouter } from 'connected-react-router'
import { combineReducers } from "redux";
import history from '../../routes/history';
import auth from "./auth";

export default combineReducers({
  auth,
  router: connectRouter(history)
});