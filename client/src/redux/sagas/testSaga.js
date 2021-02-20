import { takeLatest, put } from 'redux-saga/effects';

function* testActionFetch() {
    const response = yield fetch('/api')
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
    yield console.log(response)
    yield put({ type: 'TEST_ACTION_TYPE', payload: response })
}

export function* watchTestAction() {
    yield takeLatest('TEST_ACTION_TYPE_REQUEST', testActionFetch)
}