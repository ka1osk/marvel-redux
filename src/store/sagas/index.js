import { all, fork } from "redux-saga/effects";
import * as characters from './characters';

export default function* root() {
  yield all(
    [
      ...Object.values(characters)
    ].map(fork)
  );
}