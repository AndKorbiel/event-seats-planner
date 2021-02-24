import { all } from 'redux-saga/effects';
import { watchFetchGuesstList, watchPostNewGuest } from './testSaga';

export default function* MainSaga() {
    yield all(
        [
            watchFetchGuesstList(),
            watchPostNewGuest()
        ]
    )
}