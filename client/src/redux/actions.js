import { TEST_ACTION_TYPE, TEST_ACTION_TYPE_REQUEST, ADD_NEW_GUEST, ADD_NEW_GUESTS_LIST } from './types/types';

export function testActionRequest() {
    return {
        type: TEST_ACTION_TYPE_REQUEST
    }
}

export function testAction(value) {
    return {
        type: TEST_ACTION_TYPE,
        payload: value
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