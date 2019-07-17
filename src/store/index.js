import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import history from '../routes/history';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'chave',
  storage,
  whitelist: ['auth']
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history)
];

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(connectRouter(history)(persistedReducer), applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };