import {
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
} from "./Action";

const initialState = {
  users: [],
  deleteError: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case DELETE_USER_FAILURE:
      return { ...state, deleteError: action.payload };
    default:
      return state;
  }
};

export default userReducer;
