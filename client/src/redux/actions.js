import { GET_GUESTS_REQUEST, ADD_NEW_GUEST_REQUEST, ADD_NEW_GUEST, ADD_NEW_GUESTS_LIST } from './types/types';

export function getGuestsRequest() {
    return {
        type: GET_GUESTS_REQUEST
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

export function addNewGuestsList(guestsList) {
    return {
        type: ADD_NEW_GUESTS_LIST,
        payload: guestsList
    }
}