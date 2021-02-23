import { ADD_NEW_GUEST, ADD_NEW_GUESTS_LIST } from './types/types';

const initialState = {
    guestList: []
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_GUEST:
            return {
                ...state,
                guestList: [
                    ...state.guestList,
                    ...action.payload
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
