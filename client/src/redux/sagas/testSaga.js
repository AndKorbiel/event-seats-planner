import { takeLatest, put } from 'redux-saga/effects';

function* fetchGuestsList() {
    const response = yield fetch('/guests-list/getAll')
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
    yield put({ type: 'ADD_NEW_GUEST', payload: response })
}

function* postNewGuest(payload) {
    const newGuest = payload.guest;
    console.log(newGuest)

    const response = yield fetch('/guests-list/add',
        {
            method: "POST",
            body: JSON.stringify(newGuest),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    yield (console.log(response))
    yield put({ type: 'ADD_NEW_GUEST', payload: response })
}

export function* watchFetchGuesstList() {
    yield takeLatest('GET_GUESTS_REQUEST', fetchGuestsList)
}

export function* watchPostNewGuest() {
    yield takeLatest('ADD_NEW_GUEST_REQUEST', postNewGuest)
}