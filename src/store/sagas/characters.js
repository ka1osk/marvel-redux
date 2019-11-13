import { takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { Types } from "../ducks/characters";
import api from "../../services/api";

function* getCharacters() {
  try {
    const {
      data: { data }
    } = yield call(
      api.get,
      "/characters?apikey=6c0e2cd20c00fa964e50fb7275bc4b4a"
    );

    yield put({ type: Types.SUCCESS_GET_CHARACTERS, payload: { data } });
  } catch (error) {
    yield put({ type: Types.FAILURE_GET_CHARACTERS });
  }
}

function* showCharacter({ character: { id } }) {
  yield put(push(`/character/${id}`));
}

function* editCharacter({ character: { id } }) {
  yield put(push(`/character/${id}/edit`));
}

function* updateCharacter({ character }) {
  yield put(push("/"));
}

export function* handleCharacters() {
  yield takeLatest(Types.GET_CHARACTERS, getCharacters);
}

export function* handleShowCharacter() {
  yield takeLatest(Types.SHOW_CHARACTER, showCharacter);
}

export function* handleEditCharacter() {
  yield takeLatest(Types.EDIT_CHARACTER, editCharacter);
}

export function* handleUpdateCharacter() {
  yield takeLatest(Types.UPDATE_CHARACTER, updateCharacter);
}
