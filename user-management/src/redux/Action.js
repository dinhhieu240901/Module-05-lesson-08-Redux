export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const getUsers = () => ({
  type: GET_USERS,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserFailure = (id) => ({
  type: DELETE_USER_FAILURE,
  payload: id,
});
