import * as authTypes from "../../types/authTypes";

const initialState = {
  users: [],
  usersCount: 0,
  userTableRowID: "",
  updateUserSUC: null,
  updateUserERR: null,
  createUserSUC: null,
  createUserERR: null,
  deleteUserSUC: null,
  deleteUserERR: null,
  addUserModal : false,
  UserDeleteModal : false
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.GET_ALL_USERS_LIST_SUCC:
      return {
        ...state,
        users: action.payload.users,
      };
    case authTypes.USERS_COUNT_SUCC:
      return {
        ...state,
        usersCount: action.payload.users_count,
      };
    case authTypes.GET_USERS_TABLE_ROW_ID:
      return {
        ...state,
        userTableRowID: action.payload,
      };
    case authTypes.SHOW_ADD_USER_MODAL:
      return {
        ...state,
        addUserModal: true,
      };
    case authTypes.HIDE_ADD_USER_MODAL:
      return {
        ...state,
        addUserModal: false,
      };
    case authTypes.CREATE_USER_SUCC:
      return {
        ...state,
        createUserSUC: true,
        createUserERR: null,
      };
    case authTypes.CREATE_USER_ERR:
      return {
        ...state,
        createUserERR: true,
      };
    case authTypes.CREATE_USER_SUCC_UNDO:
      return {
        ...state,
        createUserSUC: null,
      };
    case authTypes.SHOW_USER_DELETE_MODAL:
      return {
        ...state,
        UserDeleteModal: true,
      };
    case authTypes.HIDE_USER_DELETE_MODAL:
      return {
        ...state,
        UserDeleteModal: false,
      };
    case authTypes.DELETE_USER_SUCC:
      return {
        ...state,
        deleteUserSUC: true,
        deleteUserERR : null
      };
    case authTypes.DELETE_USER_ERR:
      return {
        ...state,
        deleteUserERR: true,
      };
    case authTypes.DELETE_USER_SUCC_UNDO:
      return {
        ...state,
        deleteUserSUC: null,
      };

    default:
      return state;
  }
};
