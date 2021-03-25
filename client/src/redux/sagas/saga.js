import { all } from 'redux-saga/effects';
import { watchFetchGuesstList, watchPostNewGuest, watchPostNewGeustsList, watchRemoveGuest, watchEditGuest, watchSearchGuests } from './guestsListSaga';

export default function* MainSaga() {
    yield all(
        [
            watchFetchGuesstList(),
            watchPostNewGuest(),
            watchPostNewGeustsList(),
            watchRemoveGuest(),
            watchEditGuest(),
            watchSearchGuests()
        ]
    )
}