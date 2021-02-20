import { testAction } from './actions';

const initialState = {
    value: 'Test value'
}

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST_ACTION_TYPE':
            return state;

        default:
            return state;
    }
}
