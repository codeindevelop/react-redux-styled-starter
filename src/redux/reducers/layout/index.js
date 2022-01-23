import { combineReducers } from "redux";
import { mainMenu } from "./mainMenuReducer";

const layoutReducers = combineReducers({
  mainMenu,
});

export default layoutReducers;
