import { put, call, takeEvery } from "redux-saga/effects";

const fetchUserData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return fetch(url, {
    method: "GET",
    headers: {
      "constent-type": "application/JSON",
    },
  })
    .then((resp) => resp.json())
    .catch((e) => {
      throw e;
    });
};
console.log("Testing For Git Methods In Saga File");
function* fetchUser(action) {
  try {
    const user = yield call(fetchUserData);
    yield put({ type: "GET_USER_API_DATA", user: user });
  } catch (e) {
    yield put({ type: "USER_DATA_FAILED", message: e.message });
  }
}
function* userSaga() {
  yield takeEvery("GET_USER_REQUEST", fetchUser);
}
export default userSaga;
