import { all } from 'redux-saga/effects';
import { watchTestAction } from './testSaga';

export default function* MainSaga() {
    yield all(
        [
            watchTestAction(),
        ]
    )
}