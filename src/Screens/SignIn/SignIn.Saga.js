import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGNIN_REQUEST, signInFail, signInSuccess } from './SignIn.Action';
import { login } from '../../Api/authApi';
import { loginIn } from '../../api';
import { sendNetworkFail } from '../../actions';

export function* watchSignIn() {
  yield takeLatest(SIGNIN_REQUEST, handleSignIn);
}

function* handleSignIn(action) {
  try {
    const response = yield call(login, action.payload);
    if (response.data.success) {
      yield put(signInSuccess(response.data));
    }
  } catch(err) {
    yield put(signInFail(err.response.data));
  }

}

// function* handleSignIn(action) {
//   const response = yield call(loginIn, action.payload);
//   if (response.ok) {
//     yield put(signInSuccess(response.data));
//   } else {
//     if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
//       yield put(signInFail(response.problem));
//     } else {
//       yield put(sendNetworkFail(response.problem));
//       yield put(signInFail(response.problem));
//     }
//   }
// }

