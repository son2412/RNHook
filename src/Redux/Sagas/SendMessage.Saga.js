import { call, put, takeLatest } from 'redux-saga/effects';
import { SEND_MESSAGE_REQUEST, sendMessageFail, sendMessageSuccess } from '../Actions/SendMessage.Action';
import { sendMessage } from '../../Api/messageApi';
import { sendNetworkFail } from '../../actions';

export function* watchSendMessage() {
  yield takeLatest(SEND_MESSAGE_REQUEST, handleSendMessage);
}

function* handleSendMessage(action) {
  const response = yield call(sendMessage, action.payload);
  if (response.data.success) {
    yield put(sendMessageSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(sendMessageFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(sendMessageFail(response.problem));
    }
  }
}
