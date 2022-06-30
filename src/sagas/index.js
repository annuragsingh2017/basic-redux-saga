import { all } from "redux-saga/effects";
import userSaga from "./saga";
export default function* rootsaga() {
  yield all([userSaga()]);
}
