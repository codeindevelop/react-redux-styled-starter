import { combineReducers } from "redux";
import { login } from "./loginReducer";
import { register } from "./registerReducers";
// import { user } from "./usersReducer";
import { forgotPassword } from "./forgotpassReducer";


const authReducers = combineReducers({
  login,
  register,
  // user,
  forgotPassword,

});

export default authReducers;
