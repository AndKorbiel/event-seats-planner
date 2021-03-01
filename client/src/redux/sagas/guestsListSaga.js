import { takeLatest, put, call } from 'redux-saga/effects';
import { api } from '../services/api'

function* fetchGuestsList() {
    try {
        const response = yield call(api.fetchGuest)
        yield put({ type: 'UPDATE_WITH_DATA_FROM_DB', payload: response })
    } catch (err) {

    }
}

function* postNewGuest(payload) {
    const newGuest = payload.guest;
    try {
        const response = yield call(api.postGuest, newGuest)
        yield put({ type: 'ADD_NEW_GUEST', payload: response })
    } catch (err) {

    }
}

function* postNewGuestsList(payload) {
    const newGuestsList = payload.guestsList
    try {
        const response = yield call(api.postGuestsList, newGuestsList);
        yield put({ type: 'ADD_NEW_GUESTS_LIST', payload: response })
    } catch (err) {

    }
}

function* removeGuest(payload) {
    const id = payload.id;

    try {
        const response = yield call(api.removeGuest, id);
        yield put({ type: 'REMOVE_DATA_FROM_STORE', payload: response });
    } catch (err) {

    }
}

export function* watchFetchGuesstList() {
    yield takeLatest('GET_GUESTS_REQUEST', fetchGuestsList)
}

export function* watchPostNewGuest() {
    yield takeLatest('ADD_NEW_GUEST_REQUEST', postNewGuest)
}

export function* watchPostNewGeustsList() {
    yield takeLatest('ADD_NEW_GUESTS_LIST_REQUEST', postNewGuestsList)
}

export function* watchRemoveGuest() {
    yield takeLatest('REMOVE_DATA_FROM_STORE_REQUEST', removeGuest)
}