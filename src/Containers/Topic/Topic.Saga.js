import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_TOPIC_REQUEST, getTopicFail, getTopicSuccess } from './Topic.Action';
import { getTopics } from '../../Api/topicApi';
import { sendNetworkFail } from '../../actions';

export function* watchGetTopic() {
  yield takeLatest(GET_TOPIC_REQUEST, handleGetTopic);
}

function* handleGetTopic(action) {
  const response = yield call(getTopics, action.payload);
  if (response.data.success) {
    yield put(getTopicSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(getTopicFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getTopicFail(response.problem));
    }
  }
}
