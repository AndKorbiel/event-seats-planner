import { GET_GUESTS_REQUEST, ADD_NEW_GUEST_REQUEST, ADD_NEW_GUESTS_LIST_REQUEST, ADD_NEW_GUEST, ADD_NEW_GUESTS_LIST, UPDATE_WITH_DATA_FROM_DB, REMOVE_DATA_FROM_STORE_REQUEST, REMOVE_DATA_FROM_STORE, EDIT_DATA_IN_STORE_REQUEST, EDIT_DATA_IN_STORE, SEARCH_GUESTS_REQUEST } from './types/types';

export function getGuestsRequest() {
    return {
        type: GET_GUESTS_REQUEST
    }
}

export function searchGuestsRequest(guest) {
    return {
        type: SEARCH_GUESTS_REQUEST,
        guest
    }
}

export function updateWithDataFromDb(guests) {
    return {
        type: UPDATE_WITH_DATA_FROM_DB,
        payload: guests
    }
}

export function addNewGuestRequest(guest) {
    return {
        type: ADD_NEW_GUEST_REQUEST,
        guest
    }
}

export function addNewGuest(guest) {
    return {
        type: ADD_NEW_GUEST,
        payload: guest
    }
}

export function addNewGuestsListRequest(guestsList) {
    return {
        type: ADD_NEW_GUESTS_LIST_REQUEST,
        guestsList
    }
}

export function addNewGuestsList(guestsList) {
    return {
        type: ADD_NEW_GUESTS_LIST,
        payload: guestsList
    }
}

export function removeDataFromStoreRequest(id) {
    return {
        type: REMOVE_DATA_FROM_STORE_REQUEST,
        id
    }
}

export function removeDataFromStore(id) {
    return {
        type: REMOVE_DATA_FROM_STORE,
        payload: id
    }
}

export function editDataInStoreRequest(data) {
    return {
        type: EDIT_DATA_IN_STORE_REQUEST,
        data
    }
}

export function editDataInStore(id) {
    return {
        type: EDIT_DATA_IN_STORE,
        payload: id
    }
}