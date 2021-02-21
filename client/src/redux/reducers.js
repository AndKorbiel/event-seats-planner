import { testAction } from './actions';

const initialState = {
    value: 'Test value',
    guestList:
        [
            {
                id: 1,
                name: "Jan Kowalski",
                category: "Rodzina 1"
            },
            {
                id: 2,
                name: "Janina Kowalska",
                category: "Rodzina 2"
            },
            {
                id: 3,
                name: "Paweł Bądź",
                category: "Rodzina 3"
            },
            {
                id: 4,
                name: "Bogusław Gubała",
                category: "Rodzina 1"
            },
        ]
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST_ACTION_TYPE':
            return {
                ...state,
                value: action.payload
            }

        default:
            return state;
    }
}
