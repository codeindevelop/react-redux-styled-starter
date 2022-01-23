const initialState = {
  registerSucMSG: null,
  firstNameRequiredMSG: null,
  lastNameRequiredMSG: null,
  usernameExistErrMSG: null,
  emailExistErrMSG: null,
  phonenumberExistErrMSG: null,
  passwordCharNumberMSG: null,
  passwordNotMatchMSG: null,
  userAccountActiveMSG: null,
  userAccountActiveERR: null,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerSucMSG: true,
        firstNameRequiredMSG: null,
        lastNameRequiredMSG: null,
        usernameExistErrMSG: null,
        emailExistErrMSG: null,
        phonenumberExistErrMSG: null,
        passwordCharNumberMSG: null,
        passwordNotMatchMSG: null,
        userAccountActiveMSG: null,
        userAccountActiveERR: null,
      };

    case "USER_ACCOUNT_ACTIVE_SUC":
      return {
        ...state,
        userAccountActiveMSG: true,
      };

    case "USER_ACCOUNT_ACTIVE_ERR":
      return {
        ...state,
        userAccountActiveERR: true,
      };

    case "PASSWORD_NOT_MATCH":
      return {
        ...state,
        passwordNotMatchMSG: true,
      };

    case "PASSWORD_MUST_8_CHAR":
      return {
        ...state,
        passwordCharNumberMSG: true,
      };

    case "FIRSTNAME_REQUIRED":
      return {
        ...state,
        firstNameRequiredMSG: true,
      };

    case "USERNAME_HAS_EXIST":
      return {
        ...state,
        usernameExistErrMSG: true,
      };

    case "EMAIL_HAS_EXIST":
      return {
        ...state,
        emailExistErrMSG: true,
      };

    case "PHONENUMBER_HAS_EXIST":
      return {
        ...state,
        phonenumberExistErrMSG: true,
      };

    default:
      return state;
  }
};
