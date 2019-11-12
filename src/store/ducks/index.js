import { connectRouter } from 'connected-react-router'
import { combineReducers } from "redux";
import history from '../../routes/history';
import characters from "./characters";

export default combineReducers({
  characters,
  router: connectRouter(history)
});