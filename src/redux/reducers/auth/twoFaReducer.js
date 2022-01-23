const initialState = {
  qrCode: "",
  qrString: "",
  qrConfirmMsg: null,
  twoFaStatus: null,
  qrDisabled: false,
};

export const twoFaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_2FA_QR_SUCC":
      return {
        ...state,
        qrCode: action.payload.as_qr_code,
        qrString: action.payload.as_string,
      };
    case "CONFIRM_2FA_QR_SUCC":
      return {
        ...state,
        twoFaStatus: true,
        qrConfirmMsg: true,
      };

    case "CONFIRM_2FA_QR_ERR":
      return {
        ...state,
        qrConfirmMsg: false,
      };

    case "STATUS_2FA_DISABLED":
      return {
        ...state,
        twoFaStatus: false,
      };

    case "STATUS_2FA_ENABLED":
      return {
        ...state,
        twoFaStatus: true,
      };
    case "2FA_HAS_BEN_DISABLED":
      return {
        ...state,
        qrDisabled: true,
      };

    default:
      return state;
  }
};
