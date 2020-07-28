import {call, put, takeLatest} from 'redux-saga/effects';
import {listUserActive} from '../../api';
import {
  ACTIVE_REQUEST,
  activeFail,
  activeSuccess,
} from './Active.Action';
import {sendNetworkFail} from '../../actions';

export function* watchGetUserActive() {
  yield takeLatest(ACTIVE_REQUEST, handleGetUserActive);
}

function* handleGetUserActive(action) {
  const response = yield call(listUserActive, action.payload);
  if (response.ok) {
    yield put(activeSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(activeFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(activeFail(response.problem));
    }
  }
}
