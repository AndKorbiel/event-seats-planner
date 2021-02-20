import { testAction } from './actions';

const initialState = {
    value: 'Test value'
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
