import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_USERS,
  DELETE_USER,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../redux/Action";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function* getUsersSaga() {
  try {
    const response = yield axios.get(BASE_URL);
    yield put({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

function* deleteUserSaga(action) {
  try {
    const response = yield call(axios.delete, `${BASE_URL}/${action.payload}`);
    if (response.status === 200) {
      alert(`User deleted successfully:${response.status}`);
    } else {
      alert(`Failed to delete user: ${response.status}`);
    }
    yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
  } catch (err) {
    yield put({ type: DELETE_USER_FAILURE, payload: err });
    alert(`Error occurred while deleting user: ${err}`);
  }
}

function* watchUserSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(DELETE_USER, deleteUserSaga);
}

export default watchUserSaga;
