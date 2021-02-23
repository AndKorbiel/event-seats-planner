import { takeLatest, put } from 'redux-saga/effects';

function* testActionFetch() {
    const response = yield fetch('/guests-list/getAll')
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
    yield put({ type: 'ADD_NEW_GUEST', payload: response })
}

export function* watchTestAction() {
    yield takeLatest('ADD_NEW_GUEST_REQUEST', testActionFetch)
}