import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import UserSaga from "../saga/UserSaga";
import userRecuder from "./Reducer";
import watchUserSaga from "../saga/UserSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userRecuder, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUserSaga);

export default store;
