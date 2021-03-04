import { ADD_NEW_GUEST, ADD_NEW_GUESTS_LIST, UPDATE_WITH_DATA_FROM_DB, REMOVE_DATA_FROM_STORE, EDIT_DATA_IN_STORE } from './types/types';

const initialState = {
    guestsList: []
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WITH_DATA_FROM_DB:
            return {
                ...state,
                guestsList: [
                    ...action.payload
                ]
            }
        case ADD_NEW_GUEST:
            return {
                ...state,
                guestsList: [
                    ...state.guestsList,
                    action.payload
                ]
            }

        case ADD_NEW_GUESTS_LIST:
            return {
                ...state,
                guestsList: [
                    ...state.guestsList,
                    ...action.payload
                ]
            }

        case REMOVE_DATA_FROM_STORE:
            return {
                ...state,
                guestsList: [
                    ...state.guestsList.filter(el => el._id !== action.payload)
                ]
            }

        case EDIT_DATA_IN_STORE:
            return {
                ...state,
                guestsList: [
                    ...state.guestsList.map(el => {
                        if (el._id === action.payload._id) {
                            return action.payload
                        } else {
                            return el
                        }
                    })
                ]
            }

        default:
            return state;
    }
}
