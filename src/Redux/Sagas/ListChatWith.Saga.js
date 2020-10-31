import { call, put, takeLatest } from 'redux-saga/effects';
import { LIST_CHAT_WITH_REQUEST, listChatWithFail, listChatWithSuccess } from '../Actions/ListChatWith.Action';
import { listAllGroup } from '../../Api/groupApi';
import { sendNetworkFail } from '../../actions';

export function* watchListChatWith() {
  yield takeLatest(LIST_CHAT_WITH_REQUEST, handleChatWith);
}

function* handleChatWith(action) {
  const response = yield call(listAllGroup, action.payload);
  if (response.data.success) {
    yield put(listChatWithSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(listChatWithFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(listChatWithFail(response.problem));
    }
  }
}
