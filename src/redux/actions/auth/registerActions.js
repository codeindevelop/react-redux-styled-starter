import axios from "axios";

import Crud from "../../cruds";

/* ------------------------------- Register User ------------------------------- */

export const registerAction =
  ({
    first_name,
    last_name,
    mobile_number,
    email,
    password,
    password_confirmation,
  }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = {
      first_name,
      last_name,
      mobile_number,
      email,
      password,
      password_confirmation,
      portal_id: 1,
    };

    axios
      .post(Crud.registerUrl, body, config)
      .then((res) => {
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response.data.message === "The first name field is required.") {
          dispatch({
            type: "FIRSTNAME_REQUIRED",
            payload: body,
          });
        } else if (
          err.response.data.message === "The user name has already been taken."
        ) {
          dispatch({
            type: "USERNAME_HAS_EXIST",
            payload: body,
          });
        } else if (
          err.response.data.message === "The email has already been taken."
        ) {
          dispatch({
            type: "EMAIL_HAS_EXIST",
            payload: body,
          });
        } else if (
          err.response.data.message ===
          "The mobile number has already been taken."
        ) {
          dispatch({
            type: "PHONENUMBER_HAS_EXIST",
            payload: body,
          });
        } else if (
          err.response.data.message ===
          "The password must be at least 8 characters."
        ) {
          dispatch({
            type: "PASSWORD_MUST_8_CHAR",
            payload: body,
          });
        } else if (
          err.response.data.message ===
          "The password confirmation does not match."
        ) {
          dispatch({
            type: "PASSWORD_NOT_MATCH",
            payload: body,
          });
        }
       
      });
  };

/* ------------------------------- Active User ------------------------------- */

export const activeUserAction =
  ({ token }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // // Request body
    // const body = {
    //   token,
    // };

    axios
      .get(`${Crud.registerActivationUrl}/${token}`, config)
      .then((res) => {
        dispatch({
          type: "USER_ACCOUNT_ACTIVE_SUC",
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response.data.message === "This activation token is invalid.") {
          dispatch({
            type: "USER_ACCOUNT_ACTIVE_ERR",
            payload: err.data,
          });
        }

        console.log(err.response.data);
      });
  };
