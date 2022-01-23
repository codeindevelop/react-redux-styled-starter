import axios from "axios";
import authCrud from "../../cruds";
import { fetchUserBalance } from "../wallet/walletActions";

/* ------------------------------- Login User ------------------------------- */

export const loginAction =
  ({ email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = { email, password };

    axios
      .post(authCrud.loginUrl, body, config)
      .then((res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data,
        });
        dispatch(fetchUserBalance());
      })
      .catch((err, status) => {
        if (err.response.status === 403) {
          const body = { email, password };
          dispatch({
            type: "LOGIN_WITH_TWOFA",
            payload: body,
          });
        } else {
          dispatch({
            type: "LOGIN_FAIL",
            payload: err.data,
          });
        }
        setTimeout(() => {
          dispatch(undoErrMsg());
        }, 3000);
      });
  };

/* ------------------------------- Login 2faCode ------------------------------- */

export const loginTwoFa =
  ({ email, password, twofa_code }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = { email, password, twofa_code };

    axios
      .post(authCrud.loginUrl, body, config)
      .then((res) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data,
        });
        dispatch(fetchUserBalance());
      })
      .catch((err, status) => {
        if (err.response.status === 403) {
          dispatch({
            type: "LOGIN_WITH_TWOFA",
            payload: err.data,
          });
        } else {
          dispatch({
            type: "TWOFA_CODE_ERR",
            payload: err.data,
          });
        }
        setTimeout(() => {
          dispatch(undoErrMsg());
        }, 3000);
      });
  };

/* ------------------------- Check Token & load user ------------------------ */
export const loadUser = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem("token");

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .get(authCrud.profileUrl, config)
    .then((res) => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
      dispatch(fetchUserBalance());
    })
    .catch((err) => {
      dispatch({
        type: "AUTH_ERROR",
        payload: err.data,
      });
    });
};

/* ----------------------- undo Login Err msg ---------------------- */

export const undoErrMsg = () => (dispatch) => {
  dispatch({
    type: "LOGIN_ERR_MSG_UNDO",
  });
  dispatch({
    type: "TWOFA_CODE_ERR_UNDO",
  });
};

/* ------------------------------- Logout User ------------------------------ */

export const logoutAction = () => (dispatch) => {
  // Get token from localstorage
  const token = localStorage.getItem("token");

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .post(authCrud.logoutUrl, "", config)
    .then((res) => {
      window.location.reload(true);
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOGOUT_FAIL",
      });
    });
};
