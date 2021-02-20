import { TEST_ACTION_TYPE, TEST_ACTION_TYPE_REQUEST } from './types/types';

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