import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Types } from '../ducks/characters';
import api from '../../services/api';

function* getCharacters() {
  try {
    const { data: { data } } = yield call(api.get, '/characters?apikey=6c0e2cd20c00fa964e50fb7275bc4b4a');

    yield put({ type: Types.SUCCESS_GET_CHARACTERS, payload: { data } });
  } catch (error) {
    yield put({ type: Types.FAILURE_GET_CHARACTERS });
  }
}

export function* handleLogin() {
  yield takeLatest(Types.GET_CHARACTERS, getCharacters);
}