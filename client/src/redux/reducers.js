import { TEST_ACTION_TYPE, ADD_NEW_GUEST, ADD_NEW_GUESTS_LIST } from './types/types';

const initialState = {
    value: 'Test value',
    guestList:
        [
            {
                id: 1,
                guestName: "Jan Kowalski",
                category: "Rodzina 1"
            },
            {
                id: 2,
                guestName: "Janina Kowalska",
                category: "Rodzina 2"
            },
            {
                id: 3,
                guestName: "Paweł Bądź",
                category: "Rodzina 3"
            },
            {
                id: 4,
                guestName: "Bogusław Gubała",
                category: "Rodzina 1"
            },
        ]
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case TEST_ACTION_TYPE:
            return {
                ...state,
                value: action.payload
            }

        case ADD_NEW_GUEST:
            return {
                ...state,
                guestList: [
                    ...state.guestList,
                    action.payload
                ]
            }

        case ADD_NEW_GUESTS_LIST:
            return {
                ...state,
                guestList: [
                    ...state.guestList,
                    ...action.payload
                ]
            }

        default:
            return state;
    }
}
