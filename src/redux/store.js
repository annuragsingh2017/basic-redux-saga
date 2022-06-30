import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootsaga from "../sagas/index.js";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsaga);
export default store;
