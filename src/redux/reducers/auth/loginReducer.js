const ISSERVER = typeof window === "undefined";

const initialState = {
  token: !ISSERVER ? localStorage.getItem("token") : null,
  authErrModal: false,
  isAuthenticated: null,
  isLoginErr: null,
  isLoading: false,
  isLoginSucc: null,
  isLogOut: null,
  user_id: "",
  user_role: "",
  first_name: "",
  last_name: "",
  mobile_number: "",
  mobile_verified_at: "",
  user_img: "",
  register_date: null,
  email: null,
  loginWithTwofa: false,
  twoFaCodeErr: false,
  tempEmail: "",
  tempPass: "",
  created_at: "",
  updated_at: "",
  approved_at: "",
  pageAfterLoginMsg_suc: null,
  pageAfterLoginMsg_fail: null,
  twofa_mode: null,
  is2faOff: null,
  twofa_Disable_SucMsg: null,
  twofa_Disable_ErrMsg: null,
  usersCount: null,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_WITH_TWOFA":
      return {
        ...state,
        loginWithTwofa: true,
        tempEmail: action.payload.email,
        tempPass: action.payload.password,
      };
    case "TWOFA_CODE_ERR":
      return {
        ...state,
        twoFaCodeErr: true,
      };
    case "TWOFA_CODE_ERR_UNDO":
      return {
        ...state,
        twoFaCodeErr: false,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        authErrModal: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        isLogOut: null,
        user_id: action.payload.user.id,
        user_role: action.payload.role[0],
        user_name: action.payload.user.user_name,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        email: action.payload.user.email,
        mobile_number: action.payload.user.mobile_number,
        mobile_verified_at: action.payload.user.mobile_verified_at,
        register_date: action.payload.user.created_at,
      };
    case "LOGIN_SUCCESS":
      if (!ISSERVER) {
        localStorage.setItem("token", action.payload.access_token);
      }
      return {
        ...state,
        isAuthenticated: true,
        isLoginSucc: true,
        isLoading: false,
        isLoginErr: null,
        user_id: action.payload.user.id,
        user_role: action.payload.role[0],
        user_name: action.payload.user.user_name,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        email: action.payload.user.email,
        mobile_number: action.payload.user.mobile_number,
        mobile_verified_at: action.payload.user.mobile_verified_at,
        register_date: action.payload.user.created_at,
      };
    case "AUTH_SERVER_HAS_SUCC":
      return {
        ...state,
        authErrModal: false,
      };
    case "AUTH_SERVER_HAS_ERR":
      return {
        ...state,
        authErrModal: true,
      };
    case "LOGIN_ERR_MSG_UNDO":
      return {
        ...state,

        isLoginErr: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLoginErr: true,
      };
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLoading: false,
        isLogOut: true,
      };
    default:
      return state;
  }
};
