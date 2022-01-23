/* -------------------- types for authentication actions -------------------- */

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const CURRENT_USER = "CURRENT_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_ERR_MSG_UNDO = "LOGIN_ERR_MSG_UNDO";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_2FA_SUCCECC = "LOGIN_2FA_SUCCECC";
export const LOGIN_2FA_FAIL = "LOGIN_2FA_FAIL";
export const PASSWORD_CHANGE_SUCCESS = "PASSWORD_CHANGE_SUCCESS";
export const PASSWORD_CHANGE_FAIL = "PASSWORD_CHANGE_FAIL";

export const SET_PAGE_AFTERLOGIN_SUCCESS = "SET_PAGE_AFTERLOGIN_SUCCESS";
export const SET_PAGE_AFTERLOGIN_FAIL = "SET_PAGE_AFTERLOGIN_FAIL";

/* ---------------------- Types For Register Errors --------------------- */

export const USERNAME_HAS_EXIST = "USERNAME_HAS_EXIST";
export const EMAIL_HAS_EXIST = "EMAIL_HAS_EXIST";
export const PHONENUMBER_HAS_EXIST = "PHONENUMBER_HAS_EXIST";

export const USERNAME_HAS_EXIST_UNDO = "USERNAME_HAS_EXIST_UNDO";
export const EMAIL_HAS_EXIST_UNDO = "EMAIL_HAS_EXIST_UNDO";
export const PHONENUMBER_HAS_EXIST_UNDO = "PHONENUMBER_HAS_EXIST_UNDO";

/* ---------------------- Types Forgot password actions --------------------- */

export const RESET_PASSWOR_SUCCESS = "RESET_PASSWOR_SUCCESS";
export const RESET_PASSWOR_FAIL = "RESET_PASSWOR_FAIL";


/* ------------------------- types for error actions ------------------------ */

export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const USERS_COUNT_SUCC = "USERS_COUNT_SUCC";
export const USERS_COUNT_ERR = "USERS_COUNT_ERR";

/* ----------------------------- Types for users ---------------------------- */

export const GET_ALL_USERS_LIST_SUCC = "GET_ALL_USERS_LIST_SUCC";
export const GET_ALL_USERS_LIST_ERR = "GET_ALL_USERS_LIST_ERR";

export const GET_USERS_TABLE_ROW_ID = "GET_USERS_TABLE_ROW_ID";
export const SHOW_ADD_USER_MODAL = "SHOW_ADD_USER_MODAL";
export const HIDE_ADD_USER_MODAL = "HIDE_ADD_USER_MODAL";

export const CREATE_USER_SUCC = "CREATE_USER_SUCC";
export const CREATE_USER_SUCC_UNDO = "CREATE_USER_SUCC_UNDO";
export const CREATE_USER_ERR = "CREATE_USER_ERR";

export const DELETE_USER_SUCC = "DELETE_USER_SUCC";
export const DELETE_USER_SUCC_UNDO = "DELETE_USER_SUCC_UNDO";
export const DELETE_USER_ERR = "DELETE_USER_ERR";

export const SHOW_USER_DELETE_MODAL = "SHOW_USER_DELETE_MODAL";
export const HIDE_USER_DELETE_MODAL = "HIDE_USER_DELETE_MODAL";
