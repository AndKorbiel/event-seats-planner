import { all } from 'redux-saga/effects';
import { watchFetchGuesstList, watchPostNewGuest, watchRemoveGuest } from './guestsListSaga';

export default function* MainSaga() {
    yield all(
        [
            watchFetchGuesstList(),
            watchPostNewGuest(),
            watchRemoveGuest()
        ]
    )
}