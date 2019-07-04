import { all, fork } from "redux-saga/effects";
import * as auth from './auth';

export default function* root() {
  yield all(
    [
      ...Object.values(auth)
    ].map(fork)
  );
}