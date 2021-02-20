import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { mainReducer } from './reducers';
import MainSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(MainSaga)